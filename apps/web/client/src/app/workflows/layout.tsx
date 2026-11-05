import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: '工作流 | 将 Onlook 接入 Claude Code、Cursor 和 AI 编程工具 | Onlook',
    description:
        '将 Onlook 接入 AI 编程工作流，为 Claude Code、Cursor 和其他 AI 工具添加可视化设计层。使用真实组件进行设计，与团队协作并交付 PR。',
    keywords: [
        // Primary keywords
        'claude code visual editor',
        'cursor visual editor',
        'AI coding workflow',
        'visual layer for AI',
        // Tool integrations
        'claude code for designers',
        'cursor for designers',
        'AI code editor visual',
        'visual AI coding',
        // Workflow
        'design to code workflow',
        'AI design workflow',
        'code generation visual',
        'AI development tools',
        // Problem/solution
        'visual canvas AI',
        'design system AI',
        'team collaboration AI',
    ],
    openGraph: {
        url: 'https://onlook.com/workflows',
        type: 'website',
        siteName: 'Onlook',
        title: '工作流 | Onlook',
        description:
            '将 Onlook 接入 AI 编程工作流，为 Claude Code、Cursor 等工具添加可视化设计层。',
        images: [
            {
                url: 'https://framerusercontent.com/images/ScnnNT7JpmUya7afqGAets8.png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '工作流 | Onlook',
        description: '为 Claude Code、Cursor 和 AI 编程工具提供可视化设计层。',
        images: ['https://framerusercontent.com/images/ScnnNT7JpmUya7afqGAets8.png'],
    },
    alternates: {
        canonical: 'https://onlook.com/workflows',
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

// JSON-LD structured data
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Onlook Workflows',
    description:
        'Connect Onlook to your AI coding workflow. Add a visual design layer to Claude Code, Cursor, and other AI tools.',
    url: 'https://onlook.com/workflows',
    mainEntity: {
        '@type': 'SoftwareApplication',
        name: 'Onlook',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web',
        description:
            'Onlook is an AI-powered visual editor that integrates with your AI coding workflow. Design with your real components, collaborate with your team, ship PRs.',
        featureList: [
            'Visual canvas for AI-generated UIs',
            'Integration with Claude Code',
            'Vibe coding for teams — collaboration for AI workflows',
            'Integration with Cursor',
            'Design with your real components',
            'Real-time team collaboration',
            'Direct PR output to GitHub',
            'AI constrained to your design system',
        ],
    },
};

export default function WorkflowsLayout({ children }: { children: React.ReactNode }) {
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
