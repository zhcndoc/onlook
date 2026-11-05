'use client';

import { CreateManagerProvider } from '@/components/store/create';
import { SubscriptionModal } from '@/components/ui/pricing-modal';
import { NonProjectSettingsModal } from '@/components/ui/settings-modal/non-project';
import { ExternalRoutes } from '@/utils/constants';
import { FeaturesHero } from '../_components/hero/features-hero';
import { BenefitsSection } from '../_components/landing-page/benefits-section';
import { CTASection } from '../_components/landing-page/cta-section';
import { FAQSection } from '../_components/landing-page/faq-section';
import { FeaturesGridSection } from '../_components/landing-page/features-grid-section';
import { FeaturesIntroSection } from '../_components/landing-page/features-intro-section';
import { ResponsiveMockupSection } from '../_components/landing-page/responsive-mockup-section';
import { WebsiteLayout } from '../_components/website-layout';

const featuresFaqs = [
    {
        question: 'What is Onlook?',
        answer: 'Onlook 是连接现有代码库的可视化设计画布。设计师可以将真实组件拖到无限画布上，以可视方式修改，并提交拉取请求，无需编写代码。',
    },
    {
        question: 'Onlook 与其他设计工具有何不同？',
        answer: '传统设计工具生成静态稿，仍需在代码中重建。Onlook 使用真实组件进行设计，设计成果本身就是代码。修改会成为 PR，而不是交接规格说明。',
    },
    {
        question: 'Onlook 与 AI 代码生成器有何不同？',
        answer: 'AI 代码生成器从头创建代码。Onlook 将 AI 限定在你现有的组件范围内，让输出符合你的设计系统，无需转换，也不会偏离规范。',
    },
    {
        question: '我需要会编程吗？',
        answer: '不需要。设计师可以使用熟悉的工具在可视化画布上操作，底层运行的是真实代码；除非你愿意，否则无需接触代码。',
    },
    {
        question: '团队成员可以协作吗？',
        answer: '可以。分享画布、添加画布批注，并实时协作。修改会同步到代码，也可以提交为 PR，交由工程师审查。',
    },
    {
        question: 'Onlook 支持哪些技术栈？',
        answer: '支持 React、Next.js 和各种 CSS 方案（Tailwind、CSS Modules、styled-components），也适用于各种组件库。',
    },
];

export default function FeaturesPage() {
    return (
        <CreateManagerProvider>
            <WebsiteLayout showFooter={true}>
                {/* AI-Friendly Summary Section */}
                <section className="sr-only" aria-label="功能摘要">
                    <h1>Onlook 功能：使用真实组件进行设计</h1>
                    <p>
                        Onlook 是连接现有代码库的可视化设计画布。你可以在无限画布上使用真实组件进行设计。AI 受设计系统约束，不会偏离品牌规范，也不会生成一次性代码。修改会成为可合并的拉取请求。
                    </p>
                    <h2>主要功能</h2>
                    <ul>
                        <li>真实组件 — 使用工程师构建的按钮、卡片和布局进行设计</li>
                        <li>AI 受设计系统约束 — 使用你的颜色、字体和设计令牌</li>
                        <li>为团队协作打造 — 支持画布批注的实时协作</li>
                        <li>交付 PR，而非原型 — 修改会成为可合并的拉取请求</li>
                        <li>画布操作 — 以可视方式拖动、调整大小和排列元素</li>
                        <li>图层管理 — 可视化浏览 React 组件树</li>
                        <li>版本历史 — 随时回退到任意历史版本</li>
                        <li>适配你的代码库 — 连接现有 React 或 Next.js 项目</li>
                        <li>直接集成 GitHub — 将修改直接推送到代码仓库</li>
                    </ul>
                </section>

                <div className="w-screen h-screen flex items-center justify-center" id="hero">
                    <FeaturesHero />
                </div>
                <ResponsiveMockupSection />
                <BenefitsSection />
                <FeaturesIntroSection />
                <FeaturesGridSection />
                <FAQSection faqs={featuresFaqs} />
                <CTASection
                    ctaText={`准备好告别重复重建了吗？`}
                    buttonText="Book a Demo"
                    href={ExternalRoutes.BOOK_DEMO}
                />
                <NonProjectSettingsModal />
                <SubscriptionModal />
            </WebsiteLayout>
        </CreateManagerProvider>
    );
}
