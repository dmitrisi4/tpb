# SF Telegram App Frontend

Starter frontend project on Next.js + TypeScript + Tailwind for Telegram Mini App.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- ESLint + import sorting + single quotes
- Prettier
- Husky + lint-staged pre-commit hook

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run typecheck`
- `npm run format`
- `npm run format:check`

## Setup

```bash
npm install
npm run prepare
```

Then run:

```bash
npm run dev
```

## GitHub Pages deploy

A workflow is configured in `.github/workflows/deploy-pages.yml`.

1. Push to the `main` branch.
2. In GitHub, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Wait for workflow **Deploy Next.js to GitHub Pages** to finish.

For project pages (`https://<user>.github.io/<repo>`), base path is configured automatically during GitHub Actions build.
