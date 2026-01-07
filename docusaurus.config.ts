import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Czech Grammar',
  tagline: 'A comprehensive guide to Czech grammar',
  favicon: 'img/favicon.ico',

  url: 'https://czech-grammar.github.io',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'czech-grammar',
  projectName: 'czech-grammar.github.io',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/czech-grammar/czech-grammar.github.io/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Czech Grammar',
      logo: {
        alt: 'Czech Grammar Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'phonology/intro',
          position: 'left',
          label: 'Phonology',
        },
        {
          type: 'doc',
          docId: 'morphology/intro',
          position: 'left',
          label: 'Morphology',
        },
        {
          type: 'doc',
          docId: 'syntax/intro',
          position: 'left',
          label: 'Syntax',
        },
        {
          type: 'doc',
          docId: 'vocabulary/intro',
          position: 'left',
          label: 'Vocabulary',
        },
        {
          type: 'doc',
          docId: 'quick-reference',
          position: 'left',
          label: '📖 Quick Reference',
        },
        {
          href: 'https://github.com/czech-grammar/czech-grammar.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Phonology',
              to: '/docs/phonology/intro',
            },
            {
              label: 'Morphology',
              to: '/docs/morphology/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/czech-grammar/czech-grammar.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Czech Grammar. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
