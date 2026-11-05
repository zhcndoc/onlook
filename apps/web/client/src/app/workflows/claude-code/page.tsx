'use client';

import { CreateManagerProvider } from '@/components/store/create';
import { SubscriptionModal } from '@/components/ui/pricing-modal';
import { NonProjectSettingsModal } from '@/components/ui/settings-modal/non-project';
import { ExternalRoutes } from '@/utils/constants';
import { Icons } from '@onlook/ui/icons';
import { motion } from 'motion/react';
import { ClaudeCodeHero } from '../../_components/hero/claude-code-hero';
import { CTASection } from '../../_components/landing-page/cta-section';
import { FAQSection } from '../../_components/landing-page/faq-section';
import { OnlookInterfaceMockup } from '../../_components/landing-page/onlook-interface-mockup';
import { WebsiteLayout } from '../../_components/website-layout';

const claudeCodeFaqs = [
    {
        question: 'Onlook 如何与 Claude Code 配合使用？',
        answer: 'Claude Code 负责终端操作和代码生成，Onlook 提供可视化画布。两者结合构成完整的设计到代码工作流：Claude Code 负责构建，Onlook 让你进行可视化迭代和完善。',
    },
    {
        question: '使用 Onlook 配合 Claude Code 需要会编程吗？',
        answer: '不需要。Onlook 提供可视化画布，你可以拖动、调整大小和排列元素。底层运行的是真实代码；除非你愿意，否则无需接触代码。',
    },
    {
        question: '我可以在 Onlook 中使用现有组件吗？',
        answer: '可以。Onlook 会连接现有代码库，让你使用工程师已经构建好的真实组件进行设计，例如按钮、卡片和布局。',
    },
    {
        question: '如何与团队分享我的作品？',
        answer: 'Onlook 内置团队协作功能。你可以分享画布、添加画布批注并实时协作。修改会同步到代码，也可以提交为 PR。',
    },
    {
        question: 'Onlook 与单独使用 Claude Code 有何不同？',
        answer: 'Claude Code 基于终端，适合构建产品。Onlook 则补上设计师需要的可视化层，包括无限画布、团队协作，以及对 AI 生成界面进行可视化迭代。',
    },
    {
        question: 'Onlook 会将 AI 限定在我的设计系统内吗？',
        answer: '会。与直接生成代码的 AI 不同，Onlook 会将 AI 限定在你现有的组件、颜色和设计令牌范围内，让输出符合设计系统，不会偏离规范或品牌风格。',
    },
];

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

export default function ClaudeCodeWorkflowPage() {
    return (
        <CreateManagerProvider>
            <WebsiteLayout showFooter={true}>
                {/* AI-Friendly Summary Section */}
                <section className="sr-only" aria-label="Claude Code 工作流摘要">
                    <h1>面向设计师的 Claude Code：为 AI 编程工作流加入可视化画布</h1>
                    <p>
                        Claude Code 适合构建产品，但设计师需要以可视方式查看、排列和完善界面。Onlook 补上可视化层：使用 Claude Code 进行构建，在无限画布上完善设计，并交付 PR。两者结合构成完整的设计到代码工作流。
                    </p>
                    <h2>单独使用 Claude Code 面临的挑战</h2>
                    <ul>
                        <li>基于终端 — 不是设计师熟悉的可视化环境</li>
                        <li>单人工作流 — 难以与队友分享进行中的作品</li>
                        <li>AI 风格偏移 — 直接生成内容的 AI 不了解你的设计系统</li>
                        <li>没有画布 — 无法按空间布局组织想法或纵览全貌</li>
                    </ul>
                    <h2>Onlook 为此提供解决方案</h2>
                    <ul>
                        <li>无限画布 — 可视化环境，底层运行真实代码</li>
                        <li>真实组件 — 使用工程师构建的按钮、卡片和布局进行设计</li>
                        <li>团队协作 — 分享画布、添加画布批注并实时协作</li>
                        <li>PR 输出 — 修改会成为工程师可以审查的真实拉取请求</li>
                        <li>AI 受约束 — 输出符合设计系统，不会偏离规范</li>
                    </ul>
                    <h2>即将推出：Claude Code 的 Onlook MCP</h2>
                    <p>
                        在 Claude Code 中直接使用 /onlook，即可在可视化画布中打开界面，基于设计系统进行迭代并推送修改，全程无需离开终端。
                    </p>
                </section>

                {/* Hero Section */}
                <div className="flex h-screen w-screen items-center justify-center" id="hero">
                    <ClaudeCodeHero />
                </div>

                {/* The Problem Section */}
                <section className="w-full bg-black py-32">
                    <div className="mx-auto max-w-6xl px-8">
                        <motion.h2
                            className="text-foreground-secondary mb-6 text-sm font-medium uppercase tracking-wider"
                            {...getBlurAnimationProps()}
                        >
                            面临的挑战
                        </motion.h2>
                        <motion.p
                            className="mb-16 max-w-3xl text-4xl font-light leading-tight text-balance md:text-5xl"
                            {...getBlurAnimationProps(0.1)}
                        >
                            Claude Code 适合构建产品，但设计师需要查看、排列和完善界面，并与团队协作。
                        </motion.p>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    icon: Icons.Terminal,
                                    title: '基于终端',
                                    description: 'Claude Code 在终端中运行，不是设计师熟悉的可视化环境。',
                                },
                                {
                                    icon: Icons.Person,
                                    title: '单人工作流',
                                    description: '难以与队友或相关人员分享进行中的作品。',
                                },
                                {
                                    icon: Icons.Component,
                                    title: 'AI 风格偏移',
                                    description: '直接生成内容的 AI 不了解你的设计系统，输出容易偏离品牌规范。',
                                },
                                {
                                    icon: Icons.Layers,
                                    title: '没有画布',
                                    description: '无法按空间布局组织想法，也无法同时纵览全貌。',
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    className="flex flex-col gap-4"
                                    {...getBlurAnimationProps(0.2 + index * 0.1)}
                                >
                                    <item.icon className="text-foreground-secondary h-5 w-5" />
                                    <h3 className="text-base font-medium text-balance">{item.title}</h3>
                                    <p className="text-foreground-secondary text-base text-balance">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* The Solution Section */}
                <section className="w-full bg-black pt-32 pb-16">
                    <div className="mx-auto max-w-6xl px-8">
                        <motion.h2
                            className="text-foreground-secondary mb-6 text-sm font-medium uppercase tracking-wider"
                            {...getBlurAnimationProps()}
                        >
                            解决方案
                        </motion.h2>
                        <motion.p
                            className="mb-24 max-w-3xl text-4xl font-light leading-tight text-balance md:text-5xl"
                            {...getBlurAnimationProps(0.1)}
                        >
                            Onlook 补上可视化层。使用 Claude Code 构建，在画布上完善设计，并交付 PR。
                        </motion.p>
                    </div>

                    {/* Editor Mockup - Desktop */}
                    <motion.div
                        className="hidden md:block w-screen h-[44rem] items-center justify-center mb-24"
                        {...getBlurAnimationProps(0.2)}
                    >
                        <OnlookInterfaceMockup />
                    </motion.div>

                    {/* Editor Mockup - Mobile */}
                    <motion.div
                        className="md:hidden w-screen relative overflow-hidden h-[880px]"
                        {...getBlurAnimationProps(0.2)}
                    >
                        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 h-[800px] w-[1000px]">
                            <OnlookInterfaceMockup />
                        </div>
                    </motion.div>

                    <div className="mx-auto max-w-6xl px-8">
                        <div className="grid gap-8 md:grid-cols-4">
                            {[
                                {
                                    icon: Icons.Layers,
                                    title: '无限画布',
                                    description: '直观易用的可视化环境，底层运行真实代码。',
                                },
                                {
                                    icon: Icons.Component,
                                    title: '真实组件',
                                    description: '使用工程师已经构建好的按钮、卡片和布局进行设计。',
                                },
                                {
                                    icon: Icons.Person,
                                    title: '团队协作',
                                    description: '分享画布、添加画布批注并实时协作。',
                                },
                                {
                                    icon: Icons.Branch,
                                    title: 'PR 输出',
                                    description: '修改会成为真实拉取请求，由工程师审查并合并。',
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    className="flex flex-col gap-3"
                                    {...getBlurAnimationProps(0.3 + index * 0.1)}
                                >
                                    <item.icon className="text-foreground-secondary h-5 w-5" />
                                    <h3 className="text-base font-medium text-balance">{item.title}</h3>
                                    <p className="text-foreground-secondary text-sm text-balance">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Coming Soon: MCP Integration */}
                <section className="w-full bg-black py-32">
                    <div className="mx-auto max-w-6xl px-8">
                        <div className="border-foreground-primary/10 rounded-2xl border bg-gradient-to-b from-white/5 to-transparent p-12 md:p-16">
                            <motion.div
                                className="flex flex-col items-center text-center"
                                {...getBlurAnimationProps()}
                            >
                                <span className="mb-6 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider" style={{ color: '#f97316', borderColor: 'rgba(249, 115, 22, 0.5)', backgroundColor: 'rgba(249, 115, 22, 0.1)', borderWidth: '1px', borderStyle: 'solid' }}>
                                    即将推出
                                </span>
                                <h2 className="mb-6 max-w-2xl text-3xl font-light leading-tight text-balance md:text-5xl">
                                    Claude Code 的 Onlook MCP
                                </h2>
                                <p className="text-foreground-secondary mb-8 max-w-xl text-lg text-balance">
                                    在 Claude Code 中直接使用 <code className="bg-foreground-primary/10 rounded px-2 py-0.5 font-mono text-base">/onlook</code>，即可在可视化画布中打开界面，基于设计系统进行迭代并推送修改，全程无需离开终端。
                                </p>
                                <div className="bg-background-secondary/50 rounded-lg border border-foreground-primary/20 p-6 font-mono text-sm">
                                    <span className="text-foreground-tertiary">$</span>{' '}
                                    <span className="text-foreground-secondary">claude</span>{' '}
                                    <span className="text-foreground-primary">/onlook open ./src/components/Hero.tsx</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <FAQSection faqs={claudeCodeFaqs} title="常见问题" buttonText="阅读常见问题" />

                {/* CTA Section */}
                <CTASection
                    ctaText={`在 Claude Code 项目中\n试用 Onlook`}
                    buttonText="预约演示"
                    href={ExternalRoutes.BOOK_DEMO}
                />

                <NonProjectSettingsModal />
                <SubscriptionModal />
            </WebsiteLayout>
        </CreateManagerProvider>
    );
}
