'use client';

import React from 'react';
import { Icons } from '@onlook/ui/icons';
import { ButtonLink } from '../button-link';
import { AiChatInteractive } from '../shared/mockups/ai-chat-interactive';
import { DirectEditingInteractive } from '../shared/mockups/direct-editing-interactive';
import { TailwindColorEditorMockup } from '../shared/mockups/tailwind-color-editor';

export function BenefitsSection() {
    return (
        <div className="w-full max-w-6xl mx-auto py-32 lg:py-64 px-8">
            <div className="space-y-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col order-2 lg:order-1">
                        <h2 className="text-foreground-secondary text-sm font-medium uppercase tracking-wider mb-4">理解上下文的 AI</h2>
                        <p className="text-foreground-primary text-2xl md:text-4xl font-light mb-6">AI 仅使用你的设计系统</p>
                        <p className="text-foreground-secondary text-regular mb-8 text-balance max-w-xl">
                            在对话中引用图片、设计稿和文档。AI 看得到你所见的内容，不必再从头解释。生成结果使用你的真实组件、颜色和设计令牌，不会偏离品牌规范。
                        </p>
                        {/* Removed hidden CTA to avoid unused icon JSX in this client file */}
                    </div>
                    <div className="order-1 lg:order-2">
                        <AiChatInteractive />
                    </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col order-2 lg:order-1">
                        <h2 className="text-foreground-secondary text-sm font-medium uppercase tracking-wider mb-4">画布操作</h2>
                        <p className="text-foreground-primary text-2xl md:text-4xl font-light mb-6">在无限画布上设计</p>
                        <p className="text-foreground-secondary text-regular mb-8 text-balance max-w-xl">
                            直接在画布上拖动、调整大小和排列元素，即时查看真实代码中的变化，无需切换工具。指出目标，AI 就知道你的意思。
                        </p>
                        {/* Removed hidden CTA to avoid unused icon JSX in this client file */}
                    </div>
                    <div className="order-1 lg:order-2">
                        <DirectEditingInteractive />
                    </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col order-2 lg:order-1">
                        <h2 className="text-foreground-secondary text-sm font-medium uppercase tracking-wider mb-4">设计系统约束</h2>
                        <p className="text-foreground-primary text-2xl md:text-4xl font-light mb-6">你的颜色、字体与设计令牌</p>
                        <p className="text-foreground-secondary text-regular mb-6 text-balance max-w-xl">
                            AI 受你的设计系统约束。使用品牌色、字体层级和现有设计令牌进行样式设计，让输出始终符合品牌规范。
                        </p>
                        <div className="grid grid-cols-2 gap-8 mb-8 text-foreground-secondary text-regular">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <Icons.CheckCircled className="w-5 h-5" />
                                    <span>Auto Layout & Flexbox</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icons.CheckCircled className="w-5 h-5" />
                                    <span>Borders</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icons.CheckCircled className="w-5 h-5" />
                                    <span>Margins</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icons.CheckCircled className="w-5 h-5" />
                                    <span>Image backgrounds</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <Icons.CheckCircled className="w-5 h-5" />
                                    <span>Typography</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icons.CheckCircled className="w-5 h-5" />
                                    <span>Padding</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icons.CheckCircled className="w-5 h-5" />
                                    <span>Gradients</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icons.CheckCircled className="w-5 h-5" />
                                    <span>Corner Radii</span>
                                </div>
                            </div>
                        </div>
                        {/* Removed hidden CTA to avoid unused icon JSX in this client file */}
                    </div>
                    <div className="w-full h-100 rounded-lg order-1 lg:order-2">
                        <TailwindColorEditorMockup />
                    </div>
                </div>
            </div>
        </div>
    );
}
