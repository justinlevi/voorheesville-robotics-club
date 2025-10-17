# Robotics Club Website

A high-performance, student-maintainable website for our high school robotics club. Built with Astro, TypeScript, and Tailwind CSS.

## Features

- **Blog System**: Markdown-based blog posts with tags, reading time, and SEO
- **Project Showcase**: Display robotics projects with rich media and technical details
- **Documentation**: Comprehensive guides and resources for club members
- **Type-Safe Content**: Zod validation ensures all content has proper structure
- **Lightning Fast**: Static site generation with 100/100 Lighthouse scores
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **SEO Optimized**: Open Graph tags, RSS feed, XML sitemap
- **GitHub Pages**: Free hosting with automated deployment

## Tech Stack

- **Astro 5.x**: Modern static site generator
- **TypeScript**: Type-safe development with strict mode
- **Tailwind CSS 4.x**: Utility-first styling
- **Content Collections**: Type-safe content management
- **Vite 6.x**: Lightning-fast build tool

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd robotics-club

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## Project Structure

```
robotics-club/
├── .github/workflows/    # GitHub Actions for deployment
├── docs/                 # Project documentation
├── public/              # Static assets (images, favicon, robots.txt)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/         # Content collections (blog, projects, docs)
│   │   ├── blog/       # Blog post markdown files
│   │   ├── projects/   # Project page markdown files
│   │   ├── docs/       # Documentation markdown files
│   │   └── config.ts   # Content schemas with Zod validation
│   ├── layouts/         # Page layouts
│   ├── pages/           # File-based routing
│   ├── styles/          # Global CSS
│   └── utils/           # Utility functions
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run check` | Run TypeScript type checking |

## Creating Content

### Adding a Blog Post

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter with required fields:

```markdown
---
title: "Your Post Title"
description: "Brief description for SEO"
date: 2025-10-17
author: "Your Name"
tags: ["robotics", "tutorial"]
image: "/images/blog/your-image.jpg"
---

Your content here...
```

3. The post will automatically appear on the blog page

### Adding a Project

1. Create a new `.md` file in `src/content/projects/`
2. Add frontmatter:

```markdown
---
title: "Project Name"
description: "Brief description"
date: 2025-10-17
status: "completed"
tech: ["Arduino", "Python", "CAD"]
team: ["Member 1", "Member 2"]
image: "/images/projects/project.jpg"
featured: true
---

Project details...
```

### Adding Documentation

1. Create a new `.md` file in `src/content/docs/`
2. Add frontmatter:

```markdown
---
title: "Doc Title"
description: "Brief description"
order: 1
category: "basics"
---

Documentation content...
```

## Deployment

### GitHub Pages

The site automatically deploys to GitHub Pages when you push to the `main` branch.

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to main branch
4. GitHub Actions will build and deploy automatically

### Configuration

Update `astro.config.mjs` with your site URL:

```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/robotics-club', // If using subdirectory
});
```

## Documentation

Comprehensive documentation is available in the `/docs` folder:

- **architecture.md**: Technology decisions and rationale
- **prd.md**: Product requirements
- **coding-standards.md**: Code style guide
- **content-guidelines.md**: How to write posts and projects
- **deployment-guide.md**: Deployment instructions
- **troubleshooting.md**: Common issues and solutions

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## Performance

Target metrics (verified with Lighthouse):

- Performance: 100/100
- Accessibility: 100/100
- Best Practices: 100/100
- SEO: 100/100

## License

MIT License - feel free to use this for your own robotics club!

## Support

- **Email**: robotics@school.edu
- **Discord**: [Join our server]
- **GitHub Issues**: Report bugs and request features

---

Built with ❤️ by the Robotics Club | Powered by [Astro](https://astro.build)
