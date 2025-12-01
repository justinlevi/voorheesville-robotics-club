# Copilot Instructions for Voorheesville Robotics Club Website

## Project Overview

This is an Astro 5.x static site for a high school robotics club, optimized for student maintainability. Built with TypeScript (strict mode), Tailwind CSS 4.x, and Zod-validated content collections. Deployed to GitHub Pages via GitHub Actions.

## Architecture Patterns

### Content Collections (Primary Data Layer)
- **Three collections** defined in `src/content/config.ts`: `blog`, `projects`, `reviews`
- All frontmatter is Zod-validated at build time - check schemas before adding fields
- Draft filtering: `filterDrafts()` shows drafts in dev, hides in production (see `src/utils/sortContent.ts`)
- Content files use kebab-case naming: `my-first-robot.md`

### Path Aliases (`@/`)
Import resolution configured in `tsconfig.json`:
```typescript
import BaseLayout from '@/layouts/BaseLayout.astro';
import { formatDate } from '@/utils/formatDate';
```
Always use `@/` for internal imports - never relative paths for cross-directory imports.

### Component Structure (Standard Order)
```astro
---
// 1. Type imports (astro:content types)
// 2. Component imports (@/layouts, @/components)
// 3. Utility imports (@/utils)
// 4. Props interface (always define)
// 5. Props destructuring
// 6. Data fetching/logic
---
<!-- 7. Template -->
```

### Layouts Hierarchy
- `BaseLayout.astro`: Root layout with SEO, Header, Footer - all pages use this
- `BlogLayout.astro`: Extends BaseLayout for blog posts (includes reading time, tags)
- `ProjectLayout.astro`: Extends BaseLayout for project pages (includes tech stack, team)
- `ReviewLayout.astro`: Extends BaseLayout for product reviews (includes rating)

## Development Workflows

### Commands
```bash
npm run dev      # Dev server at localhost:4321 (shows drafts)
npm run check    # TypeScript validation (runs before build)
npm run build    # Production build to ./dist (filters drafts)
npm run preview  # Preview production build locally
```

### Adding Content
**Blog post**: Create `src/content/blog/title.md` with required frontmatter (title, description, date, author, tags). Optional: image, draft.

**Project**: Create `src/content/projects/name.md` with required frontmatter (title, description, date, status, tech, team, image). Use `featured: true` to show on homepage.

**Review**: Create `src/content/reviews/product.md` with required frontmatter (title, description, date, author). Optional: rating (0-10), tags, image.

### Type Safety
- **Strict mode enabled** - always annotate function params and return types
- **Never use `any`** - define interfaces for complex data
- **Content type safety**: Use `CollectionEntry<'blog'>` for blog posts, `CollectionEntry<'projects'>` for projects

## Coding Conventions

### Naming
- Components/Layouts: PascalCase (`BlogCard.astro`)
- Pages: kebab-case (`about.astro`, dynamic: `[slug].astro`)
- Utils: camelCase (`formatDate.ts`)
- Content files: kebab-case (`my-post.md`)

### Tailwind Class Order
Layout → Spacing → Typography → Colors → Effects
```html
<div class="flex flex-col gap-4 p-6 text-lg font-semibold text-gray-900 bg-white rounded-lg shadow-md">
```

### Comments
Comment WHY, not WHAT. Explain business logic, not obvious syntax:
```typescript
// Filter out draft posts in production, but show them in development
// This allows preview of drafts locally without publishing
const posts = filterDrafts(allPosts);
```

## Key Integration Points

### SEO Component (`src/components/SEO.astro`)
Handles all meta tags, Open Graph, Twitter cards. Pass via BaseLayout props:
```astro
<BaseLayout 
  title="Page Title"
  description="SEO description (max 160 chars)"
  image="/images/og-image.jpg"
  article={true}
  publishDate={post.data.date}
/>
```

### Utility Functions (`src/utils/`)
- `sortContent.ts`: Content filtering/sorting (sortBlogPosts, filterDrafts, getFeaturedProjects)
- `formatDate.ts`: Date formatting (formatDate, formatDateShort)
- `getReadingTime.ts`: Calculate reading time from markdown body

### Deployment
- **Trigger**: Push to `main` branch or manual workflow dispatch
- **Process**: Type check → Build → Deploy to GitHub Pages
- **Site URL**: Configured in `astro.config.mjs` as `voorheesvillerobotics.com`

## Educational Context

This codebase is designed for high school students. Prioritize:
- **Clarity over cleverness** - write self-documenting code
- **Consistent patterns** - follow existing component structure
- **Type safety** - leverage TypeScript to catch errors early
- **Documentation** - explain complex logic with comments

Refer to `/docs/` for comprehensive guides on architecture, coding standards, and content creation.
