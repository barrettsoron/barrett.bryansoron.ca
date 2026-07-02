const PERSON_NAME = 'Barrett Bryan-Soron';
const PERSON_ALTERNATE_NAMES = ['Mike Soron', 'Michael Barrett Soron', 'Barrett Soron'];
const PERSON_JOB_TITLE = 'Political organizer and campaign strategist';
const PERSON_DESCRIPTION =
	'Political organizer in Vancouver building durable infrastructure for eco-socialist movement and party work in Canada.';
const PERSON_SAME_AS = [
	'https://bsky.app/profile/mbbsoron.bsky.social',
	'https://www.linkedin.com/in/mbbsoron/',
	'https://github.com/barrettsoron',
];

export function personId(site: URL): string {
	return new URL('#person', site).toString();
}

export function person(site: URL) {
	return {
		'@type': 'Person',
		'@id': personId(site),
		name: PERSON_NAME,
		alternateName: PERSON_ALTERNATE_NAMES,
		url: new URL('/', site).toString(),
		jobTitle: PERSON_JOB_TITLE,
		description: PERSON_DESCRIPTION,
		email: 'barrett@bryansoron.ca',
		sameAs: PERSON_SAME_AS,
	};
}

export function profilePage(site: URL) {
	return {
		'@context': 'https://schema.org',
		'@type': 'ProfilePage',
		'@id': new URL('/about', site).toString(),
		url: new URL('/about', site).toString(),
		name: `About — ${PERSON_NAME}`,
		mainEntity: person(site),
	};
}

interface ArticleInput {
	site: URL;
	path: string;
	title: string;
	description?: string;
	datePublished: Date;
	image?: string;
	type?: 'Article' | 'BlogPosting';
}

export function article({ site, path, title, description, datePublished, image, type = 'BlogPosting' }: ArticleInput) {
	const url = new URL(path, site).toString();
	return {
		'@context': 'https://schema.org',
		'@type': type,
		headline: title,
		...(description ? { description } : {}),
		datePublished: datePublished.toISOString(),
		...(image ? { image: new URL(image, site).toString() } : {}),
		url,
		mainEntityOfPage: url,
		author: { '@id': personId(site) },
		publisher: { '@id': personId(site) },
	};
}
