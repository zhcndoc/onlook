'use client';

import { useEffect, useRef, useState } from 'react';
import { FAQDropdown } from '../_components/landing-page/faq-dropdown';
import { CTASection } from '../_components/landing-page/cta-section';
import { WebsiteLayout } from '../_components/website-layout';
import { ExternalRoutes } from '@/utils/constants';

const faqSections = [
    {
        title: "关于 Onlook",
        anchor: "about-onlook",
        faqs: [
            {
                question: "Onlook 是什么？",
                answer: "Onlook 是一款 AI 驱动的可视化设计编辑器，可连接现有代码库，让设计师和开发者使用真实组件创建界面。与通用 AI 代码生成器不同，Onlook 会将 AI 限定在你的设计系统内。修改会成为工程师可以直接合并的拉取请求，无需导出、转换，也不会产生一次性原型。"
            },
            {
                question: "Onlook 适合哪些人？",
                answer: "Onlook 面向拥有设计师和现有组件库的产品团队。适合设计工程师、在代码驱动团队中工作的产品设计师、希望使用可视化工具的前端开发者，以及希望 AI 尊重既有成果的设计系统维护团队。"
            },
            {
                question: "Onlook 与其他设计工具有何不同？",
                answer: "传统设计工具生成静态稿，之后仍需在代码中重建。Onlook 使用真实组件进行设计，设计成果本身就是代码。设计师和开发者在同一份成果中协作，因此无需交接。修改会成为 PR，而不是规格说明。AI 受你的设计系统约束，不会偏离品牌规范。"
            },
            {
                question: "Onlook 与 AI 代码生成器有何不同？",
                answer: "AI 代码生成器使用通用 HTML/CSS 从头创建代码，生成结果还需要转换才能配合真实组件使用。Onlook 则连接现有组件库，并将 AI 限定在你的设计系统内。输出一致、符合品牌规范，并可直接合并，无需转换。"
            },
        ]
    },
    {
        title: "功能与能力",
        anchor: "features",
        faqs: [
            {
                question: "Onlook 有哪些主要功能？",
                answer: "Onlook 提供：1）底层运行真实代码的无限画布；2）受设计系统约束的 AI，不会偏离品牌规范；3）支持画布批注的团队实时协作；4）直接集成 GitHub，修改可成为可合并的 PR；5）支持使用现有组件、颜色和设计令牌；6）设计师无需编程即可使用的可视化界面。"
            },
            {
                question: "Onlook 的 AI 如何工作？",
                answer: "Onlook 的 AI 受你的设计系统约束。当你要求 AI 修改内容时，它只能使用代码库中已有的组件、颜色和设计令牌。这能避免品牌风格偏移，确保输出符合设计系统。你可以直接在画面上指向元素，而不必用文字描述；AI 能识别准确的选择器、组件和样式。"
            },
            {
                question: "Onlook 支持实时协作吗？",
                answer: "支持。Onlook 内置团队协作功能，你可以分享画布、添加画布批注并实时协作。多位团队成员可以同时查看和编辑同一个项目。修改会同步到代码，也可以提交为 PR。"
            },
            {
                question: "如何将修改发布到生产环境？",
                answer: "你在 Onlook 中所做的修改会成为代码库中的真实代码变更。准备好后，将其提交为拉取请求，交由工程师审查并合并。无需导出、复制粘贴或转换。代码使用实际组件，可用于生产环境。"
            }
        ]
    },
    {
        title: "技术兼容性",
        anchor: "compatibility",
        faqs: [
            {
                question: "Onlook 支持哪些前端框架？",
                answer: "Onlook 支持 React、Next.js、Vue、Angular、Svelte、Preact、SolidJS、Qwik 和 Web Components。只要你的框架采用现代组件化架构，很可能就能与 Onlook 配合使用。"
            },
            {
                question: "Onlook 支持哪些 CSS 和样式方案？",
                answer: "Onlook 支持主流 CSS 方案：Tailwind CSS、CSS Modules、styled-components、Emotion、SASS/SCSS、Less、Vanilla Extract、Stitches 和原生 CSS。无论代码库使用哪种样式方案，都可以与 Onlook 配合使用。"
            },
            {
                question: "Onlook 支持哪些组件库？",
                answer: "Onlook 适用于主流组件库，包括 shadcn/ui、Material UI、Mantine、Chakra UI、Radix UI、Ant Design、Headless UI、Blueprint、Fluent UI 和 PrimeReact。只要组件能在你的代码库中使用，就能在 Onlook 中使用。"
            },
            {
                question: "Onlook 能使用我现有的 React 组件吗？",
                answer: "可以。Onlook 会连接你的代码库，让你使用真实组件进行设计，例如工程师已经构建好的按钮、卡片和布局。AI 建议会使用实际组件 API，而不是通用替代方案。"
            },
            {
                question: "Onlook 如何集成 GitHub？",
                answer: "Onlook 会直接连接你的 GitHub 代码仓库。你所做的修改会作为真实代码变更进行跟踪。准备好交付时，Onlook 会创建包含这些修改的拉取请求，工程师可以按常规工作流进行审查、评论和合并。"
            }
        ]
    },
    {
        title: "工作流与协作",
        anchor: "workflow",
        faqs: [
            {
                question: "设计师和开发者如何在 Onlook 中协作？",
                answer: "设计师和开发者在同一份成果中工作，无需交接。设计师在画布上进行可视化修改，这些修改会成为真实代码变更。开发者可以在 IDE 中审查和完善，再将修改作为 PR 提交团队审查。团队成员还可以通过画布批注直接交流。"
            },
            {
                question: "Onlook 能融入我现有的开发工作流吗？",
                answer: "可以。Onlook 能融入现有的 Git 工作流，修改会成为分支和 PR。工程师可以继续使用常规工具审查代码，CI/CD 流水线也照常运行。"
            },
            {
                question: "Onlook 如何配合 Claude Code 等 AI 编程工具使用？",
                answer: "Onlook 可以补足 Claude Code 等 AI 编程工具的能力。Claude Code 适合在终端中构建，Onlook 则提供设计师需要的可视化层。你可以先用 Claude Code 搭建组件，再用 Onlook 进行可视化迭代和完善。两个工具所做的修改都会合入同一个代码库。"
            },
            {
                question: "我可以与未使用 Onlook 的相关人员分享作品吗？",
                answer: "可以。由于 Onlook 基于真实代码工作，你可以直接分享在画布上创建的成果。相关人员看到的是可运行的真实界面，而不是可能与最终产品不一致的静态稿。"
            }
        ]
    },
    {
        title: "公司",
        anchor: "company",
        faqs: [
            {
                question: "Onlook 的创始人是谁？",
                answer: "两位创始人分别来自设计和开发领域。我们意识到，AI 或许能成为关键一步，解决设计师与开发者协作的问题。Onlook 持续探索代码协作的新方式。"
            },
            {
                question: "Onlook 为什么选择开源？",
                answer: "长期以来，开发者在设计流程中的参与度并不充分。Onlook 希望弥合设计与开发之间的隔阂，让开发者和设计师在流程中拥有同等重要的位置。我们选择开源，让开发者了解 Onlook 的构建方式，以及如何将 Onlook 创作的成果融入他们的工作。"
            },
            {
                question: "Onlook 的所在地在哪里？",
                answer: "Onlook 创立于美国俄亥俄州辛辛那提，最初是一家以远程办公为主的公司，团队分布在辛辛那提和纽约市。参加 YC 2025 冬季批次后，Onlook 在旧金山设立了办公室。我们的开源贡献者遍布世界各地，以独特视角和出色才能参与项目，共同拓展设计与开发的边界。"
            }
        ]
    }
];

// Generate JSON-LD for all FAQs
const generateFAQJsonLd = () => {
    const allFaqs = faqSections.flatMap(section =>
        section.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: typeof faq.answer === 'string' ? faq.answer : faq.question, // Fallback for JSX answers
            },
        }))
    );

    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: allFaqs,
    };
};

export default function FAQPage() {
    const [currentSection, setCurrentSection] = useState(faqSections[0]?.anchor || '');
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const faqContainerRef = useRef<HTMLDivElement | null>(null);

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
            if (faqSections[activeIdx]?.anchor && faqSections[activeIdx]?.anchor !== currentSection) {
                setCurrentSection(faqSections[activeIdx]?.anchor || '');
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
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQJsonLd()) }}
            />

            {/* Hidden AI-friendly summary */}
            <section className="sr-only" aria-label="常见问题摘要">
                <h1>Onlook 常见问题</h1>
                <p>
                    Onlook 是一款面向前端开发的 AI 可视化编辑器，可连接现有的 React、Vue 或 Angular 代码库，让团队使用真实组件进行设计。AI 受设计系统约束，避免品牌风格偏移。修改会成为可合并的拉取请求。Onlook 支持主流框架（React、Next.js、Vue、Angular、Svelte）、样式方案（Tailwind、CSS Modules、styled-components）和组件库（shadcn/ui、Material UI、Chakra UI、Mantine、Radix UI），并以开源形式发布，拥有 2.4 万多个 GitHub 星标。
                </p>
            </section>

            <div className="w-full max-w-6xl mx-auto py-32 px-4 md:px-8">
                <h1 className="text-foreground-primary text-5xl md:text-6xl leading-[1.1] font-light mb-8 max-w-3xl text-balance">
                    常见问题
                </h1>
                <p className="text-foreground-secondary text-lg mb-16 max-w-2xl">
                    了解 Onlook 的相关信息：这是一款面向前端开发的 AI 可视化编辑器。
                </p>

                <div className="flex flex-col lg:flex-row gap-12" ref={faqContainerRef}>
                    {/* Sidebar Navigation */}
                    <nav className="hidden lg:block w-48 flex-shrink-0 self-start sticky top-32">
                        <div>
                            <h2 className="text-foreground-tertiary text-sm font-medium uppercase tracking-wider mb-4">主题</h2>
                            <ul className="flex flex-col gap-2">
                                {faqSections.map((section) => (
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

                    {/* FAQ Content */}
                    <section className="flex-1 max-w-[800px]">
                        {faqSections.map((section, i) => (
                            <div
                                key={section.anchor}
                                id={section.anchor}
                                className="mb-16 scroll-mt-24"
                                ref={el => { sectionRefs.current[i] = el; }}
                            >
                                <h2 className="text-foreground-primary text-2xl font-medium mb-6">{section.title}</h2>
                                <FAQDropdown faqs={section.faqs} />
                            </div>
                        ))}
                    </section>
                </div>
            </div>

            <CTASection
                ctaText={`还有疑问？`}
                buttonText="预约演示"
                href={ExternalRoutes.BOOK_DEMO}
            />
        </WebsiteLayout>
    );
}
