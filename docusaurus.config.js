// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const title = "Dilan's Blog";
const tagline = 'Talking about software';
const description =
    'On my blog, I talk about my projects, my tech stacks, and other computer science topics!';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title,
    tagline,
    url: 'https://dilan.blog',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'dilanx', // Usually your GitHub org/user name.
    projectName: 'dilanx-blog', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: false,
                blog: {
                    blogTitle: title,
                    blogDescription: description,
                    blogSidebarTitle: 'ALL POSTS',
                    blogSidebarCount: 'ALL',
                    routeBasePath: '/',
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                },
                gtag: {
                    trackingID: 'G-RFRK3RRSEW',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: 'light',
                disableSwitch: true,
            },
            navbar: {
                title: '/ Blog',
                logo: {
                    alt: 'Dilan Nair Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        to: '/tags/Projects',
                        label: 'Project',
                        position: 'left',
                    },
                    {
                        to: '/tags/Workflow',
                        label: 'Workflow',
                        position: 'left',
                    },
                    {
                        to: '/tags/Education',
                        label: 'Education',
                        position: 'left',
                    },
                    {
                        to: '/tags/Life',
                        label: 'Life',
                        position: 'left',
                    },
                    {
                        href: 'https://www.dilanxd.com',
                        label: 'dilanxd.com',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                copyright: `Copyright © ${new Date().getFullYear()} Dilan Nair`,
            },
        }),
    plugins: ['docusaurus-plugin-sass'],
};

module.exports = config;
