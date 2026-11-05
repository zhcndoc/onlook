import React from 'react';

export function FeaturesGridSection() {
    return (
        <div className="w-full max-w-6xl mx-auto py-32 px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-20">
                <div>
                    <h3 className="text-foreground-secondary text-small uppercase tracking-wider mb-4">你的真实组件</h3>
                    <p className="text-foreground-primary text-lg md:text-xl font-light mb-6 text-balance">使用工程师构建的组件进行设计</p>
                    <p className="text-foreground-secondary text-regular text-balance leading-relaxed">
                        使用团队已经创建的按钮、卡片和布局，而不是通用 HTML。你的实际设计系统已就绪，可直接拖到画布上。
                    </p>
                </div>

                <div>
                    <h3 className="text-foreground-secondary text-small uppercase tracking-wider mb-4">为团队协作打造</h3>
                    <p className="text-foreground-primary text-lg md:text-xl font-light mb-6 text-balance">实时协作</p>
                    <p className="text-foreground-secondary text-regular text-balance leading-relaxed">
                        分享画布、添加画布批注，共同设计并产出真实 PR。无需再为“现在该怎么分享？”而发愁。
                    </p>
                </div>

                <div>
                    <h3 className="text-foreground-secondary text-small uppercase tracking-wider mb-4">交付 PR，而非原型</h3>
                    <p className="text-foreground-primary text-lg md:text-xl font-light mb-6 text-balance">修改直接成为拉取请求</p>
                    <p className="text-foreground-secondary text-regular text-balance leading-relaxed">
                        你的修改会成为真实 PR，由工程师审查并合并，无需交接、转换，也不用根据规格说明重建。
                    </p>
                </div>

                <div>
                    <h3 className="text-foreground-secondary text-small uppercase tracking-wider mb-4">Layer Management</h3>
                    <p className="text-foreground-primary text-lg md:text-xl font-light mb-6 text-balance">浏览组件树</p>
                    <p className="text-foreground-secondary text-regular text-balance leading-relaxed">
                        在可视化图层面板中查看 React 组件层级。点击任意图层即可在画布上选中，无需再翻找 JSX。
                    </p>
                </div>

                <div>
                    <h3 className="text-foreground-secondary text-small uppercase tracking-wider mb-4">适配你的代码库</h3>
                    <p className="text-foreground-primary text-lg md:text-xl font-light mb-6 text-balance">连接现有项目</p>
                    <p className="text-foreground-secondary text-regular text-balance leading-relaxed">
                        连接现有的 React 或 Next.js 项目，无需重建或迁移，几分钟内即可开始设计。
                    </p>
                </div>

                <div>
                    <h3 className="text-foreground-secondary text-small uppercase tracking-wider mb-4">版本历史</h3>
                    <p className="text-foreground-primary text-lg md:text-xl font-light mb-6 text-balance">随时找回进度</p>
                    <p className="text-foreground-secondary text-regular text-balance leading-relaxed">
                        Onlook 会自动保存项目快照。放心尝试，只需点击一次即可回退到任意历史版本。
                    </p>
                </div>
            </div>
        </div>
    );
}
