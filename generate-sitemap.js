const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');
const { getServerSideSitemap } = require('next-sitemap');

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://www.kktradinget.com/' });

  // Add static routes
  const staticPaths = [
    '/',
    '/about',
    '/service',
    '/service-details',
    '/contact',
    // Add more static paths here
  ];

  staticPaths.forEach((path) => {
    sitemap.write({ url: path, changefreq: 'daily', priority: 0.7 });
  });

  // Optionally, add dynamic routes from a CMS or database
  // Example:
  // const posts = await fetch('https://yourapi.com/posts');
  // posts.forEach((post) => {
  //   sitemap.write({ url: `/post/${post.id}`, changefreq: 'daily', priority: 0.7 });
  // });

  sitemap.end();

  const sitemapPath = resolve(__dirname, 'public', 'sitemap.xml');
  const writeStream = createWriteStream(sitemapPath);

  await streamToPromise(sitemap).then((data) =>
    writeStream.write(data.toString())
  );
};

generateSitemap().catch(console.error);
