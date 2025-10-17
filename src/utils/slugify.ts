/**
 * Converts a string into a URL-friendly slug
 * - Converts to lowercase
 * - Replaces spaces with hyphens
 * - Removes special characters
 * - Removes consecutive hyphens
 *
 * @param text - The text to slugify
 * @returns URL-friendly slug
 *
 * @example
 * slugify("Hello World!") // "hello-world"
 * slugify("Getting Started with Arduino") // "getting-started-with-arduino"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Converts a slug back to a readable title
 * @param slug - The slug to convert
 * @returns Human-readable title
 *
 * @example
 * deslugify("hello-world") // "Hello World"
 */
export function deslugify(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
