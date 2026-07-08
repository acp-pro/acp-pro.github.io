# ACP Pro Homepage

Static product homepage for ACP Pro, built with Astro and Tailwind CSS v4 for GitHub Pages at `https://acp-pro.github.io`.

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Deployment

Push to `main` to run `.github/workflows/deploy.yml`. The workflow installs dependencies, builds the static Astro output, and deploys `dist/` to GitHub Pages.

## Foundation

- Astro static output
- Tailwind CSS v4 through `@tailwindcss/vite`
- `@astrojs/sitemap`
- Product metadata and JSON-LD for `https://acp-pro.github.io`
- Install links for Visual Studio Marketplace and Open VSX
- Real Marketplace icon and demo GIF assets
