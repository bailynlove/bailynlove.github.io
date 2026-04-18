# Chaoxiang Xie Academic Homepage

This project uses Astro to build a static academic homepage suitable for GitHub Pages.

## Why Astro

- Static-first output is a strong fit for academic personal sites.
- Official GitHub Pages deployment is straightforward.
- The site content is easy to maintain in plain project files without a backend.

Official references:

- GitHub Pages overview: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- Astro GitHub Pages deployment: https://docs.astro.build/en/guides/deploy/github/
- Astro content modeling guidance: https://docs.astro.build/en/guides/content-collections/

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Publish to GitHub Pages

1. Create a GitHub repository.
2. Push this project to the `main` branch.
3. In GitHub, enable Pages and set the source to `GitHub Actions`.
4. If the repository name is not `<your-username>.github.io`, Astro will automatically use `/<repo>/` as the site base path during the GitHub Actions build.

For this repository:

- Repository: `bailynlove/xiechaoxiang.github.io`
- Default Pages URL: `https://bailynlove.github.io/xiechaoxiang.github.io/`

## Content to verify before publishing

- Replace any missing contact links such as GitHub profile URL or email.
- Update publication status once papers are accepted.
- Add avatar, CV PDF, or project links if you want a richer profile.
