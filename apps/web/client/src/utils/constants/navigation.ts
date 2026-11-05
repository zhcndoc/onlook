import { ExternalRoutes, Routes } from './index';

export interface NavigationLink {
    title: string;
    href: string;
    description: string;
    external?: boolean;
}

export const PRODUCT_LINKS: NavigationLink[] = [
    {
        title: 'AI',
        href: Routes.FEATURES_AI,
        description: 'AI-powered design',
    },
    {
        title: 'AI 前端开发',
        href: Routes.FEATURES_AI_FRONTEND,
        description: 'AI 受你的设计系统约束',
    },
    {
        title: 'Visual Builder',
        href: Routes.FEATURES_BUILDER,
        description: 'Craft on a canvas',
    },
    {
        title: 'Prototyping',
        href: Routes.FEATURES_PROTOTYPE,
        description: 'Rapid prototype creation',
    },
    {
        title: 'Claude Code',
        href: Routes.WORKFLOWS_CLAUDE_CODE,
        description: 'Visual layer for Claude Code',
    },
    {
        title: '氛围编程',
        href: Routes.WORKFLOWS_VIBE_CODING,
        description: '面向氛围编程的团队协作',
    },
    {
        title: 'All Features',
        href: Routes.FEATURES,
        description: 'See everything Onlook offers',
    },
];

export const RESOURCES_LINKS: NavigationLink[] = [
    {
        title: 'Documentation',
        href: ExternalRoutes.DOCS,
        description: 'Learn how to use Onlook',
        external: true,
    },
    {
        title: 'Blog',
        href: ExternalRoutes.BLOG,
        description: 'News and updates',
        external: true,
    },
    {
        title: 'GitHub',
        href: ExternalRoutes.GITHUB,
        description: 'View the source code',
        external: true,
    },
    {
        title: 'Discord',
        href: ExternalRoutes.DISCORD,
        description: 'Join our community',
        external: true,
    },
];

export const ABOUT_LINKS: NavigationLink[] = [
    {
        title: 'About Us',
        href: Routes.ABOUT,
        description: 'Learn about our mission',
    },
    {
        title: 'FAQ',
        href: Routes.FAQ,
        description: 'Common questions',
    },
    {
        title: 'Book a Demo',
        href: ExternalRoutes.BOOK_DEMO,
        description: 'Schedule a demo with our team',
        external: true,
    },
];

export interface NavigationCategory {
    label: string;
    links: NavigationLink[];
}

export const NAVIGATION_CATEGORIES: NavigationCategory[] = [
    { label: 'Product', links: PRODUCT_LINKS },
    { label: 'Resources', links: RESOURCES_LINKS },
    { label: 'About', links: ABOUT_LINKS },
];
