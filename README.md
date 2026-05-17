# GRIMLABS

A public, long-term independent research and tinkering lab. Exploring, building, and documenting experimental projects in engineering, technology, and scientific inquiry.

Built with Next.js and Sanity CMS. Deployed on Vercel.

---

## Stack

- **Framework** — [Next.js 15](https://nextjs.org) (App Router)
- **CMS** — [Sanity](https://sanity.io) (blog posts, projects, content)
- **Styling** — [Tailwind CSS v4](https://tailwindcss.com)
- **Rendering** — [KaTeX](https://katex.org) for LaTeX, [highlight.js](https://highlightjs.org) for code blocks
- **Deployment** — [Vercel](https://vercel.com)

---

## Getting Started

### Prerequisites

- Node.js 18+
- A Sanity project (for content)

### Environment variables

Create a `.env.local` file at the root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
```

### Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other commands

```bash
npm run build      # production build
npm run start      # serve production build locally
npm run lint       # run ESLint
```

---

## Project structure

```
app/                  # Next.js app router pages
  blog/[slug]/        # Blog post page
  projects/[slug]/    # Project detail page
components/           # Shared UI components
sanity/               # Sanity schema and client config
utils/                # Helpers (heading extraction, etc.)
public/               # Static assets
```

---

## Content

Content is managed through Sanity Studio. Blog posts and projects support:

- Rich text with headings, blockquotes, lists
- Code blocks with syntax highlighting
- LaTeX / math rendering
- Tables
- Embedded images
- Table of contents (auto-generated from headings)

---

## Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: description"`
4. Push: `git push origin feature/your-feature`
5. Open a pull request against `main`

Please keep PRs focused — one feature or fix per PR. Follow the existing code style (Tailwind classes, CSS variables for theming, no inline colour styles that override hover states).

---

## Deployment

The `main` branch deploys automatically to Vercel on merge. Branch protection is enabled — all changes go through a pull request.
