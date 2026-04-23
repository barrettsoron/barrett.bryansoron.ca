import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const isProd = import.meta.env.PROD;
	const includeAll = ({ data }) => !isProd || !data.draft;
	const [essays, notes] = await Promise.all([
		getCollection('essays', includeAll),
		getCollection('notes', includeAll),
	]);

	const items = [
		...essays.map((e) => ({
			link: `/essays/${e.id}/`,
			title: e.data.title,
			pubDate: e.data.date,
			description: e.data.description,
		})),
		...notes.map((n) => ({
			link: `/notes/${n.id}/`,
			title: n.data.title,
			pubDate: n.data.date,
			description: n.data.description,
		})),
	].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

	return rss({
		title: 'Barrett Bryan-Soron',
		description:
			'Political operator in Vancouver. Building durable infrastructure for eco-socialist movement and party work in Canada. Writing about craft, technology, and the harder work the left has to do now.',
		site: context.site,
		items,
	});
}
