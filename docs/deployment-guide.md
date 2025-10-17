# Deployment Guide

**Project**: Robotics Club Website
**Last Updated**: 2025-10-17

---

## Overview

This guide covers deploying the robotics club website to GitHub Pages using automated CI/CD with GitHub Actions.

---

## GitHub Pages Setup

### 1. Repository Settings

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select: **GitHub Actions**

### 2. Configure Base Path

If deploying to `https://[username].github.io/[repo-name]/`, update `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://[username].github.io',
  base: '/[repo-name]',
});
```

If deploying to a custom domain, use:

```javascript
export default defineConfig({
  site: 'https://yourdomain.com',
});
```

---

## GitHub Actions Workflow

The `.github/workflows/deploy.yml` file handles automatic deployment:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## Deployment Process

### Standard Workflow

```bash
# 1. Make changes locally
git add .
git commit -m "feat: add new blog post"

# 2. Push to GitHub
git push origin main

# 3. GitHub Actions automatically builds and deploys

# 4. Visit your site at:
#    https://[username].github.io/[repo-name]/
```

---

## Troubleshooting

### Build Fails on GitHub Actions

**Check Action logs**:
- Go to Actions tab in GitHub
- Click failed workflow
- Read error messages

### 404 Errors After Deployment

**Check base path** in `astro.config.mjs`:
```javascript
base: '/robotics-club', // Must match repo name
```

### Images Not Loading

**Use correct paths**:
```html
<!-- Images in /public/ -->
<img src="/images/photo.jpg" alt="...">
```

---

## Pre-Deployment Checklist

- [ ] `npm run build` succeeds locally
- [ ] No TypeScript errors
- [ ] All links work
- [ ] Images are optimized
- [ ] Content has proper frontmatter

---

*This guide will be updated as deployment processes evolve.*
