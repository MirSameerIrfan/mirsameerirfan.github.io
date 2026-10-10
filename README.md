# mirsameerirfan.github.io

Personal site of Mir Sameer Irfan: selected work, experience and writing. Built with Astro and Tailwind CSS, with no client-side framework.

## 🚀 Tech Stack

- **[Astro](https://astro.build)** - Modern static site generator
- **[MDX](https://mdxjs.com/)** - Markdown with JSX support for blog posts
- **TypeScript** - Type-safe development
- **[Tailwind CSS 4](https://tailwindcss.com)** - Styling, with design tokens in `src/styles/global.css`
- **View Transitions** - Page-to-page animation through Astro's `ClientRouter`

## 📦 Project Structure

```
/
├── public/             # Static assets (favicon, social preview image)
├── src/
│   ├── components/     # Reusable Astro components
│   ├── assets/         # Fonts and project screenshots
│   ├── content/        # Blog posts (blog/) and case studies (work/)
│   ├── scripts/        # site.ts: scroll reveals, cursor preview, hero dot field
│   ├── layouts/        # Page layouts
│   ├── pages/          # File-based routing pages
│   ├── styles/         # Global styles
│   └── consts.ts       # Site constants and configuration
├── astro.config.mjs    # Astro configuration
└── package.json
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/MirSameerIrfan/mirsameerirfan.github.io.git
cd mirsameerirfan.github.io
```

2. Install dependencies:
```bash
npm install
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |

## 🚢 Deployment

This site is deployed using **GitHub Pages**. The deployment is automated through GitHub Actions.

### Deployment Process

1. Push changes to the `main` branch
2. GitHub Actions automatically builds the site
3. The built site is deployed to GitHub Pages

The site is available at: [https://mirsameerirfan.github.io](https://mirsameerirfan.github.io)

## 📝 Creating New Blog Posts

Add new blog posts in the `src/content/blog/` directory. Both `.md` and `.mdx` files are supported.

Example frontmatter:
```yaml
---
title: 'Your Post Title'
description: 'A brief description of your post'
pubDate: 'Jan 01 2024'
---
```

## 🗂️ Adding a Project

Add a Markdown file in `src/content/work/`. It appears on the home page, on `/work`, and gets its own case-study page.

```yaml
---
title: 'Project name'
summary: 'One sentence shown in lists and under the title'
year: 2026
role: 'What you did'
status: 'Live'                 # optional
order: 3                       # lower numbers come first
stack: ['TypeScript', 'React']
repo: 'https://github.com/...' # optional
live: 'https://...'            # optional
cover: '../../assets/work/screenshot.jpg' # optional
coverAlt: 'What the screenshot shows'
---
```

If `cover` is left out, a typographic cover is generated from the title and stack.

## ✨ Features

- 📱 Fully responsive design
- ♿ Accessible components
- 📝 MDX support for rich blog content
- 🎞️ Motion that respects `prefers-reduced-motion`
- 🚀 Fast performance with Astro
- 🔍 SEO optimized

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mir Sameer Irfan**
- GitHub: [@MirSameerIrfan](https://github.com/mirsameerirfan)
- Twitter: [@Mirsameer_](https://x.com/Mirsameer_)
- LinkedIn: [mirsameerirfan](https://linkedin.com/in/mirsameerirfan)