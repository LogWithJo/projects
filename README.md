# Projects (Gallery)

A small React + TypeScript (Vite) app that displays a **gallery of my projects**. Each card loads a **live preview** via an `iframe` pointing to a GitHub Pages URL.

## What it shows
- A grid of project cards (title + description)
- An embedded preview for each project
- A link to open the project in a new tab

## Live preview URLs
Previews are generated from the project `slug` list in `src/App.tsx`.

Each project preview iframe uses:

- `https://logwithjo.github.io/<slug>/`

Example:
- slug: `Notes-App` → `https://logwithjo.github.io/Notes-App/`

## Prerequisites
- Node.js (LTS recommended)

## Setup
```bash
cd projects
npm install
```

## Development
Start the dev server:
```bash
npm run dev
```
Then open the URL shown in your terminal.

## Build
Create a production build:
```bash
npm run build
```

## Preview the production build
```bash
npm run preview
```

## Deploy (GitHub Pages)
This project is configured for GitHub Pages using `gh-pages`.

```bash
npm run deploy
```

## Lint / Typecheck / Format
```bash
npm run lint
npm run typecheck
npm run format
```

## Customization
### Add / remove projects
Edit the `PROJECTS` array in:
- `src/App.tsx`

Each item has:
- `title`
- `description`
- `slug` (used to build the `iframe` preview URL)

