'use client';

import { motion } from 'motion/react';

import { Button } from '@onlook/ui/button';
import { Icons } from '@onlook/ui/icons';

import { ExternalRoutes } from '@/utils/constants';
import { useGitHubStats } from '../top-bar/github';
import { UnicornBackground } from './unicorn-background';

export function ClaudeCodeHero() {
    const { formatted: starCount } = useGitHubStats();

    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-12 p-8 text-center text-lg">
            <UnicornBackground />
            <div className="relative z-20 flex max-w-3xl flex-col items-center gap-6 pt-4 pb-2">
                <motion.h1
                    className="text-foreground-secondary mb-4 text-sm font-medium tracking-wider uppercase"
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    style={{ willChange: 'opacity, filter', transform: 'translateZ(0)' }}
                >
                    工作流
                </motion.h1>
                <motion.p
                    className="text-center text-4xl !leading-[1.1] leading-tight font-light text-balance md:text-6xl"
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                    style={{ willChange: 'opacity, filter', transform: 'translateZ(0)' }}
                >
                    面向设计师的 Claude Code
                </motion.p>
                <motion.h2
                    className="text-foreground-secondary mx-auto max-w-xl text-center text-lg text-balance"
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                    style={{ willChange: 'opacity, filter', transform: 'translateZ(0)' }}
                >
                    为你的 AI 工作流补上可视化画布。Claude Code 负责构建，Onlook 让你进行设计。
                </motion.h2>
                <motion.div
                    className="mt-8 flex flex-row gap-4"
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                    style={{ willChange: 'opacity, filter', transform: 'translateZ(0)' }}
                >
                    <Button
                        asChild
                        size="lg"
                        className="bg-foreground-primary text-background-primary hover:bg-foreground-hover cursor-pointer p-6 transition-all duration-300"
                    >
                        <a href={ExternalRoutes.BOOK_DEMO} target="_blank" rel="noopener noreferrer">
                            预约演示
                            <Icons.ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </motion.div>
                <motion.div
                    className="text-foreground-secondary mt-8 flex items-center justify-center gap-6 text-sm"
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                    style={{ willChange: 'opacity, filter', transform: 'translateZ(0)' }}
                >
                    <div className="flex items-center gap-2">
                        <span>{starCount}+ GitHub 星标</span>
                    </div>
                    <div className="bg-foreground-secondary h-1 w-1 rounded-full"></div>
                    <div className="flex items-center gap-2">
                        <span>YC W25</span>
                    </div>
                    <div className="bg-foreground-secondary h-1 w-1 rounded-full"></div>
                    <div className="flex items-center gap-2">
                        <span>开源</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
