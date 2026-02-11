import './global.css';

import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { RootProvider } from 'fumadocs-ui/provider';
import { Geist } from 'next/font/google';
import Script from 'next/script';
import type { ReactNode } from 'react';
// import RB2BLoader from '@/components/rb2b-loader';

const geist = Geist({
    subsets: ['latin'],
    variable: '--font-geist',
});

export const metadata = {
    metadataBase: new URL('https://onlook.zhcndoc.com'),
    title: {
        default: 'Onlook 中文文档',
        template: '%s – Onlook 中文文档',
    },
    description:
        'Onlook 中文文档 – 一个开源的 "Cursor for Designers"，让你可以可视化编辑 React 和 Tailwind 项目。',
    openGraph: {
        siteName: 'Onlook 中文文档',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@onlookdev',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: '/',
    },
};

const docsOptions = {
    ...baseOptions,
};

const isProduction = process.env.NODE_ENV === 'production';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="zh-CN" className={geist.variable} suppressHydrationWarning>
            <head>
                <Script async src="https://www.zhcndoc.com/js/common.js"></Script>
            </head>
            <body className="flex flex-col min-h-screen">
                {/* {isProduction && (
                    <>
                        <Script src="https://z.onlook.com/cdn-cgi/zaraz/i.js" strategy="lazyOnload" />
                        <RB2BLoader />
                    </>
                )} */}
                <RootProvider>
                    <DocsLayout tree={source.pageTree} {...docsOptions}>
                        {children}
                    </DocsLayout>
                </RootProvider>
            </body>
        </html>
    );
}

