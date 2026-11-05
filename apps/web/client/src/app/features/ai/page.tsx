'use client';

import { CreateManagerProvider } from '@/components/store/create';
import { SubscriptionModal } from '@/components/ui/pricing-modal';
import { NonProjectSettingsModal } from '@/components/ui/settings-modal/non-project';
import { ExternalRoutes } from '@/utils/constants';
import { AiFeaturesHero } from '../../_components/hero/ai-features-hero';
import { AiBenefitsSection } from '../../_components/landing-page/ai-benefits-section';
import { AiFeaturesGridSection } from '../../_components/landing-page/ai-features-grid-section';
import { AiFeaturesIntroSection } from '../../_components/landing-page/ai-features-intro-section';
import { CTASection } from '../../_components/landing-page/cta-section';
import { FAQSection } from '../../_components/landing-page/faq-section';
import { ResponsiveMockupSection } from '../../_components/landing-page/responsive-mockup-section';
import { WebsiteLayout } from '../../_components/website-layout';

const aiFaqs = [
    {
        question: 'What is Onlook?',
        answer: 'Onlook is an open-source, visual editor for websites. It allows anyone to create and style their own websites without any coding knowledge.',
    },
    {
        question: 'What can I use Onlook to do?',
        answer: 'Onlook is great for creating websites, prototypes, user interfaces, and designs. Whether you need a quick mockup or a full-fledged website, ask Onlook to craft it for you.',
    },
    {
        question: 'How do I get started?',
        answer: 'Getting started with Onlook is easy. Simply sign up for an account, create a new project, and follow our step-by-step guide to deploy your first application.',
    },
    {
        question: 'Is Onlook free to use?',
        answer: "Onlook is free for your first prompt, but you're limited by the number of messages you can send. Please see our Pricing page for more details.",
    },
    {
        question: 'What is the difference between Onlook and other design tools?',
        answer: "Onlook is a visual editor for code. It allows you to create and style your own creations with code as the source of truth. While it is best suited for creating websites, it can be used for anything visual – presentations, mockups, and more. Because Onlook uses code as the source of truth, the types of designs you can create are unconstrained by Onlook's interface.",
    },
    {
        question: 'Why is Onlook open-source?',
        answer: 'Developers have historically been second-rate citizens in the design process. Onlook was founded to bridge the divide between design and development, and we wanted to make developers first-class citizens alongside designers. We chose to be open-source to give developers transparency into how we are building Onlook and how the work created through Onlook will complement the work of developers.',
    },
];

export default function AiFeaturesPage() {
    return (
        <CreateManagerProvider>
            <WebsiteLayout showFooter={true}>
                {/* AI-Friendly Summary Section */}
                <section className="sr-only" aria-label="AI 功能摘要">
                    <h1>Onlook AI 可视化编辑器：使用设计系统和 AI 构建界面</h1>
                    <p>
                        Onlook 是一款 AI 驱动的可视化编辑器，可使用你的 React、Vue 或 Angular 真实组件构建前端界面。与通用 AI 代码生成器不同，Onlook 会将 AI 限定在你的设计系统内，包括按钮、卡片和布局。修改会成为可合并的 PR，而不是一次性原型。
                    </p>
                    <h2>AI 主要功能</h2>
                    <ul>
                        <li>AI 受设计系统约束，不会偏离品牌规范或产生不符合品牌的结果</li>
                        <li>可视化画布，底层运行真实代码</li>
                        <li>支持 React、Next.js、Vue、Angular、Svelte</li>
                        <li>支持 Tailwind、CSS Modules、styled-components</li>
                        <li>兼容 shadcn/ui、Material UI、Chakra UI、Mantine、Radix UI</li>
                        <li>直接生成 GitHub PR，修改会成为可合并的拉取请求</li>
                        <li>团队实时协作</li>
                        <li>设计师无需编程</li>
                    </ul>
                </section>

                <div className="flex h-screen w-screen items-center justify-center" id="hero">
                    <AiFeaturesHero />
                </div>
                <ResponsiveMockupSection />
                <AiBenefitsSection />
                <AiFeaturesIntroSection />
                <AiFeaturesGridSection />
                <CTASection
                    ctaText={`Start Building with AI Today`}
                    buttonText="Get Started for Free"
                    href={ExternalRoutes.BOOK_DEMO}
                />
                <FAQSection faqs={aiFaqs} />
                <NonProjectSettingsModal />
                <SubscriptionModal />
            </WebsiteLayout>
        </CreateManagerProvider>
    );
}
