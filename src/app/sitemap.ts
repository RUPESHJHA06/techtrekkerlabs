import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';
import { projects } from '@/data/portfolio';
import { services } from '@/data/services';

const BASE = 'https://techtrekkerlabs.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), priority: 1 },
    { url: `${BASE}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE}/services`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE}/portfolio`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE}/careers`, lastModified: new Date(), priority: 0.6 },
    { url: `${BASE}/blog`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE}/privacy`, lastModified: new Date(), priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/services/${s.id}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  const portfolioRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE}/portfolio/${p.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...portfolioRoutes];
}
