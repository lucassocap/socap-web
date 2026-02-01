import { MetadataRoute } from 'next';
import { projects } from '@/lib/portfolio-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://socapcorp.com';

    // Static routes
    const routes = [
        '',
        '/about',
        '/services',
        '/philosophy',
        '/contact',
        '/faq',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic portfolio routes
    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/portfolio/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const, // Content might be updated more often
        priority: 0.9, // High priority for case studies
    }));

    return [...routes, ...projectRoutes];
}
