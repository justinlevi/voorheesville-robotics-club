/**
 * Calculates estimated reading time based on word count
 * Assumes average reading speed of 200 words per minute
 *
 * @param content - The markdown/text content to analyze
 * @returns Reading time string (e.g., "5 min read")
 */
export function getReadingTime(content: string): string {
  const wordsPerMinute = 200;

  // Remove markdown syntax and count words
  const text = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/#{1,6}\s/g, '') // Remove headers
    .replace(/[*_~]/g, '') // Remove emphasis markers
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Convert links to text
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // Remove images
    .trim();

  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);

  return `${minutes} min read`;
}

/**
 * Gets just the number of minutes for reading time
 * @param content - The content to analyze
 * @returns Number of minutes
 */
export function getReadingTimeMinutes(content: string): number {
  const wordsPerMinute = 200;
  const text = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    .trim();

  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
  return Math.ceil(wordCount / wordsPerMinute);
}
