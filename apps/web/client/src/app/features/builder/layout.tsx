import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '可视化构建器 | 使用 React 真实组件进行设计 | Onlook',
    description:
        'Onlook 是适配现有代码库的可视化构建器。你可以在无限画布上使用 React、Vue 或 Angular 真实组件进行设计，修改会成为可合并的拉取请求。',
    keywords: [
        // Primary keywords
        'visual builder',
        'visual code editor',
        'design to code',
        'React visual builder',
        // Design specific
        'infinite canvas',
        'visual component editor',
        'drag drop code editor',
        'WYSIWYG code editor',
        // Framework specific
        'React visual editor',
        'Next.js builder',
        'Vue visual builder',
        'Angular visual builder',
        // Comparisons
        'Figma to code',
        'Webflow alternative',
        'Framer alternative',
        // Workflow
        'designer developer workflow',
        'design engineer tools',
    ],
    openGraph: {
        title: '可视化构建器 | Onlook',
        description:
            '在无限画布上使用 React 真实组件进行设计，修改会成为可合并的 PR。',
        type: 'website',
        url: 'https://onlook.com/features/builder',
        siteName: 'Onlook',
        images: [
            {
                url: 'https://framerusercontent.com/images/ScnnNT7JpmUya7afqGAets8.png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '可视化构建器 | Onlook',
        description:
            '在无限画布上使用 React 真实组件进行设计，修改会成为可合并的 PR。',
        images: ['https://framerusercontent.com/images/ScnnNT7JpmUya7afqGAets8.png'],
    },
    alternates: {
        canonical: 'https://onlook.com/features/builder',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

// JSON-LD structured data
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Onlook Visual Builder',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    description:
        'Onlook is a visual builder that works with your existing codebase. Design with your real React, Vue, or Angular components on an infinite canvas. Changes become mergeable pull requests.',
    url: 'https://onlook.com/features/builder',
    featureList: [
        'Infinite canvas for visual design',
        'Works with your existing codebase',
        'Design with real React, Vue, Angular components',
        'Drag-and-drop interface',
        'Visual styling controls',
        'Real-time preview',
        'Direct GitHub PR output',
        'No coding required for designers',
    ],
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Free tier available',
    },
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is Onlook?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Onlook is an open-source visual builder for frontend development. It connects to your existing codebase and lets you design with your real components on an infinite canvas.',
            },
        },
        {
            '@type': 'Question',
            name: 'What can I use Onlook to do?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Onlook is great for creating websites, prototypes, user interfaces, and designs. Design visually with your real React, Vue, or Angular components, and changes become mergeable pull requests.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the difference between Onlook and other design tools?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Onlook is a visual editor for code. Unlike traditional design tools that create static mockups, Onlook works with your real components — what you design IS the code. Changes become PRs, not specs.",
            },
        },
        {
            '@type': 'Question',
            name: 'Do I need to know how to code?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "No. Designers use a familiar visual canvas with drag-and-drop, resize, and styling controls. The code runs underneath — you don't need to touch it unless you want to.",
            },
        },
    ],
};

export default function BuilderFeaturesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            {children}
        </>
    );
}
