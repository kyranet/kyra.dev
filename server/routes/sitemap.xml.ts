import { SitemapStream, streamToPromise } from 'sitemap';

export default defineEventHandler(() => {
	// Fetch all documents
	const sitemap = new SitemapStream({
		hostname: 'https://kyra.dev'
	});
	sitemap.write({ url: '/', changefreq: 'monthly' });

	sitemap.end();
	return streamToPromise(sitemap);
});
