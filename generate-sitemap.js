const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://www.kktradinget.com' });

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

  sitemap.end();

  const sitemapPath = resolve(__dirname, 'public', 'sitemap.xml');
  const writeStream = createWriteStream(sitemapPath);

  await streamToPromise(sitemap).then((data) => writeStream.write(data.toString()));
};

generateSitemap().catch(console.error);
