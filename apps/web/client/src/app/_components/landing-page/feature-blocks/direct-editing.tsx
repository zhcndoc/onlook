import React from 'react';
import { Icons } from '@onlook/ui/icons';
import { DirectEditingInteractive } from '../../shared/mockups/direct-editing-interactive';


export function DirectEditingBlock() {
    return (
        <div className="flex flex-col gap-6">
            <DirectEditingInteractive />
            <div className="flex flex-row items-start gap-8 w-full">
                <div className="flex flex-col items-start w-1/2">
                    <div className="mb-2"><Icons.DirectManipulation className="w-6 h-6 text-foreground-primary" /></div>
                    <span className="text-foreground-primary text-largePlus font-light">画布操作</span>
                </div>
                <p className="text-foreground-secondary text-regular text-balance w-1/2">直接在画布上拖动、调整大小和排列元素，即时查看真实代码中的变化。</p>
            </div>
        </div>
    );
}
