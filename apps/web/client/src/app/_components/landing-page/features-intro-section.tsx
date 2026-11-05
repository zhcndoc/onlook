import React from 'react';

export function FeaturesIntroSection() {
    return (
        <div className="w-full max-w-6xl mx-auto py-32 px-8 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-foreground-secondary text-sm font-medium uppercase tracking-wider mb-6">
                    原生设计工具功能
                </h2>
                <p className="text-foreground-primary text-2xl md:text-5xl leading-[1.1] font-light mb-8 text-balance">
                    设计师上手熟悉，工程师放心采用。
                </p>
                <p className="text-foreground-secondary text-lg max-w-xl mx-auto text-balance">
                    直观易用的画布，底层运行真实代码。工程师可以直接合并你的设计成果，无需交接或重建。
                </p>
            </div>
        </div>
    );
}
