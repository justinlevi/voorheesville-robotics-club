/**
 * Formats a Date object into a human-readable string
 * @param date - The date to format
 * @returns Formatted date string (e.g., "January 15, 2025")
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Formats a Date object into a shorter string
 * @param date - The date to format
 * @returns Formatted date string (e.g., "Jan 15, 2025")
 */
export function formatDateShort(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Formats a Date object for HTML datetime attribute
 * @param date - The date to format
 * @returns ISO 8601 date string (e.g., "2025-01-15")
 */
export function formatDateISO(date: Date): string {
  return date.toISOString().split('T')[0];
}
