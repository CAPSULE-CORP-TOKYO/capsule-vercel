export default function sitemap() {
  const baseUrl = 'https://its-capsule.com';

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
  ];
}
