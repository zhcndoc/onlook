import React from 'react';

export function AiFeaturesIntroSection() {
    return (
        <div className="w-full max-w-6xl mx-auto py-32 px-8 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-foreground-secondary text-sm font-medium uppercase tracking-wider mb-6">
                    在无限画布上设计
                </h2>
                <p className="text-foreground-primary text-2xl md:text-5xl leading-[1.1] font-light mb-8 text-balance">
                    指出目标，AI 就知道你的意思。
                </p>
                <p className="text-foreground-secondary text-lg max-w-xl mx-auto text-balance">
                    不必再描述“右上角的按钮”——直接点击即可。AI 受你的设计系统约束，输出始终符合品牌规范。
                </p>
            </div>
        </div>
    );
}
