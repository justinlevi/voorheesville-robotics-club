# Content Guidelines

**Project**: Robotics Club Website
**Last Updated**: 2025-10-17

---

## Blog Posts

### Creating a New Blog Post

1. Create a new file in `src/content/blog/` with kebab-case naming:
   ```
   src/content/blog/my-first-robot.md
   ```

2. Add required frontmatter:
   ```yaml
   ---
   title: "Building My First Robot"
   description: "A beginner's journey into robotics with Arduino"
   date: 2025-10-17
   author: "Your Name"
   tags: ["robotics", "arduino", "tutorial"]
   image: "/images/blog/my-first-robot.jpg"
   ---
   ```

3. Write your content in Markdown below the frontmatter

### Frontmatter Fields

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| title | Yes | string | Post title (max 100 characters) |
| description | Yes | string | SEO description (max 160 characters) |
| date | Yes | date | Publication date (YYYY-MM-DD) |
| author | Yes | string | Your name |
| tags | Yes | array | Post categories/topics |
| image | No | string | Cover image path |
| draft | No | boolean | If true, won't publish (default: false) |

### Writing Tips

1. **Start with a hook**: Grab attention in the first paragraph
2. **Use headers**: Break content into sections with `##` and `###`
3. **Add images**: Include photos of your process
4. **Show code**: Use code blocks with syntax highlighting
5. **Tell a story**: Explain challenges and solutions
6. **Length**: Aim for 500-2000 words

---

## Project Pages

### Creating a Project Page

1. Create a new file in `src/content/projects/`:
   ```
   src/content/projects/competition-robot-2025.md
   ```

2. Add frontmatter:
   ```yaml
   ---
   title: "Competition Robot 2025"
   description: "Our robot for the 2025 FIRST Robotics Competition"
   date: 2025-10-17
   status: "in-progress"
   tech: ["Arduino", "Python", "CAD", "3D Printing"]
   team: ["Alice", "Bob", "Charlie"]
   image: "/images/projects/robot-2025.jpg"
   featured: true
   ---
   ```

### Project Frontmatter

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| title | Yes | string | Project name |
| description | Yes | string | Brief description |
| date | Yes | date | Start/completion date |
| status | Yes | string | "completed" or "in-progress" |
| tech | Yes | array | Technologies used |
| team | Yes | array | Team member names |
| image | Yes | string | Project photo |
| featured | No | boolean | Show on homepage |

---

## Markdown Reference

### Headers

```markdown
# H1 - Page Title
## H2 - Major Section
### H3 - Subsection
```

### Emphasis

```markdown
**bold text**
*italic text*
`inline code`
```

### Lists

```markdown
Unordered:
- Item 1
- Item 2

Ordered:
1. First step
2. Second step
```

### Links

```markdown
[Link text](https://example.com)
[Internal link](/blog/my-post)
```

### Images

```markdown
![Alt text](/images/photo.jpg)
```

### Code Blocks

````markdown
```python
def hello():
    print("Hello, world!")
```
````

### Tables

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

---

## Image Guidelines

### Image Requirements

- **Format**: JPG or PNG (WebP auto-generated)
- **Size**: Max 2MB per image
- **Dimensions**: 1200x630px for cover images
- **Location**: `/public/images/blog/` or `/public/images/projects/`
- **Naming**: Use kebab-case: `my-robot-photo.jpg`

### Alt Text

Always add descriptive alt text:

```markdown
✅ Good
![Team robot navigating obstacle course at competition](/images/competition.jpg)

❌ Bad
![robot](/images/competition.jpg)
```

---

## SEO Best Practices

### Titles

- Keep under 60 characters
- Include key terms
- Be descriptive and specific

### Descriptions

- Keep under 160 characters
- Summarize the content
- Include a call-to-action

### Tags

- Use 3-6 tags per post
- Be specific: "arduino-uno" not just "arduino"
- Use consistent tags across posts

---

## Quality Checklist

Before publishing:

- [ ] Frontmatter is complete and valid
- [ ] No spelling or grammar errors
- [ ] Images have descriptive alt text
- [ ] Code blocks have syntax highlighting
- [ ] Links work correctly
- [ ] Content is 500+ words (for blog posts)
- [ ] Git commit message is descriptive

---

*Happy writing! Your contributions make this club great.*
