import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '站点地图 | Onlook',
    description:
        'Onlook.com 的完整站点地图。Onlook 是面向前端开发的 AI 可视化编辑器。浏览全部页面，包括功能、工作流、资源和文档。',
    openGraph: {
        title: '站点地图 | Onlook',
        description:
            '浏览 Onlook.com 上的全部页面，包括功能、工作流和资源。',
        type: 'website',
        url: 'https://onlook.com/site-map',
        siteName: 'Onlook',
    },
    alternates: {
        canonical: 'https://onlook.com/site-map',
    },
    robots: {
        index: true,
        follow: true,
    },
};

// JSON-LD structured data for sitemap
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Onlook 站点地图',
    description: 'Onlook.com 的完整站点地图。Onlook 是面向前端开发的 AI 可视化编辑器。',
    url: 'https://onlook.com/site-map',
    mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
            {
                '@type': 'SiteNavigationElement',
                position: 1,
                name: '首页',
                url: 'https://onlook.com/',
            },
            {
                '@type': 'SiteNavigationElement',
                position: 2,
                name: '功能',
                url: 'https://onlook.com/features',
            },
            {
                '@type': 'SiteNavigationElement',
                position: 3,
                name: '工作流',
                url: 'https://onlook.com/workflows',
            },
            {
                '@type': 'SiteNavigationElement',
                position: 4,
                name: '定价',
                url: 'https://onlook.com/pricing',
            },
            {
                '@type': 'SiteNavigationElement',
                position: 5,
                name: '关于',
                url: 'https://onlook.com/about',
            },
            {
                '@type': 'SiteNavigationElement',
                position: 6,
                name: '常见问题',
                url: 'https://onlook.com/faq',
            },
        ],
    },
};

export default function SitemapLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
