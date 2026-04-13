export default function sitemap() {
  const baseUrl = 'https://its-capsule.com';

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cloud-cto`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cloud-cto/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/cloud-cto/legal`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
