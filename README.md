# Tayyub Naveed – Portfolio

Personal portfolio of **Tayyub Naveed**, Machine Learning Engineer specialising in computer vision, identity verification, LLMs and agentic AI.

Built with React, TypeScript and SCSS. Features an animated wave hero, dark and light modes, and a responsive layout.

## Run locally

Requires [Node.js](https://nodejs.org/).

```bash
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

## Editing content

All content lives in `src/components`:

| Section | File |
| --- | --- |
| Name, title, social links | `Main.tsx`, `Footer.tsx` |
| Expertise cards | `Expertise.tsx` |
| Career history and education | `Timeline.tsx` |
| Projects | `Project.tsx` (the `projects` array; `link` and `image` are optional) |
| Contact form | `Contact.tsx` |

## Build

```bash
npm run build
```

The production site is written to `build/`.

## Deploy

```bash
npm run deploy
```

Builds the site and publishes it to the `gh-pages` branch, which GitHub Pages serves at [naveedeveloper.github.io](https://naveedeveloper.github.io).

## Credits

Based on the open-source [React Portfolio Template](https://github.com/yujisatojr/react-portfolio-template) by Yuji Sato (MIT).
