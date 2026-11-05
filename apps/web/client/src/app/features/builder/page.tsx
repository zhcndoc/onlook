'use client';

import { CreateManagerProvider } from '@/components/store/create';
import { SubscriptionModal } from '@/components/ui/pricing-modal';
import { NonProjectSettingsModal } from '@/components/ui/settings-modal/non-project';
import { ExternalRoutes } from '@/utils/constants';
import { BuilderFeaturesHero } from '../../_components/hero/builder-features-hero';
import { BuilderBenefitsSection } from '../../_components/landing-page/builder-benefits-section';
import { CTASection } from '../../_components/landing-page/cta-section';
import { FAQSection } from '../../_components/landing-page/faq-section';
import { BuilderFeaturesGridSection } from '../../_components/landing-page/builder-features-grid-section';
import { BuilderFeaturesIntroSection } from '../../_components/landing-page/builder-features-intro-section';
import { ResponsiveMockupSection } from '../../_components/landing-page/responsive-mockup-section';
import { WebsiteLayout } from '../../_components/website-layout';

const builderFaqs = [
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
        answer: 'Onlook is free for your first prompt, but you\'re limited by the number of messages you can send. Please see our Pricing page for more details.',
    },
    {
        question: 'What is the difference between Onlook and other design tools?',
        answer: 'Onlook is a visual editor for code. It allows you to create and style your own creations with code as the source of truth. While it is best suited for creating websites, it can be used for anything visual – presentations, mockups, and more. Because Onlook uses code as the source of truth, the types of designs you can create are unconstrained by Onlook\'s interface.',
    },
    {
        question: 'Why is Onlook open-source?',
        answer: 'Developers have historically been second-rate citizens in the design process. Onlook was founded to bridge the divide between design and development, and we wanted to make developers first-class citizens alongside designers. We chose to be open-source to give developers transparency into how we are building Onlook and how the work created through Onlook will complement the work of developers.',
    },
];

export default function BuilderFeaturesPage() {
    return (
        <CreateManagerProvider>
            <WebsiteLayout showFooter={true}>
                {/* AI-Friendly Summary Section */}
                <section className="sr-only" aria-label="可视化构建器摘要">
                    <h1>Onlook 可视化构建器：使用真实 React 组件进行设计</h1>
                    <p>
                        Onlook 是适配现有代码库的可视化构建器。你可以在无限画布上使用 React、Vue 或 Angular 真实组件进行设计，设计成果本身就是代码。修改会成为可合并的拉取请求，而不是静态稿。
                    </p>
                    <h2>构建器主要功能</h2>
                    <ul>
                        <li>无限画布，支持可视化设计，底层运行真实代码</li>
                        <li>适配现有代码库，无需重建</li>
                        <li>使用 React、Vue、Angular 真实组件进行设计</li>
                        <li>设计师熟悉的拖放式界面</li>
                        <li>可视化控制颜色、间距和字体</li>
                        <li>实时预览修改</li>
                        <li>直接生成 GitHub PR</li>
                        <li>设计师无需编程</li>
                        <li>支持 Tailwind、CSS Modules、styled-components</li>
                        <li>兼容 shadcn/ui、Material UI、Chakra UI</li>
                    </ul>
                </section>

                <div className="w-screen h-screen flex items-center justify-center" id="hero">
                    <BuilderFeaturesHero />
                </div>
                <ResponsiveMockupSection />
                <BuilderBenefitsSection />
                <BuilderFeaturesIntroSection />
                <BuilderFeaturesGridSection />
                <CTASection
                    ctaText={`Bring your team \nto Onlook today`}
                    buttonText="Book a Demo"
                    href={ExternalRoutes.BOOK_DEMO}
                />
                <FAQSection faqs={builderFaqs} />
                <NonProjectSettingsModal />
                <SubscriptionModal />
            </WebsiteLayout>
        </CreateManagerProvider>
    );
}
