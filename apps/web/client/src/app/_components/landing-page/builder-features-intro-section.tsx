import React from 'react';

export function BuilderFeaturesIntroSection() {
    return (
        <div className="w-full max-w-6xl mx-auto py-32 px-8 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-foreground-secondary text-sm font-medium uppercase tracking-wider mb-6">
                    适配你的代码库
                </h2>
                <p className="text-foreground-primary text-2xl md:text-5xl leading-[1.1] font-light mb-8 text-balance">
                    连接现有项目，几分钟内开始设计。
                </p>
                <p className="text-foreground-secondary text-lg max-w-xl mx-auto text-balance">
                    无需重建或迁移。连接 React、Next.js 或 Vue 项目，直接使用工程师已经构建好的真实组件进行设计。
                </p>
            </div>
        </div>
    );
}
