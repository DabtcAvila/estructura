#!/usr/bin/env node

/**
 * Post an article link to LinkedIn
 *
 * Usage:
 *   node scripts/linkedin-post.mjs <article-url> <title> <description>
 *
 * Required env vars: LINKEDIN_ACCESS_TOKEN, LINKEDIN_ORG_ID
 */

const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
const orgId = process.env.LINKEDIN_ORG_ID;

const [, , articleUrl, title, description] = process.argv;

if (!accessToken || !orgId) {
  console.error("Error: Set LINKEDIN_ACCESS_TOKEN and LINKEDIN_ORG_ID in your environment.");
  process.exit(1);
}

if (!articleUrl || !title) {
  console.log("Usage: node scripts/linkedin-post.mjs <article-url> <title> [description]");
  process.exit(1);
}

async function postToLinkedIn() {
  const body = {
    author: `urn:li:organization:${orgId}`,
    lifecycleState: "PUBLISHED",
    specificContent: {
      "com.linkedin.ugc.ShareContent": {
        shareCommentary: {
          text: description || title,
        },
        shareMediaCategory: "ARTICLE",
        media: [
          {
            status: "READY",
            originalUrl: articleUrl,
            title: {
              text: title,
            },
            description: {
              text: description || title,
            },
          },
        ],
      },
    },
    visibility: {
      "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
    },
  };

  const res = await fetch("https://api.linkedin.com/v2/ugcPosts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "X-Restli-Protocol-Version": "2.0.0",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`LinkedIn post failed (${res.status}): ${text}`);
    process.exit(1);
  }

  const data = await res.json();
  console.log("Posted to LinkedIn successfully!");
  console.log(`Post ID: ${data.id}`);
  return data;
}

postToLinkedIn();
