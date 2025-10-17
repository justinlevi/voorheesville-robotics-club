# Coding Standards & Style Guide

**Project**: Robotics Club Website
**Last Updated**: 2025-10-17

---

## General Principles

### Code Quality
1. **Clarity over Cleverness**: Write code that's easy to understand
2. **DRY (Don't Repeat Yourself)**: Reuse code through components and utilities
3. **KISS (Keep It Simple)**: Prefer simple solutions over complex ones
4. **Educational Focus**: Code should be readable by high school students

---

## TypeScript Standards

### Strict Mode

Always use TypeScript strict mode:

```json
{
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true
  }
}
```

### Type Annotations

Always annotate function parameters and return types:

```typescript
// ✅ Good
function formatDate(date: Date): string {
  return date.toLocaleDateString();
}

// ❌ Bad
function formatDate(date) {
  return date.toLocaleDateString();
}
```

### Avoid `any`

Never use `any` unless absolutely necessary:

```typescript
// ❌ Bad
function processData(data: any) {
  // ...
}

// ✅ Good
interface PostData {
  title: string;
  date: Date;
}

function processData(data: PostData) {
  // ...
}
```

---

## Astro Component Standards

### File Naming

Use PascalCase for component files:

```
✅ BlogCard.astro
✅ ProjectCard.astro
✅ SEO.astro

❌ blogCard.astro
❌ project-card.astro
```

### Component Structure

Follow this order in Astro components:

```astro
---
// 1. Type imports
import type { CollectionEntry } from 'astro:content';

// 2. Component imports
import BaseLayout from '@/layouts/BaseLayout.astro';

// 3. Utility imports
import { formatDate } from '@/utils/formatDate';

// 4. Props interface
interface Props {
  title: string;
  posts: CollectionEntry<'blog'>[];
}

// 5. Props destructuring
const { title, posts } = Astro.props;

// 6. Data fetching / logic
const recentPosts = posts.slice(0, 5);
---

<!-- 7. Template -->
<BaseLayout title={title}>
  <h1>{title}</h1>
</BaseLayout>
```

### Props

Always define Props interface for components:

```astro
---
// ✅ Good - typed props
interface Props {
  title: string;
  description?: string; // Optional prop
  date: Date;
}

const { title, description, date } = Astro.props;
---
```

---

## Styling Standards (Tailwind CSS)

### Class Organization

Order Tailwind classes logically:

```html
<!-- Order: Layout → Spacing → Typography → Colors → Effects -->
<div class="flex flex-col gap-4 p-6 text-lg font-semibold text-gray-900 bg-white rounded-lg shadow-md">
</div>
```

### Responsive Design

Use Tailwind breakpoints consistently:

```html
<!-- Mobile first approach -->
<div class="text-base md:text-lg lg:text-xl">
  <!-- Scales up from mobile -->
</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- 1 column mobile, 2 tablet, 3 desktop -->
</div>
```

---

## File & Folder Naming

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `BlogCard.astro` |
| Layouts | PascalCase | `BaseLayout.astro` |
| Pages | kebab-case | `about.astro`, `blog/[slug].astro` |
| Utils | camelCase | `formatDate.ts` |
| Content | kebab-case | `my-first-post.md` |

---

## Comments & Documentation

### When to Comment

Comment WHY, not WHAT:

```typescript
// ❌ Bad - comments the obvious
// Get all blog posts
const posts = await getCollection('blog');

// ✅ Good - explains reasoning
// Filter out draft posts in production, but show them in development
// This allows preview of drafts locally without publishing
const posts = (await getCollection('blog'))
  .filter(post => import.meta.env.DEV || !post.data.draft);
```

---

## Git Workflow

### Branch Naming

Use descriptive branch names:

```bash
✅ Good
feature/add-dark-mode
fix/mobile-navigation
content/new-blog-post

❌ Bad
update
fix
branch1
```

### Commit Messages

Follow Conventional Commits format:

```bash
✅ Good
feat: add dark mode toggle to header
fix: resolve mobile menu overflow issue
docs: update contribution guidelines
content: add robotics competition blog post

❌ Bad
updated stuff
fix
changes
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style (formatting, no logic change)
- `refactor`: Code refactoring
- `content`: Content changes (blog posts, projects)

---

## Accessibility Standards

### Semantic HTML

Always use semantic HTML elements:

```html
✅ Good
<article>
  <header>
    <h1>Blog Post Title</h1>
  </header>
  <main>
    <p>Content...</p>
  </main>
</article>

❌ Bad
<div>
  <div>
    <div class="title">Blog Post Title</div>
  </div>
</div>
```

### Alt Text

All images must have descriptive alt text:

```html
✅ Good
<img src="robot.jpg" alt="Team's autonomous robot navigating maze during competition">

❌ Bad
<img src="robot.jpg" alt="robot">
```

### Color Contrast

Ensure WCAG AA compliance (4.5:1 for normal text):

```css
✅ Good
color: #1F2937; /* Dark gray on white = 12:1 */

❌ Bad
color: #D1D5DB; /* Light gray on white = 2:1 - fails */
```

---

*These standards are guidelines, not rigid rules. Use good judgment and ask questions when unsure.*
