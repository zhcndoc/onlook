import { Icons } from '@onlook/ui/icons';
import React from 'react';
import { AiChatInteractive } from '../../shared/mockups/ai-chat-interactive';

export function AiChatPreviewBlock() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <AiChatInteractive />
      <div className="flex flex-row items-start gap-8 w-full">
        <div className="flex flex-col items-start w-1/2">
          <div className="mb-2"><Icons.Sparkles className="w-6 h-6 text-foreground-primary" /></div>
          <span className="text-foreground-primary text-largePlus font-light">理解上下文的 AI</span>
        </div>
        <p className="text-foreground-secondary text-regular text-balance w-1/2">在对话中引用图片、设计稿和文档。AI 看得到你所见的内容，不必再从头解释。</p>
      </div>
    </div>
  );
}
