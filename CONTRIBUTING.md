# Contributing to Robotics Club Website

Thank you for your interest in contributing to our website! This document provides guidelines for contributing.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone <your-fork-url>
   cd robotics-club
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Making Changes

### Code Changes

1. Follow the coding standards in `/docs/coding-standards.md`
2. Use TypeScript strict mode (no `any` types)
3. Write descriptive commit messages
4. Test your changes locally:
   ```bash
   npm run dev      # Test in development
   npm run check    # Check for TypeScript errors
   npm run build    # Test production build
   ```

### Content Changes

1. Follow content guidelines in `/docs/content-guidelines.md`
2. Use proper frontmatter for blog posts and projects
3. Add descriptive alt text to images
4. Check spelling and grammar

## Commit Messages

Use conventional commits format:

```
<type>: <description>

[optional body]
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style (formatting, no logic change)
- `refactor`: Code refactoring
- `content`: Content changes (blog posts, projects)
- `chore`: Maintenance tasks

**Examples**:
```
feat: add dark mode toggle
fix: resolve mobile navigation overflow
content: add competition results blog post
docs: update README with deployment instructions
```

## Pull Request Process

1. **Update your branch** with latest main:
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Push your changes**:
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Open a Pull Request** on GitHub

4. **Fill out the PR template** with:
   - Description of changes
   - Why this change is needed
   - Screenshots (if UI changes)
   - Testing performed

5. **Wait for review** - a maintainer will review your PR

6. **Address feedback** if requested

7. **Merge** - once approved, your PR will be merged!

## Code Review Guidelines

When reviewing PRs:

- Check for TypeScript errors
- Verify responsive design
- Test on multiple browsers
- Check accessibility (color contrast, keyboard navigation)
- Ensure proper SEO tags
- Verify content has proper frontmatter
- Check for broken links

## Content Contribution Workflow

### Adding a Blog Post

1. Create file in `src/content/blog/your-post-name.md`
2. Add required frontmatter
3. Write your content
4. Add images to `/public/images/blog/`
5. Test locally
6. Submit PR with the label `content`

### Adding a Project

Same as blog post, but in `src/content/projects/`

## Style Guide

### TypeScript

- Use strict mode
- Always define types for function parameters and return values
- No `any` types unless absolutely necessary
- Use `interface` for objects, `type` for unions

### Astro Components

- Define Props interface
- Order imports: types, components, utilities
- Use descriptive variable names
- Add comments for complex logic

### CSS/Tailwind

- Mobile-first responsive design
- Use Tailwind utilities when possible
- Order classes: layout → spacing → typography → colors → effects
- Ensure WCAG AA color contrast

## Testing

Before submitting a PR:

- [ ] `npm run check` passes (no TypeScript errors)
- [ ] `npm run build` succeeds
- [ ] Tested in Chrome, Firefox, and Safari
- [ ] Tested on mobile device
- [ ] All links work
- [ ] Images have alt text
- [ ] No console errors

## Questions?

- Check `/docs/troubleshooting.md` for common issues
- Ask in our Discord server
- Open a GitHub Discussion for questions

Thank you for contributing! 🤖
