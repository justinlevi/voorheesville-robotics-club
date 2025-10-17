# Troubleshooting Guide

**Project**: Robotics Club Website
**Last Updated**: 2025-10-17

---

## Common Issues

### Build Errors

#### TypeScript Errors

**Problem**: Build fails with TypeScript errors

**Solution**:
```bash
# Run type check
npm run check

# Fix errors shown in output
```

#### Missing Dependencies

**Problem**: Module not found errors

**Solution**:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

### Development Issues

#### Port Already in Use

**Problem**: `Error: Port 4321 is already in use`

**Solution**:
```bash
# Kill process on port 4321
lsof -ti:4321 | xargs kill

# Or use different port
npm run dev -- --port 3000
```

#### Hot Reload Not Working

**Problem**: Changes don't show up automatically

**Solution**:
1. Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
2. Restart dev server
3. Clear browser cache

---

### Content Issues

#### Frontmatter Validation Errors

**Problem**: Build fails with Zod validation error

**Solution**:
- Check that all required fields are present
- Verify date format: `YYYY-MM-DD`
- Ensure arrays are properly formatted: `["item1", "item2"]`

**Example**:
```yaml
---
title: "My Post"           # ✅ String
date: 2025-10-17           # ✅ Valid date
tags: ["robotics"]         # ✅ Array
author: "John"             # ✅ String
description: "Post about..." # ✅ String
---
```

---

### Styling Issues

#### Tailwind Classes Not Working

**Problem**: Tailwind classes don't apply styles

**Solution**:
1. Check `tailwind.config.mjs` has correct content paths:
   ```javascript
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}']
   ```
2. Restart dev server
3. Check for typos in class names

---

### Deployment Issues

#### GitHub Actions Failing

**Problem**: Deployment workflow fails

**Solution**:
1. Check Actions tab for error details
2. Ensure `package.json` scripts are correct
3. Verify Node version matches local (20.x)

#### 404 on Deployed Site

**Problem**: Pages show 404 on GitHub Pages

**Solution**:
- Verify `base` in `astro.config.mjs` matches repo name
- Check GitHub Pages is enabled in Settings
- Wait 2-3 minutes for deployment to complete

---

## Getting Help

1. **Check documentation** in `/docs/` folder
2. **Search existing issues** on GitHub
3. **Ask in club chat** (Slack/Discord)
4. **Create GitHub issue** with:
   - Error message
   - Steps to reproduce
   - Screenshots if relevant

---

## Useful Commands

```bash
# Check for errors
npm run check

# Build for production
npm run build

# Preview production build
npm run preview

# Format code
npm run format

# View Git status
git status

# View recent commits
git log --oneline -5
```

---

*This guide will be updated with new issues and solutions as they arise.*
