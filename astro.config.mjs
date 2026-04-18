import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const repository = process.env.GITHUB_REPOSITORY ?? "";
const [owner = "", repo = ""] = repository.split("/");
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const isUserSite = repo.endsWith(".github.io");
const base = isGitHubActions && repo ? (isUserSite ? "/" : `/${repo}/`) : "/";
const site = isGitHubActions && owner ? `https://${owner}.github.io` : undefined;

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
});
