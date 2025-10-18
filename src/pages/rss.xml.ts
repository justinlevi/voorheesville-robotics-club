import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { sortBlogPosts, filterDrafts } from '@/utils/sortContent';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const allPosts = await getCollection('blog');
  const posts = sortBlogPosts(filterDrafts(allPosts));

  return rss({
    title: 'Voorheesville Robotics Club Blog',
    description: 'Articles, tutorials, and updates from our high school robotics club',
    site: context.site?.toString() || 'https://example.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      author: post.data.author,
      link: `/blog/${post.id.replace(/\.md$/, '')}/`,
      categories: post.data.tags,
    })),
    customData: '<language>en-us</language>',
  });
}
