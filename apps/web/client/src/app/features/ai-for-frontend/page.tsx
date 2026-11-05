'use client';

import { CreateManagerProvider } from '@/components/store/create';
import { SubscriptionModal } from '@/components/ui/pricing-modal';
import { NonProjectSettingsModal } from '@/components/ui/settings-modal/non-project';
import { ExternalRoutes } from '@/utils/constants';
import { Icons } from '@onlook/ui/icons';
import { motion } from 'motion/react';
import { AiFrontendHero } from '../../_components/hero/ai-frontend-hero';
import { CTASection } from '../../_components/landing-page/cta-section';
import { FAQSection } from '../../_components/landing-page/faq-section';
import { OnlookInterfaceMockup } from '../../_components/landing-page/onlook-interface-mockup';
import { WebsiteLayout } from '../../_components/website-layout';

const aiFrontendFaqs = [
    {
        question: 'Onlook 是什么？',
        answer: 'Onlook 是一款面向前端开发的 AI 可视化编辑器，可连接现有的 React、Vue 或 Angular 代码库，让设计师使用真实组件创建界面。AI 受你的设计系统约束，修改会成为工程师可以直接合并的拉取请求。',
    },
    {
        question: 'Onlook 与其他 AI 代码生成器有何不同？',
        answer: '大多数 AI 工具从头生成通用 HTML/CSS。Onlook 则连接现有组件库，并将 AI 限定在你的设计系统内，因此输出一致、符合品牌规范且可直接合并，无需转换。',
    },
    {
        question: 'Onlook 能使用我现有的 React 组件吗？',
        answer: '可以。Onlook 会连接你的代码库，让你使用工程师已经构建好的真实组件进行设计，例如按钮、卡片和布局。AI 建议会使用实际组件 API，而不是通用替代方案。',
    },
    {
        question: 'Onlook 支持哪些前端框架？',
        answer: 'Onlook 支持 React、Next.js、Vue、Angular、Svelte、Preact、SolidJS、Qwik 和 Web Components，也支持各种 CSS 方案，包括 Tailwind、CSS Modules、styled-components、Emotion、SASS/SCSS、Less、Vanilla Extract 等。',
    },
    {
        question: 'Onlook 支持哪些组件库？',
        answer: 'Onlook 适用于主流组件库，包括 shadcn/ui、Material UI、Mantine、Chakra UI、Radix UI、Ant Design、Headless UI、Blueprint、Fluent UI 和 PrimeReact。只要组件能在你的代码库中使用，就能在 Onlook 中使用。',
    },
    {
        question: 'AI 会偏离我的设计系统吗？',
        answer: '不会。与直接生成代码的 AI 不同，Onlook 会将 AI 限定在你现有的组件、颜色和设计令牌范围内。AI 只能使用设计系统已有内容，不会偏离规范或生成不符合品牌风格的结果。',
    },
    {
        question: '如何将 AI 生成的修改发布到生产环境？',
        answer: '你在 Onlook 中所做的修改会成为真实代码变更。准备好后，将其提交为拉取请求，交由工程师审查并合并。无需导出、复制粘贴或转换。',
    },
    {
        question: '我需要会编程吗？',
        answer: '不需要。设计师可以在熟悉的可视化画布上拖放、调整大小和设置样式。底层运行的是真实代码；除非你愿意，否则无需接触代码。',
    },
    {
        question: 'Onlook 适合哪些人？',
        answer: 'Onlook 面向拥有设计师和现有组件库的产品团队，适合设计工程师、在代码驱动团队中工作的产品设计师，以及设计系统维护团队。',
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

export default function AiForFrontendPage() {
    return (
        <CreateManagerProvider>
            <WebsiteLayout showFooter={true}>
                {/* Hero Section */}
                <div className="flex h-screen w-screen items-center justify-center" id="hero">
                    <AiFrontendHero />
                </div>

                {/* AI-Friendly Summary Section - Hidden visually but available for crawlers */}
                <section className="sr-only" aria-label="产品摘要">
                    <h1>Onlook：面向前端开发的 AI</h1>
                    <p>
                        Onlook 是一款面向前端开发的 AI 可视化编辑器，可连接现有的 React、Vue 或 Angular 代码库。与生成一次性 HTML/CSS 的通用 AI 代码生成器不同，Onlook 会将 AI 限定在你的真实组件和设计系统内，包括按钮、卡片和布局。修改会成为可合并的拉取请求，而不是还需转换的原型。
                    </p>
                    <h2>主要功能</h2>
                    <ul>
                        <li>AI 受设计系统约束，不会偏离品牌规范</li>
                        <li>支持 React、Next.js、Vue、Angular、Svelte 等框架</li>
                        <li>支持 Tailwind、CSS Modules、styled-components、SASS</li>
                        <li>兼容 shadcn/ui、Material UI、Chakra UI、Mantine、Radix UI</li>
                        <li>可视化画布界面，设计师无需编程</li>
                        <li>修改会成为工程师可合并的真实拉取请求</li>
                        <li>开源项目，拥有 2.4 万多个 GitHub 星标</li>
                    </ul>
                    <h2>Onlook 适合哪些人？</h2>
                    <p>
                        Onlook 面向拥有设计师和现有组件库的产品团队，适合设计工程师、在代码驱动团队中工作的产品设计师，以及希望 AI 尊重既有成果的设计系统维护团队。
                    </p>
                </section>

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
                            AI 会生成代码，却不了解你的设计系统。
                        </motion.p>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    icon: Icons.CrossCircled,
                                    title: '通用输出',
                                    description: 'AI 工具生成的一次性 HTML/CSS 与你的组件不匹配。',
                                },
                                {
                                    icon: Icons.Brand,
                                    title: '品牌风格偏移',
                                    description: '缺少约束时，AI 输出的样式会前后不一，也不符合品牌规范。',
                                },
                                {
                                    icon: Icons.Code,
                                    title: '仍需转换',
                                    description: '生成的代码还需要重建，才能配合真实组件使用。',
                                },
                                {
                                    icon: Icons.Stop,
                                    title: '无法直接合并',
                                    description: '原型只能停留在原型阶段，无法直接成为生产代码。',
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
                            AI 受你的设计系统约束，不会偏离规范，也无需转换。
                        </motion.p>
                    </div>

                    {/* Editor Mockup */}
                    <motion.div
                        className="hidden md:block w-screen h-[44rem] items-center justify-center mb-24"
                        {...getBlurAnimationProps(0.2)}
                    >
                        <OnlookInterfaceMockup />
                    </motion.div>

                    <div className="mx-auto max-w-6xl px-8">
                        <div className="grid gap-8 md:grid-cols-4">
                            {[
                                {
                                    icon: Icons.Component,
                                    title: '真实组件',
                                    description: 'AI 使用你的实际按钮、卡片和布局，而不是通用替代方案。',
                                },
                                {
                                    icon: Icons.Brand,
                                    title: '设计令牌',
                                    description: '颜色、间距和字体都遵循你现有的设计系统。',
                                },
                                {
                                    icon: Icons.Check,
                                    title: '可提交 PR 的成果',
                                    description: '修改会成为真实 PR，由工程师直接审查并合并。',
                                },
                                {
                                    icon: Icons.Sparkles,
                                    title: '可视化界面 + AI',
                                    description: '通过点击进行操作，AI 同时理解上下文。',
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

                {/* Frameworks Section */}
                <section className="w-full bg-black py-32">
                    <div className="mx-auto max-w-6xl px-8">
                        <motion.h2
                            className="text-foreground-secondary mb-6 text-sm font-medium uppercase tracking-wider"
                            {...getBlurAnimationProps()}
                        >
                            适配你的技术栈
                        </motion.h2>
                        <motion.p
                            className="mb-16 max-w-3xl text-4xl font-light leading-tight text-balance md:text-5xl"
                            {...getBlurAnimationProps(0.1)}
                        >
                            React、Next.js、Vue、Angular；Tailwind、CSS Modules、styled-components。使用你的技术栈，按你的方式设计。
                        </motion.p>

                        <div className="grid gap-6 md:grid-cols-3">
                            {[
                                {
                                    title: '框架',
                                    items: ['React', 'Next.js', 'Vue', 'Angular', 'Svelte', 'Preact', 'SolidJS', 'Qwik', 'Web Components'],
                                },
                                {
                                    title: '样式方案',
                                    items: ['Tailwind CSS', 'CSS Modules', 'styled-components', 'Emotion', 'SASS/SCSS', 'Less', 'Vanilla Extract', 'Stitches', 'Plain CSS'],
                                },
                                {
                                    title: '组件库',
                                    items: ['shadcn/ui', 'Material UI', 'Mantine', 'Chakra UI', 'Radix UI', 'Ant Design', 'Headless UI', 'Blueprint', 'Fluent UI', 'PrimeReact'],
                                },
                            ].map((category, categoryIndex) => (
                                <motion.div
                                    key={category.title}
                                    className="border-foreground-primary/10 rounded-lg border p-6"
                                    {...getBlurAnimationProps(0.2 + categoryIndex * 0.1)}
                                >
                                    <h3 className="text-foreground-secondary mb-4 text-sm font-medium uppercase tracking-wider">{category.title}</h3>
                                    <ul className="flex flex-col gap-2">
                                        {category.items.map((item, itemIndex) => (
                                            <motion.li
                                                key={item}
                                                className="text-foreground-primary text-base"
                                                initial={{ opacity: 0, y: 5 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: '-50px' }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: 0.3 + categoryIndex * 0.1 + itemIndex * 0.03,
                                                    ease: [0.25, 0.46, 0.45, 0.94],
                                                }}
                                            >
                                                {item}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <FAQSection faqs={aiFrontendFaqs} title="常见问题" buttonText="阅读常见问题" />

                {/* CTA Section */}
                <CTASection
                    ctaText={`开始使用了解你技术栈的 AI\n构建产品`}
                    buttonText="预约演示"
                    href={ExternalRoutes.BOOK_DEMO}
                />

                <NonProjectSettingsModal />
                <SubscriptionModal />
            </WebsiteLayout>
        </CreateManagerProvider>
    );
}
