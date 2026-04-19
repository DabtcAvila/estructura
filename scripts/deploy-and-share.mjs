#!/usr/bin/env node

/**
 * Deploy article to GitHub (triggers Cloudflare Pages auto-deploy) and share on LinkedIn
 *
 * Usage:
 *   node scripts/deploy-and-share.mjs <slug>
 *
 * Example:
 *   node scripts/deploy-and-share.mjs afores-rendimientos-primer-trimestre-2025
 *
 * Required env vars: LINKEDIN_ACCESS_TOKEN, LINKEDIN_ORG_ID
 */

import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { resolve } from "node:path";

const slug = process.argv[2];

if (!slug) {
  console.log("Usage: node scripts/deploy-and-share.mjs <slug>");
  process.exit(1);
}

const SITE_URL = "https://estructura.org";
const ARTICLE_DIR = "src/content/articulos";
const DEPLOY_WAIT_MS = 90_000; // 90 seconds for Cloudflare Pages to deploy

async function main() {
  const filePath = resolve(ARTICLE_DIR, `${slug}.md`);

  // 1. Read and parse frontmatter
  console.log(`Reading article: ${filePath}`);
  let content;
  try {
    content = readFileSync(filePath, "utf-8");
  } catch {
    console.error(`Article not found: ${filePath}`);
    process.exit(1);
  }

  const frontmatter = parseFrontmatter(content);
  if (!frontmatter.title) {
    console.error("Article missing title in frontmatter.");
    process.exit(1);
  }

  console.log(`Title: ${frontmatter.title}`);
  console.log(`Category: ${frontmatter.category}`);

  // 2. Git add, commit, push
  console.log("\nPushing to GitHub...");
  try {
    execSync(`git add "${filePath}"`, { stdio: "inherit" });
    execSync(
      `git commit -m "Publicar: ${frontmatter.title}"`,
      { stdio: "inherit" }
    );
    execSync("git push origin main", { stdio: "inherit" });
    console.log("Pushed to GitHub successfully.");
  } catch (err) {
    console.error("Git push failed. Changes may already be committed.");
  }

  // 3. Wait for Cloudflare Pages deploy
  console.log(`\nWaiting ${DEPLOY_WAIT_MS / 1000}s for Cloudflare Pages deploy...`);
  await sleep(DEPLOY_WAIT_MS);

  // 4. Post to LinkedIn
  const articleUrl = `${SITE_URL}/publicaciones/${slug}/`;
  const description = frontmatter.description || frontmatter.title;

  if (process.env.LINKEDIN_ACCESS_TOKEN && process.env.LINKEDIN_ORG_ID) {
    console.log("\nPosting to LinkedIn...");
    try {
      const { default: post } = await import("./linkedin-post.mjs");
    } catch {
      // Run as subprocess to keep env vars
      execSync(
        `node scripts/linkedin-post.mjs "${articleUrl}" "${frontmatter.title}" "${description}"`,
        { stdio: "inherit" }
      );
    }
    console.log("LinkedIn post completed.");
  } else {
    console.log("\nSkipping LinkedIn post (LINKEDIN_ACCESS_TOKEN or LINKEDIN_ORG_ID not set).");
    console.log(`Article URL: ${articleUrl}`);
  }

  console.log("\nDone!");
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const fm = {};
  const lines = match[1].split("\n");
  let currentKey = null;

  for (const line of lines) {
    const kvMatch = line.match(/^(\w+):\s*(.+)/);
    if (kvMatch) {
      const [, key, value] = kvMatch;
      fm[key] = value.replace(/^["']|["']$/g, "");
      currentKey = key;
    }
  }

  return fm;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main();
