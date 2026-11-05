import { Routes } from '@/utils/constants';
import { Icons } from '@onlook/ui/icons';
import React from 'react';
import { ButtonLink } from '../button-link';
import { FAQDropdown } from './faq-dropdown';

interface FAQ {
    question: string;
    answer: string | React.ReactNode;
}

interface FAQSectionProps {
    faqs?: FAQ[];
    title?: string;
    buttonText?: string;
    buttonHref?: string;
    className?: string;
}

const defaultFaqs = [
    {
        question: 'Onlook 是什么？',
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
    {
        question: 'Onlook 有免费版本吗？',
        answer: '有。你可以从 GitHub 免费自行托管 Onlook。关于托管云版本，请联系我们的团队或预约演示。',
    },
    {
        question: '代码归谁所有？',
        answer: '你使用 Onlook 创建的代码完全归你所有。你可以导出到本地、发布到 GitHub，或部署到自定义域名。',
    },
];

export function FAQSection({
    faqs = defaultFaqs,
    title = "Frequently\nasked questions",
    buttonText = "Read our FAQs",
    buttonHref = Routes.FAQ,
    className = ""
}: FAQSectionProps) {
    return (
        <div className={`w-full py-48 px-8 bg-background-onlook/80 ${className}`} id="faq">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-24 md:gap-12">
                <div className="flex-1 flex flex-col items-start">
                    <h3 className="text-foreground-primary text-5xl md:text-6xl leading-[1.1] font-light mb-12 mt-4 max-w-3xl text-balance">
                        {title.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                {index < title.split('\n').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </h3>
                    <ButtonLink href={buttonHref} rightIcon={<Icons.ArrowRight className="w-5 h-5" />}>{buttonText}</ButtonLink>
                </div>
                <div className="flex-1 flex flex-col gap-6">
                    <FAQDropdown faqs={faqs} />
                </div>
            </div>
        </div>
    );
}    
