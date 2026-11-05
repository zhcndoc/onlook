'use client';

import { CreateManagerProvider } from '@/components/store/create';
import { SubscriptionModal } from '@/components/ui/pricing-modal';
import { NonProjectSettingsModal } from '@/components/ui/settings-modal/non-project';
import { ExternalRoutes, Routes } from '@/utils/constants';
import { Icons } from '@onlook/ui/icons';
import { motion } from 'motion/react';
import Link from 'next/link';
import { CTASection } from '../_components/landing-page/cta-section';
import { WebsiteLayout } from '../_components/website-layout';
import { UnicornBackground } from '../_components/hero/unicorn-background';

// Helper function for blur animations
const getBlurAnimationProps = (delay: number = 0) => ({
    initial: { opacity: 0, filter: 'blur(4px)' },
    whileInView: { opacity: 1, filter: 'blur(0px)' },
    viewport: { once: true, margin: '-100px 0px -100px 0px', amount: 0.3 },
    transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
    style: {
        willChange: 'opacity, filter',
        transform: 'translateZ(0)',
    },
});

const workflows = [
    {
        title: 'Claude Code',
        description: '为你的 AI 工作流补上可视化画布。Claude Code 负责构建，Onlook 让你进行设计。',
        href: Routes.WORKFLOWS_CLAUDE_CODE,
        logo: '/assets/logo-claude-code.svg',
        available: true,
    },
    {
        title: '氛围编程',
        description: '氛围编程缺少协作能力，Onlook 以团队画布、真实组件和 PR 工作流解决这一问题。',
        href: Routes.WORKFLOWS_VIBE_CODING,
        icon: Icons.Sparkles,
        available: true,
    },
    {
        title: 'Codex',
        description: '为 OpenAI Codex 用户提供可视化设计层。即将推出。',
        href: '#',
        logo: '/assets/logo-codex.svg',
        available: false,
    },
];

export default function WorkflowsPage() {
    return (
        <CreateManagerProvider>
            <WebsiteLayout showFooter={true}>
                {/* AI-Friendly Summary Section */}
                <section className="sr-only" aria-label="工作流摘要">
                    <h1>Onlook 工作流：与 Claude Code、Cursor 和 AI 编程工具集成</h1>
                    <p>
                        Onlook 为 AI 编程工作流添加可视化设计层。将 Onlook 接入你正在使用的工具，例如 Claude Code、Cursor 等。使用真实组件进行可视化设计，与团队实时协作，并将修改作为可合并的拉取请求交付。
                    </p>
                    <h2>可用集成</h2>
                    <ul>
                        <li>Claude Code — 为你的 AI 工作流补上可视化画布。Claude Code 负责构建，Onlook 让你进行设计。</li>
                        <li>氛围编程 — 氛围编程缺少协作能力，Onlook 以团队画布、真实组件和 PR 输出解决这一问题。</li>
                        <li>Cursor — 为 Cursor 用户提供可视化设计层（即将推出）</li>
                        <li>Codex — 为 OpenAI Codex 用户提供可视化设计层（即将推出）</li>
                    </ul>
                    <h2>主要优势</h2>
                    <ul>
                        <li>AI 生成界面的可视化画布 — 以空间布局查看和排列代码</li>
                        <li>使用真实组件进行设计 — 采用工程师已经构建的按钮、卡片和布局</li>
                        <li>团队实时协作 — 分享画布并添加画布批注</li>
                        <li>直接生成 PR — 修改会成为可合并的拉取请求</li>
                        <li>AI 受设计系统约束 — 不会偏离品牌规范</li>
                    </ul>
                </section>

                {/* Hero Section */}
                <div className="relative flex min-h-[70vh] w-full flex-col items-center justify-center p-8 text-center" id="hero">
                    <UnicornBackground />
                    <div className="relative z-20 flex max-w-3xl flex-col items-center gap-6 pt-4 pb-2">
                        <motion.h1
                            className="text-foreground-secondary mb-4 text-sm font-medium tracking-wider uppercase"
                            initial={{ opacity: 0, filter: 'blur(4px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            style={{ willChange: 'opacity, filter', transform: 'translateZ(0)' }}
                        >
                            工作流
                        </motion.h1>
                        <motion.p
                            className="text-center text-4xl !leading-[1.1] leading-tight font-light text-balance md:text-6xl"
                            initial={{ opacity: 0, filter: 'blur(4px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                            style={{ willChange: 'opacity, filter', transform: 'translateZ(0)' }}
                        >
                            Onlook 适配你的技术栈
                        </motion.p>
                        <motion.h2
                            className="text-foreground-secondary mx-auto max-w-xl text-center text-lg text-balance"
                            initial={{ opacity: 0, filter: 'blur(4px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                            style={{ willChange: 'opacity, filter', transform: 'translateZ(0)' }}
                        >
                            将 Onlook 接入你正在使用的工具。通过可视化方式进行设计，交付真实代码。
                        </motion.h2>
                    </div>
                </div>

                {/* Workflows Grid */}
                <section className="w-full bg-black py-32">
                    <div className="mx-auto max-w-6xl px-8">
                        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                            {workflows.map((workflow, index) => (
                                <motion.div
                                    key={workflow.title}
                                    {...getBlurAnimationProps(0.1 + index * 0.1)}
                                >
                                    {workflow.available ? (
                                        <Link
                                            href={workflow.href}
                                            className="group border-foreground-primary/10 hover:border-foreground-primary/30 flex h-full flex-col gap-4 rounded-lg border bg-black p-8 transition-all duration-300"
                                        >
                                            {workflow.logo ? (
                                                <img src={workflow.logo} alt={workflow.title} className="h-10 w-10" />
                                            ) : workflow.icon ? (
                                                <workflow.icon className="text-foreground-secondary group-hover:text-foreground-primary h-10 w-10 transition-colors" />
                                            ) : null}
                                            <h3 className="text-lg font-medium">{workflow.title}</h3>
                                            <p className="text-foreground-secondary text-balance">{workflow.description}</p>
                                            <div className="mt-auto flex items-center gap-2 pt-4 text-sm">
                                                <span className="text-foreground-primary">了解更多</span>
                                                <Icons.ArrowRight className="h-4 w-4" />
                                            </div>
                                        </Link>
                                    ) : (
                                        <div className="border-foreground-primary/10 flex h-full flex-col gap-4 rounded-lg border bg-black p-8">
                                            {workflow.logo ? (
                                                <img src={workflow.logo} alt={workflow.title} className="h-10 w-10 opacity-50" />
                                            ) : workflow.icon ? (
                                                <workflow.icon className="text-foreground-tertiary h-10 w-10 opacity-50" />
                                            ) : null}
                                            <h3 className="text-xl font-medium opacity-50">{workflow.title}</h3>
                                            <p className="text-foreground-secondary text-balance opacity-50">{workflow.description}</p>
                                            <div className="mt-auto pt-4">
                                                <span className="text-foreground-tertiary rounded-full border border-current px-3 py-1 text-xs">
                                                    即将推出
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <CTASection
                    ctaText={`准备将 Onlook 融入\n你的工作流吗？`}
                    buttonText="预约演示"
                    href={ExternalRoutes.BOOK_DEMO}
                />

                <NonProjectSettingsModal />
                <SubscriptionModal />
            </WebsiteLayout>
        </CreateManagerProvider>
    );
}
