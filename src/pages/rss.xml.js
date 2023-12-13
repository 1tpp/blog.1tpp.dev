import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blogs = await getCollection('blogs');
  const items =  blogs.map((blog) => ({
    // title: blog.data.title,
    // pubDate: blog.data.date,
    // description: blog.data.description,
    ...blog.data,
    link: `/blogs/${blog.slug}/`,
  }));

  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    customData: `<language>en-us</language>`,
    site: context.site,
    items,
  });
}