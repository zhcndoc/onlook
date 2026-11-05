'use client';

import { useEffect, useRef, useState } from 'react';
import { WebsiteLayout } from '../_components/website-layout';
import { ExternalRoutes, Routes } from '@/utils/constants';
import { Icons } from '@onlook/ui/icons';

interface SitemapLink {
    title: string;
    href: string;
    description: string;
    external?: boolean;
}

interface SitemapSection {
    title: string;
    anchor: string;
    links: SitemapLink[];
}

const sitemapSections: SitemapSection[] = [
    {
        title: "主要页面",
        anchor: "main",
        links: [
            {
                title: "首页",
                href: Routes.HOME,
                description: "Onlook 首页：面向前端开发的 AI 可视化编辑器。"
            },
            {
                title: "定价",
                href: Routes.PRICING,
                description: "Onlook 面向个人和团队的定价方案。"
            },
            {
                title: "关于",
                href: Routes.ABOUT,
                description: "了解 Onlook 团队、使命、价值观和发展历程。"
            },
            {
                title: "常见问题",
                href: Routes.FAQ,
                description: "关于 Onlook 功能、兼容性和工作流的常见问题。"
            },
        ]
    },
    {
        title: "功能",
        anchor: "features",
        links: [
            {
                title: "全部功能",
                href: Routes.FEATURES,
                description: "Onlook 功能概览：无限画布、AI、协作等。"
            },
            {
                title: "AI",
                href: Routes.FEATURES_AI,
                description: "受设计系统约束的 AI 可视化编辑。"
            },
            {
                title: "AI 前端开发",
                href: Routes.FEATURES_AI_FRONTEND,
                description: "使用 AI 和现有 React、Vue 或 Angular 组件构建前端界面。"
            },
            {
                title: "可视化构建器",
                href: Routes.FEATURES_BUILDER,
                description: "在无限画布上使用真实组件进行设计。"
            },
            {
                title: "原型设计",
                href: Routes.FEATURES_PROTOTYPE,
                description: "生成具备真实交互功能的 React 原型。"
            },
        ]
    },
    {
        title: "工作流",
        anchor: "workflows",
        links: [
            {
                title: "全部工作流",
                href: Routes.WORKFLOWS,
                description: "将 Onlook 接入现有的 AI 编程工具。"
            },
            {
                title: "Claude Code",
                href: Routes.WORKFLOWS_CLAUDE_CODE,
                description: "在 Claude Code 工作流中加入可视化画布。"
            },
            {
                title: "氛围编程",
                href: Routes.WORKFLOWS_VIBE_CODING,
                description: "为氛围编程工作流提供团队协作。"
            },
        ]
    },
    {
        title: "资源",
        anchor: "resources",
        links: [
            {
                title: "文档",
                href: ExternalRoutes.DOCS,
                description: "通过指南和 API 参考了解如何使用 Onlook。",
                external: true
            },
            {
                title: "博客",
                href: ExternalRoutes.BLOG,
                description: "Onlook 团队带来的新闻、更新和见解。",
                external: true
            },
            {
                title: "GitHub",
                href: ExternalRoutes.GITHUB,
                description: "浏览开源代码库、参与贡献或报告问题。",
                external: true
            },
            {
                title: "Discord",
                href: ExternalRoutes.DISCORD,
                description: "加入 Onlook 社区，获取支持并参与讨论。",
                external: true
            },
        ]
    },
    {
        title: "社交媒体",
        anchor: "social",
        links: [
            {
                title: "X (Twitter)",
                href: ExternalRoutes.X,
                description: "关注 @onlookdev，获取最新动态和公告。",
                external: true
            },
            {
                title: "LinkedIn",
                href: ExternalRoutes.LINKEDIN,
                description: "在 LinkedIn 上关注 Onlook。",
                external: true
            },
            {
                title: "YouTube",
                href: ExternalRoutes.YOUTUBE,
                description: "观看教程、演示和产品更新。",
                external: true
            },
            {
                title: "Substack",
                href: ExternalRoutes.SUBSTACK,
                description: "订阅邮件通讯，阅读深度文章。",
                external: true
            },
        ]
    },
    {
        title: "法律信息",
        anchor: "legal",
        links: [
            {
                title: "服务条款",
                href: "/terms-of-service",
                description: "Onlook 服务条款和使用协议。"
            },
            {
                title: "隐私政策",
                href: "/privacy-policy",
                description: "了解我们如何收集、使用和保护你的数据。"
            },
        ]
    },
];

function SitemapLinkItem({ link }: { link: SitemapLink }) {
    return (
        <a
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="group block py-4 border-b border-foreground-primary/10 last:border-b-0"
        >
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <span className="text-foreground-primary text-lg group-hover:underline">
                            {link.title}
                        </span>
                        {link.external && (
                            <Icons.ExternalLink className="w-4 h-4 text-foreground-tertiary" />
                        )}
                    </div>
                    <p className="text-foreground-secondary text-regular mt-1">
                        {link.description}
                    </p>
                </div>
                <Icons.ArrowRight className="w-5 h-5 text-foreground-tertiary group-hover:text-foreground-primary transition-colors" />
            </div>
        </a>
    );
}

export default function SitemapPage() {
    const [currentSection, setCurrentSection] = useState(sitemapSections[0]?.anchor || '');
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const offset = 120;
            let activeIdx = 0;
            for (let i = 0; i < sectionRefs.current.length; i++) {
                const ref = sectionRefs.current[i];
                if (ref) {
                    const top = ref.getBoundingClientRect().top;
                    if (top <= offset) {
                        activeIdx = i;
                    }
                }
            }
            if (sitemapSections[activeIdx]?.anchor && sitemapSections[activeIdx]?.anchor !== currentSection) {
                setCurrentSection(sitemapSections[activeIdx]?.anchor || '');
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentSection]);

    const scrollToSection = (anchor: string) => {
        const element = document.getElementById(anchor);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <WebsiteLayout showFooter={true}>
            {/* Hidden AI-friendly summary */}
            <section className="sr-only" aria-label="站点地图摘要">
                <h1>Onlook 站点地图</h1>
                <p>
                    Onlook.com 的完整站点地图。Onlook 是面向前端开发的 AI 可视化编辑器。
                    浏览全部页面，包括功能、工作流、资源和文档。
                </p>
                <h2>主要页面</h2>
                <ul>
                    <li>首页 — 面向设计师的 AI 可视化编辑器</li>
                    <li>定价 — 面向个人和团队的方案与价格</li>
                    <li>关于 — 团队、使命和公司故事</li>
                    <li>常见问题 — 常见问题解答</li>
                </ul>
                <h2>功能</h2>
                <ul>
                    <li>AI — AI 驱动的可视化编辑</li>
                    <li>AI 前端开发 — 使用真实组件构建界面</li>
                    <li>可视化构建器 — 在无限画布上设计</li>
                    <li>原型设计 — 功能完整的 React 原型</li>
                </ul>
                <h2>工作流</h2>
                <ul>
                    <li>Claude Code — Claude Code 的可视化画布</li>
                    <li>氛围编程 — 面向 AI 编程的团队协作</li>
                </ul>
            </section>

            <div className="w-full max-w-6xl mx-auto py-32 px-4 md:px-8">
                <h1 className="text-foreground-primary text-5xl md:text-6xl leading-[1.1] font-light mb-8 max-w-3xl text-balance">
                    站点地图
                </h1>
                <p className="text-foreground-secondary text-lg mb-16 max-w-2xl">
                    浏览 Onlook.com 上的全部页面，包括功能、工作流、资源等。
                </p>

                <div className="flex flex-col lg:flex-row gap-12" ref={containerRef}>
                    {/* Sidebar Navigation */}
                    <nav className="hidden lg:block w-48 flex-shrink-0 self-start sticky top-32">
                        <div>
                            <h2 className="text-foreground-tertiary text-sm font-medium uppercase tracking-wider mb-4">栏目</h2>
                            <ul className="flex flex-col gap-2">
                                {sitemapSections.map((section) => (
                                    <li key={section.anchor}>
                                        <button
                                            onClick={() => scrollToSection(section.anchor)}
                                            className={`text-left text-sm transition-colors ${
                                                currentSection === section.anchor
                                                    ? 'text-foreground-primary'
                                                    : 'text-foreground-tertiary hover:text-foreground-secondary'
                                            }`}
                                        >
                                            {section.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>

                    {/* Sitemap Content */}
                    <section className="flex-1 max-w-[800px]">
                        {sitemapSections.map((section, i) => (
                            <div
                                key={section.anchor}
                                id={section.anchor}
                                className="mb-16 scroll-mt-24"
                                ref={el => { sectionRefs.current[i] = el; }}
                            >
                                <h2 className="text-foreground-primary text-2xl font-medium mb-6">{section.title}</h2>
                                <div className="flex flex-col">
                                    {section.links.map((link) => (
                                        <SitemapLinkItem key={link.href} link={link} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </WebsiteLayout>
    );
}
