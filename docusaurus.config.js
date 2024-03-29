// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const title = "Dilan's Blog";
const tagline = 'Talking about software.';
const description =
  'On my blog, I talk about my projects, my tech stacks, and other computer science topics!';

const categories = [
  {
    label: 'Projects',
    to: '/tags/projects',
  },
  {
    label: 'Guides',
    to: '/tags/guides',
  },
  {
    label: 'Workflow',
    to: '/tags/workflow',
  },
  {
    label: 'Education',
    to: '/tags/education',
  },
  {
    label: 'Life',
    to: '/tags/life',
  },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title,
  tagline,
  url: 'https://dilan.blog',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dilanx', // Usually your GitHub org/user name.
  projectName: 'dilan.blog', // Usually your repo name.

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
          blogSidebarTitle: 'LATEST POSTS',
          blogSidebarCount: 10,
          routeBasePath: '/',
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Dilan Nair`,
            title,
            description: tagline,
            language: 'en',
          },
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
        title: 'Blog',
        logo: {
          alt: 'Dilan Nair Logo',
          src: 'img/logo.svg',
        },
        items: [
          ...categories.map((cat) => ({ ...cat, position: 'left' })),
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
        links: [
          {
            title: 'Blog',
            items: categories,
          },
          ...require('@dilanx/themes/docusaurus-content').footer,
        ],
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
      },
    }),
  themes: ['@dilanx/themes/docusaurus-core', '@dilanx/themes/docusaurus-blog'],
  plugins: ['docusaurus-plugin-sass'],
};

module.exports = config;
