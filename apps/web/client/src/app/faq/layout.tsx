import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '常见问题 | Onlook - 面向前端开发的 AI 可视化编辑器',
    description: '了解 Onlook 的常见问题，包括支持的框架（React、Vue、Angular）、组件库（shadcn/ui、Material UI）、AI 功能、定价，以及 Onlook 与其他设计工具的区别。',
    keywords: [
        'Onlook FAQ',
        'Onlook questions',
        'AI visual editor FAQ',
        'React visual editor',
        'design to code tool',
        'frontend AI tools',
        'Onlook vs Figma',
        'Onlook vs V0',
        'Onlook pricing',
        'Onlook features',
        'design system tools',
        'component library editor',
    ],
    openGraph: {
        title: '常见问题 | Onlook',
        description: '了解 Onlook：面向前端开发的 AI 可视化编辑器。',
        type: 'website',
        url: 'https://onlook.com/faq',
        siteName: 'Onlook',
    },
    twitter: {
        card: 'summary_large_image',
        title: '常见问题 | Onlook',
        description: '了解 Onlook：面向前端开发的 AI 可视化编辑器。',
    },
    alternates: {
        canonical: 'https://onlook.com/faq',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
        },
    },
};

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
