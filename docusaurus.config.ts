import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Czech Grammar',
  tagline: 'Visual cheatsheets for every case, verb & pattern',
  favicon: 'img/favicon.ico',

  url: 'https://grammar.ilearnczech.com',
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

  headTags: [
    // Open Graph
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:site_name',
        content: 'Czech Grammar',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:locale',
        content: 'en_US',
      },
    },
    // Twitter Card
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:site',
        content: '@czechgrammar',
      },
    },
    // Additional SEO
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'Czech grammar, Czech language, learn Czech, Czech cases, Czech declension, Czech conjugation, Czech verbs, visual grammar, language learning',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'Czech Grammar',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'canonical',
        href: 'https://grammar.ilearnczech.com',
      },
    },
  ],

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
    // Social card for Open Graph and Twitter
    image: 'img/social-card.svg',
    metadata: [
      {name: 'description', content: 'Master Czech grammar with 38 beautiful visual cheatsheets covering all 7 cases, verb conjugations, pronouns, and more. Free, comprehensive, and designed for visual learners.'},
    ],
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
          title: 'iLearnCzech Family',
          items: [
            {
              label: 'iLearnCzech.com',
              href: 'https://ilearnczech.com',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com/ilearnczechcom',
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
      copyright: `Part of the iLearnCzech family. Made by <a href="https://ilearnczech.com" target="_blank">Jana</a> & <a href="https://melvin.me" target="_blank">Melvin</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
