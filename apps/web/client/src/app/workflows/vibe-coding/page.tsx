'use client';

import { CreateManagerProvider } from '@/components/store/create';
import { SubscriptionModal } from '@/components/ui/pricing-modal';
import { NonProjectSettingsModal } from '@/components/ui/settings-modal/non-project';
import { ExternalRoutes, Routes } from '@/utils/constants';
import { Button } from '@onlook/ui/button';
import { Icons } from '@onlook/ui/icons';
import { motion } from 'motion/react';
import { UnicornBackground } from '../../_components/hero/unicorn-background';
import { CTASection } from '../../_components/landing-page/cta-section';
import { FAQSection } from '../../_components/landing-page/faq-section';
import { OnlookInterfaceMockup } from '../../_components/landing-page/onlook-interface-mockup';
import { useGitHubStats } from '../../_components/top-bar/github';
import { WebsiteLayout } from '../../_components/website-layout';

const vibeCodingFaqs = [
    {
        question: '什么是氛围编程？',
        answer: "氛围编程是一种工作流：你用自然语言描述需求，再由 AI 生成代码。大多数氛围编程工具面向个人，而非团队。",
    },
    {
        question: '当前氛围编程面临什么问题？',
        answer: "大多数氛围编程工具都面向个人使用，难以分享进行中的作品、实时协作或交接给工程师。生成的代码往往是一次性的，也不符合你的设计系统。",
    },
    {
        question: 'Onlook 如何让团队开展氛围编程？',
        answer: 'Onlook 增加了可视化画布层。你可以与队友分享画布、添加画布批注并实时协作。AI 受设计系统约束，因此输出一致。修改会成为工程师可以合并的 PR。',
    },
    {
        question: 'Onlook 能配合我现有的氛围编程工具使用吗？',
        answer: '可以。你可以使用任意 AI 编程工具进行构建，再在 Onlook 中进行可视化迭代、与团队协作，并在交付前完善成果。Onlook 适配现有代码库。',
    },
    {
        question: '在 Onlook 中进行氛围编程会使用我的真实组件吗？',
        answer: '会。不同于生成通用 HTML 的工具，Onlook 会连接你的组件库。AI 使用你的按钮、卡片和布局，不会偏离品牌规范，也无需重建。',
    },
    {
        question: '如何与团队分享氛围编程成果？',
        answer: '分享画布链接即可。队友可以查看、添加画布批注并实时协作。准备好后，将修改作为 PR 提交给工程师审查。',
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

function VibeCodingHero() {
    const { formatted: starCount } = useGitHubStats();

    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-12 p-8 text-center text-lg">
            <UnicornBackground />
            <div className="relative z-20 flex max-w-3xl flex-col items-center gap-6 pt-4 pb-2">
                <motion.h1
                    className="text-foreground-secondary mb-4 text-sm font-medium tracking-wider uppercase"
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    style={{ willChange: 'opacity, filter', transform: 'translateZ(0)' }}
                >
                    团队氛围编程
                </motion.h1>
                <motion.p
                    className="text-center text-4xl !leading-[1] leading-tight font-light text-balance md:text-6xl"
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                    style={{ willChange: 'opacity, filter', transform: 'translateZ(0)' }}
                >
                    氛围编程存在协作难题
                </motion.p>
                <motion.p
                    className="text-foreground-secondary mx-auto max-w-xl text-center text-lg"
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                    style={{ willChange: 'opacity, filter', transform: 'translateZ(0)' }}
                >
                    大多数 AI 编程工具都面向个人使用。Onlook 补上缺少的协作层：团队可以在可视化画布上，使用真实组件共同设计 AI 生成的界面。
                </motion.p>
                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                    style={{ willChange: 'opacity, filter', transform: 'translateZ(0)' }}
                >
                    <Button
                        asChild
                        variant="secondary"
                        size="lg"
                        className="hover:bg-foreground-primary hover:text-background-primary cursor-pointer p-6 transition-all duration-300"
                    >
                        <a href={ExternalRoutes.BOOK_DEMO} target="_blank" rel="noopener noreferrer">
                            预约演示
                        </a>
                    </Button>
                </motion.div>
                <motion.div
                    className="text-foreground-secondary mt-8 flex items-center justify-center gap-6 text-sm"
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                    style={{ willChange: 'opacity, filter', transform: 'translateZ(0)' }}
                >
                    <div className="flex items-center gap-2">
                        <span>{starCount}+ GitHub 星标</span>
                    </div>
                    <div className="bg-foreground-secondary h-1 w-1 rounded-full"></div>
                    <div className="flex items-center gap-2">
                        <span>YC W25</span>
                    </div>
                    <div className="bg-foreground-secondary h-1 w-1 rounded-full"></div>
                    <div className="flex items-center gap-2">
                        <span>开源</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default function VibeCodingWorkflowPage() {
    return (
        <CreateManagerProvider>
            <WebsiteLayout showFooter={true}>
                {/* AI-Friendly Summary Section */}
                <section className="sr-only" aria-label="氛围编程工作流摘要">
                    <h1>团队氛围编程：为 AI 编程工作流加入协作</h1>
                    <p>
                        氛围编程通过描述需求让 AI 生成代码，能力强大，但缺少协作支持。大多数 AI 编程工具都面向个人使用，难以分享进行中的作品、实时协作，或确保输出符合设计系统。Onlook 为此提供解决方案。
                    </p>
                    <h2>个人氛围编程的问题</h2>
                    <ul>
                        <li>单人工作流 — 难以与队友分享进行中的作品</li>
                        <li>一次性代码 — 没有使用真实组件</li>
                        <li>品牌风格偏移 — AI 生成的是通用 HTML/CSS，而非你的设计系统</li>
                        <li>缺少交接途径 — “现在该怎么分享？”成了阻碍</li>
                    </ul>
                    <h2>Onlook 让团队也能进行氛围编程</h2>
                    <ul>
                        <li>可视化画布 — 按空间布局查看和排列 AI 生成的界面</li>
                        <li>真实组件 — AI 受设计系统约束</li>
                        <li>实时协作 — 分享画布并添加画布批注</li>
                        <li>PR 输出 — 修改会成为可合并的拉取请求</li>
                        <li>适配你正在使用的任意 AI 编程工具</li>
                    </ul>
                </section>

                {/* Hero Section */}
                <div className="flex h-screen w-screen items-center justify-center" id="hero">
                    <VibeCodingHero />
                </div>

                {/* The Problem Section */}
                <section className="w-full bg-black py-32">
                    <div className="mx-auto max-w-6xl px-8">
                        <motion.h2
                            className="text-foreground-secondary mb-6 text-sm font-medium uppercase tracking-wider"
                            {...getBlurAnimationProps()}
                        >
                            问题所在
                        </motion.h2>
                        <motion.p
                            className="mb-16 max-w-3xl text-4xl font-light leading-tight text-balance md:text-5xl"
                            {...getBlurAnimationProps(0.1)}
                        >
                            个人氛围编程难以扩展。团队需要一起分享、迭代并交付成果。
                        </motion.p>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    icon: Icons.Person,
                                    title: '单人工作流',
                                    description: '大多数 AI 编程工具面向个人使用，分享作品只能靠截图或屏幕共享。',
                                },
                                {
                                    icon: Icons.Trash,
                                    title: '一次性代码',
                                    description: 'AI 生成通用 HTML/CSS。为了使用真实组件，你最终还是得重建。',
                                },
                                {
                                    icon: Icons.Brand,
                                    title: '品牌风格偏移',
                                    description: '每个氛围编程生成的界面看起来都不一样，因为 AI 不了解你的设计系统。',
                                },
                                {
                                    icon: Icons.QuestionMarkCircled,
                                    title: '“然后呢？”',
                                    description: '你做出了不错的成果。接下来怎么分享、收集反馈或交接？',
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
                            Onlook 补上可视化层。与团队使用真实组件进行氛围编程，直接产出 PR。
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
                                    title: '可视化画布',
                                    description: '按空间布局查看和排列 AI 生成的界面，而不只是查看终端输出。',
                                },
                                {
                                    icon: Icons.Component,
                                    title: '真实组件',
                                    description: 'AI 使用你的按钮、卡片和布局，而不是通用 HTML。',
                                },
                                {
                                    icon: Icons.Person,
                                    title: '团队协作',
                                    description: '分享画布、添加画布批注并实时协作。',
                                },
                                {
                                    icon: Icons.Branch,
                                    title: '交付 PR',
                                    description: '修改会成为拉取请求，由工程师审查并合并。',
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

                {/* How It Works Section */}
                <section className="w-full bg-black py-32">
                    <div className="mx-auto max-w-6xl px-8">
                        <motion.h2
                            className="text-foreground-secondary mb-6 text-sm font-medium uppercase tracking-wider"
                            {...getBlurAnimationProps()}
                        >
                            工作方式
                        </motion.h2>
                        <motion.p
                            className="mb-16 max-w-3xl text-4xl font-light leading-tight text-balance md:text-5xl"
                            {...getBlurAnimationProps(0.1)}
                        >
                            随处进行氛围编程，在 Onlook 中协作，共同交付。
                        </motion.p>

                        <div className="grid gap-12 md:grid-cols-3">
                            {[
                                {
                                    step: '01',
                                    title: '使用任意 AI 工具构建',
                                    description: '使用任意 AI 编程工具生成初始界面。Onlook 适配现有代码库。',
                                },
                                {
                                    step: '02',
                                    title: '在画布上迭代',
                                    description: '在 Onlook 中打开并进行可视化完善。拖动元素、调整样式，并使用真实组件调用 AI。实时查看真实代码中的修改。',
                                },
                                {
                                    step: '03',
                                    title: '协作并交付',
                                    description: '与队友分享画布并添加画布批注。准备好后，将成果作为 PR 提交给工程师审查并合并。',
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.step}
                                    className="flex flex-col gap-4"
                                    {...getBlurAnimationProps(0.2 + index * 0.1)}
                                >
                                    <span className="text-foreground-tertiary text-sm font-medium">{item.step}</span>
                                    <h3 className="text-xl font-medium">{item.title}</h3>
                                    <p className="text-foreground-secondary text-base text-balance">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="w-full bg-black py-32">
                    <div className="mx-auto max-w-6xl px-8">
                        <motion.h2
                            className="text-foreground-secondary mb-6 text-sm font-medium uppercase tracking-wider"
                            {...getBlurAnimationProps()}
                        >
                            氛围编程：个人与团队
                        </motion.h2>
                        <motion.p
                            className="mb-16 max-w-3xl text-4xl font-light leading-tight text-balance md:text-5xl"
                            {...getBlurAnimationProps(0.1)}
                        >
                            比较独自制作原型与团队协作交付的区别。
                        </motion.p>

                        <motion.div
                            className="grid gap-8 md:grid-cols-2"
                            {...getBlurAnimationProps(0.2)}
                        >
                            {/* Solo Column */}
                            <div className="border-foreground-primary/10 rounded-lg border p-8">
                                <h3 className="text-foreground-tertiary mb-6 text-sm font-medium uppercase tracking-wider">
                                    个人氛围编程
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        '生成通用 HTML/CSS',
                                        '通过截图分享',
                                        '重建后才能使用你的组件',
                                        '手动交接流程',
                                        '代码还需转换',
                                    ].map((item) => (
                                        <li key={item} className="text-foreground-secondary flex items-start gap-3">
                                            <Icons.CrossCircled className="text-foreground-tertiary mt-0.5 h-5 w-5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Team Column */}
                            <div className="border-foreground-primary/30 rounded-lg border bg-gradient-to-b from-white/5 to-transparent p-8">
                                <h3 className="text-foreground-secondary mb-6 text-sm font-medium uppercase tracking-wider">
                                    使用 Onlook 进行团队氛围编程
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        '使用真实组件',
                                        '分享实时画布',
                                        'AI 受设计系统约束',
                                        '通过画布批注协作',
                                        '交付工程师可以合并的 PR',
                                    ].map((item) => (
                                        <li key={item} className="text-foreground-primary flex items-start gap-3">
                                            <Icons.CheckCircled className="text-teal-500 mt-0.5 h-5 w-5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* FAQ Section */}
                <FAQSection faqs={vibeCodingFaqs} title="常见问题" buttonText="阅读常见问题" />

                {/* CTA Section */}
                <CTASection
                    ctaText={`准备好与团队\n一起进行氛围编程了吗？`}
                    buttonText="预约演示"
                    href={ExternalRoutes.BOOK_DEMO}
                />

                <NonProjectSettingsModal />
                <SubscriptionModal />
            </WebsiteLayout>
        </CreateManagerProvider>
    );
}
