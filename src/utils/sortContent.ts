import type { CollectionEntry } from 'astro:content';

/**
 * Sorts blog posts by date (newest first)
 */
export function sortBlogPosts(posts: CollectionEntry<'blog'>[]) {
  return posts.sort((a, b) => {
    return b.data.date.getTime() - a.data.date.getTime();
  });
}

/**
 * Sorts projects by date (newest first)
 */
export function sortProjects(projects: CollectionEntry<'projects'>[]) {
  return projects.sort((a, b) => {
    return b.data.date.getTime() - a.data.date.getTime();
  });
}

/**
 * Filters out draft posts in production, shows all in development
 */
export function filterDrafts<T extends CollectionEntry<'blog'>>(posts: T[]): T[] {
  // In development, show all posts including drafts
  if (import.meta.env.DEV) {
    return posts;
  }

  // In production, filter out drafts
  return posts.filter(post => !post.data.draft);
}

/**
 * Gets featured projects
 */
export function getFeaturedProjects(projects: CollectionEntry<'projects'>[]) {
  return projects.filter(project => project.data.featured);
}

/**
 * Groups content by a specific field
 */
export function groupBy<T, K extends keyof T>(array: T[], key: K): Map<T[K], T[]> {
  return array.reduce((map, item) => {
    const keyValue = item[key];
    const group = map.get(keyValue) || [];
    group.push(item);
    map.set(keyValue, group);
    return map;
  }, new Map<T[K], T[]>());
}

/**
 * Gets unique tags from blog posts
 */
export function getUniqueTags(posts: CollectionEntry<'blog'>[]): string[] {
  const tags = posts.flatMap(post => post.data.tags);
  return [...new Set(tags)].sort();
}

/**
 * Filters posts by tag
 */
export function filterByTag(posts: CollectionEntry<'blog'>[], tag: string) {
  return posts.filter(post => post.data.tags.includes(tag));
}
