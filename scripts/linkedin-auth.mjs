#!/usr/bin/env node

/**
 * LinkedIn OAuth 2.0 Authentication Helper
 *
 * Usage:
 *   node scripts/linkedin-auth.mjs auth     # Start OAuth flow (first time)
 *   node scripts/linkedin-auth.mjs refresh   # Refresh expired token
 *
 * Required env vars: LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET
 * Redirect URI: http://localhost:3939/callback
 */

import http from "node:http";
import { URL } from "node:url";

const CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
const CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:3939/callback";
const SCOPES = "w_member_social w_organization_social r_organization_social";
const PORT = 3939;

const mode = process.argv[2];

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Error: Set LINKEDIN_CLIENT_ID and LINKEDIN_CLIENT_SECRET in your environment.");
  process.exit(1);
}

if (mode === "auth") {
  startAuthFlow();
} else if (mode === "refresh") {
  refreshToken();
} else {
  console.log("Usage:");
  console.log("  node scripts/linkedin-auth.mjs auth     # Start OAuth flow");
  console.log("  node scripts/linkedin-auth.mjs refresh   # Refresh token");
  process.exit(0);
}

function startAuthFlow() {
  const authUrl = new URL("https://www.linkedin.com/oauth/v2/authorization");
  authUrl.searchParams.set("response_type", "code");
  authUrl.searchParams.set("client_id", CLIENT_ID);
  authUrl.searchParams.set("redirect_uri", REDIRECT_URI);
  authUrl.searchParams.set("scope", SCOPES);
  authUrl.searchParams.set("state", crypto.randomUUID());

  console.log("\n1. Open this URL in your browser:\n");
  console.log(authUrl.toString());
  console.log("\n2. Authorize the app. You'll be redirected to localhost.\n");
  console.log("Waiting for callback...\n");

  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://localhost:${PORT}`);

    if (url.pathname === "/callback") {
      const code = url.searchParams.get("code");
      const error = url.searchParams.get("error");

      if (error) {
        res.writeHead(400, { "Content-Type": "text/html" });
        res.end(`<h1>Error: ${error}</h1><p>${url.searchParams.get("error_description")}</p>`);
        console.error(`Error: ${error}`);
        server.close();
        process.exit(1);
      }

      if (code) {
        try {
          const tokens = await exchangeCodeForTokens(code);
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end("<h1>Success!</h1><p>You can close this window. Check your terminal.</p>");

          console.log("Tokens obtained successfully!\n");
          console.log("Add these to your .env file:\n");
          console.log(`LINKEDIN_ACCESS_TOKEN=${tokens.access_token}`);
          console.log(`LINKEDIN_REFRESH_TOKEN=${tokens.refresh_token || "N/A"}`);
          console.log(`LINKEDIN_TOKEN_EXPIRES=${Date.now() + tokens.expires_in * 1000}`);
          console.log(`\nAccess token expires in ${Math.round(tokens.expires_in / 86400)} days.`);
        } catch (err) {
          res.writeHead(500, { "Content-Type": "text/html" });
          res.end(`<h1>Error exchanging code</h1><pre>${err.message}</pre>`);
          console.error("Error:", err.message);
        }
      }

      server.close();
    }
  });

  server.listen(PORT, () => {
    console.log(`Callback server listening on port ${PORT}...`);
  });
}

async function exchangeCodeForTokens(code) {
  const params = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URI,
  });

  const res = await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token exchange failed (${res.status}): ${text}`);
  }

  return res.json();
}

async function refreshToken() {
  const refreshToken = process.env.LINKEDIN_REFRESH_TOKEN;
  if (!refreshToken) {
    console.error("Error: Set LINKEDIN_REFRESH_TOKEN in your environment.");
    process.exit(1);
  }

  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  });

  const res = await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`Refresh failed (${res.status}): ${text}`);
    console.log("\nTry running: node scripts/linkedin-auth.mjs auth");
    process.exit(1);
  }

  const tokens = await res.json();
  console.log("Token refreshed!\n");
  console.log(`LINKEDIN_ACCESS_TOKEN=${tokens.access_token}`);
  console.log(`LINKEDIN_REFRESH_TOKEN=${tokens.refresh_token || refreshToken}`);
  console.log(`LINKEDIN_TOKEN_EXPIRES=${Date.now() + tokens.expires_in * 1000}`);
}
