# LLM Guide: Creating Documentation Sites with Docusaurus

A comprehensive guide for LLMs on creating beautiful, functional documentation sites. Based on patterns proven while building solid-docs.github.io/docs.

## Overview

This guide covers creating a documentation site using:
- **Docusaurus 3.x** - React-based static site generator
- **GitHub Pages** - Free hosting
- **TypeScript config** - Type-safe configuration

**Time to complete:** ~30 minutes for a working site with 10+ pages

---

## Phase 1: Project Setup

### 1.1 Create the Repository

```bash
# Create GitHub repo first (if using gh CLI)
gh repo create <org>/<repo-name> --public --description "Documentation for <project>"

# Clone it
git clone git@github.com:<org>/<repo-name>.git
cd <repo-name>
```

### 1.2 Initialize Docusaurus

```bash
npx create-docusaurus@latest . classic --typescript

# Install dependencies
npm install
```

### 1.3 Initial Directory Structure

```
docs/
├── docs/                    # Markdown documentation files
│   ├── getting-started/
│   ├── guides/
│   ├── reference/
│   └── intro.md
├── src/
│   ├── components/
│   ├── css/
│   │   └── custom.css      # Theme customization
│   └── pages/
│       └── index.tsx       # Homepage
├── static/
│   ├── img/                # Images, logos
│   └── browser/            # Static apps (optional)
├── docusaurus.config.ts    # Main configuration
├── sidebars.ts             # Sidebar navigation
└── package.json
```

---

## Phase 2: Configuration

### 2.1 docusaurus.config.ts

```typescript
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  // Basic site metadata
  title: '<Project> Docs',
  tagline: '<One-line description of the project>',
  favicon: 'img/favicon.ico',

  // Deployment configuration
  url: 'https://<org>.github.io',
  baseUrl: '/<repo-name>/',
  organizationName: '<org>',
  projectName: '<repo-name>',

  // Recommended settings
  onBrokenLinks: 'warn',

  // Future-proof
  future: {
    v4: true,
  },

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
          editUrl: 'https://github.com/<org>/<repo-name>/tree/gh-pages/',
          routeBasePath: '/',  // Docs at root, not /docs/
        },
        blog: false,  // Disable unless needed
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Social card for link previews
    image: 'img/social-card.png',

    // SEO metadata
    metadata: [
      {name: 'keywords', content: '<keyword1>, <keyword2>, <keyword3>'},
      {name: 'description', content: '<Project description for SEO>'},
      {property: 'og:type', content: 'website'},
    ],

    // Color mode
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    // Optional announcement bar
    announcementBar: {
      id: 'contribute',
      content: 'Help improve these docs! <a href="https://github.com/<org>/<repo-name>">Contribute on GitHub</a>',
      backgroundColor: '#7C4DFF',
      textColor: '#fff',
      isCloseable: true,
    },

    // Navigation bar
    navbar: {
      title: '<Project> Docs',
      logo: {
        alt: '<Project> Logo',
        src: 'img/logo.png',
        width: 32,
        height: 32,
      },
      items: [
        {
          to: '/getting-started/introduction',
          label: 'Getting Started',
          position: 'left',
        },
        {
          to: '/guides/overview',
          label: 'Guides',
          position: 'left',
        },
        {
          to: '/reference/api',
          label: 'Reference',
          position: 'left',
        },
        // Dropdown example
        {
          type: 'dropdown',
          label: 'Ecosystem',
          position: 'left',
          items: [
            {label: 'GitHub', href: 'https://github.com/<org>'},
            {label: 'npm', href: 'https://npmjs.com/package/<package>'},
            {type: 'html', value: '<hr style="margin: 0.5rem 0;">'},
            {label: 'Community', href: 'https://discord.gg/<invite>'},
          ],
        },
        {
          href: 'https://github.com/<org>/<repo-name>',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    // Footer
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {label: 'Getting Started', to: '/getting-started/introduction'},
            {label: 'Guides', to: '/guides/overview'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'GitHub', href: 'https://github.com/<org>'},
            {label: 'Discord', href: 'https://discord.gg/<invite>'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Blog', href: 'https://<project>.dev/blog'},
            {label: 'Changelog', href: 'https://github.com/<org>/<repo>/releases'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <Project>. Built with Docusaurus.`,
    },

    // Code syntax highlighting
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript'],
    },

    // Table of contents depth
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
```

### 2.2 sidebars.ts

```typescript
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,  // Expand by default
      items: [
        'getting-started/introduction',
        'getting-started/installation',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: [
        'guides/overview',
        'guides/basic-usage',
        'guides/advanced-patterns',
        {
          type: 'category',
          label: 'Recipes',
          collapsed: true,
          items: [
            'guides/recipes/authentication',
            'guides/recipes/data-fetching',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/api',
        'reference/configuration',
        'reference/troubleshooting',
        'reference/faq',
      ],
    },
  ],
};

export default sidebars;
```

---

## Phase 3: Styling

### 3.1 src/css/custom.css

```css
/**
 * Custom theme with purple/blue gradient
 * Adjust colors to match project branding
 */

:root {
  /* Primary colors - adjust to project brand */
  --ifm-color-primary: #7C3AED;
  --ifm-color-primary-dark: #6D28D9;
  --ifm-color-primary-darker: #5B21B6;
  --ifm-color-primary-darkest: #4C1D95;
  --ifm-color-primary-light: #8B5CF6;
  --ifm-color-primary-lighter: #A78BFA;
  --ifm-color-primary-lightest: #C4B5FD;

  /* Code styling */
  --ifm-code-font-size: 95%;
  --docusaurus-highlighted-code-line-bg: rgba(124, 58, 237, 0.1);

  /* Link colors */
  --ifm-link-color: #7C3AED;

  /* Navbar */
  --ifm-navbar-background-color: #ffffff;
  --ifm-navbar-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  /* Footer */
  --ifm-footer-background-color: #1e1b4b;

  /* Typography */
  --ifm-font-family-base: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}

/* Dark mode */
[data-theme='dark'] {
  --ifm-color-primary: #A78BFA;
  --ifm-color-primary-dark: #8B5CF6;
  --ifm-color-primary-darker: #7C3AED;
  --ifm-color-primary-darkest: #6D28D9;
  --ifm-color-primary-light: #C4B5FD;
  --ifm-color-primary-lighter: #DDD6FE;
  --ifm-color-primary-lightest: #EDE9FE;

  --docusaurus-highlighted-code-line-bg: rgba(167, 139, 250, 0.2);
  --ifm-link-color: #A78BFA;
  --ifm-navbar-background-color: #0f0d1a;
  --ifm-footer-background-color: #0f0d1a;
  --ifm-background-color: #18162c;
}

/* Hero gradient */
.hero--primary {
  background: linear-gradient(135deg, #7C3AED, #2563EB);
}

/* Code blocks */
.prism-code {
  border-radius: 8px;
}

/* Tables */
table {
  display: table;
  width: 100%;
}

table th {
  background-color: rgba(124, 58, 237, 0.1);
}

[data-theme='dark'] table th {
  background-color: rgba(167, 139, 250, 0.15);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
```

---

## Phase 4: Homepage

### 4.1 src/pages/index.tsx

```tsx
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/getting-started/introduction">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description, link}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md padding-vert--lg">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link to={link}>Learn more →</Link>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className="row">
          <Feature
            title="Feature One"
            description="Description of the first key feature or concept."
            link="/guides/feature-one"
          />
          <Feature
            title="Feature Two"
            description="Description of the second key feature or concept."
            link="/guides/feature-two"
          />
          <Feature
            title="Feature Three"
            description="Description of the third key feature or concept."
            link="/guides/feature-three"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
```

### 4.2 src/pages/index.module.css

```css
.heroBanner {
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
```

---

## Phase 5: Documentation Pages

### 5.1 Document Structure Template

Every markdown file should have frontmatter:

```markdown
---
sidebar_position: 1
title: Page Title
description: SEO description for this page
---

# Page Title

Introduction paragraph explaining what this page covers.

## Section One

Content with code examples:

```javascript
const example = 'code here';
```

## Section Two

More content...

### Subsection

Detailed information...

## See Also

- [Related Page](/path/to/page)
- [External Resource](https://example.com)
```

### 5.2 Recommended Page Types

**Getting Started Section:**
```
docs/getting-started/
├── introduction.md      # What is this project?
├── installation.md      # How to install
├── quick-start.md       # 5-minute tutorial
└── core-concepts.md     # Key ideas to understand
```

**Guides Section:**
```
docs/guides/
├── overview.md          # Guide index
├── basic-usage.md       # Common patterns
├── advanced-patterns.md # Complex scenarios
└── recipes/
    ├── authentication.md
    ├── data-fetching.md
    └── error-handling.md
```

**Reference Section:**
```
docs/reference/
├── api.md              # API documentation
├── configuration.md    # Config options
├── cli.md              # CLI commands
├── troubleshooting.md  # Common issues
├── faq.md              # Frequently asked questions
└── contributing.md     # How to contribute
```

---

## Phase 6: Static Assets

### 6.1 Adding a Logo

Place logo files in `static/img/`:
- `logo.png` - Navbar logo (recommended: 64x64 or 128x128)
- `favicon.ico` - Browser favicon
- `social-card.png` - OpenGraph image (1200x630)

### 6.2 Adding Static HTML Apps

For standalone demos/apps, create folders in `static/`:

```
static/
├── browser/
│   └── index.html    # Accessible at /browser/
├── playground/
│   └── index.html    # Accessible at /playground/
└── img/
    └── logo.png
```

Link to them with absolute URLs:
```markdown
**[Try the Demo →](https://your-site.github.io/repo-name/browser/)**
```

---

## Phase 7: Deployment

### 7.1 GitHub Pages Setup

1. **Create GitHub Actions workflow** at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [gh-pages]  # Or main, depending on your setup
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: build

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

2. **Enable GitHub Pages** in repo settings:
   - Go to Settings → Pages
   - Source: GitHub Actions

### 7.2 Manual Deployment

```bash
# Build locally
npm run build

# Test locally
npm run serve

# Deploy (if using gh-pages branch for source)
git add -A
git commit -m "Update docs"
git push origin gh-pages
```

---

## Phase 8: Common Patterns

### 8.1 Linking Between Pages

```markdown
<!-- Internal links (Docusaurus handles routing) -->
[Getting Started](/getting-started/introduction)
[API Reference](/reference/api)

<!-- Section links -->
[See Configuration](#configuration)

<!-- External links -->
[GitHub](https://github.com/org/repo)
```

### 8.2 Code Blocks with Titles

````markdown
```javascript title="src/example.js"
const config = {
  setting: 'value'
};
```
````

### 8.3 Admonitions (Callouts)

```markdown
:::tip
Helpful tip here
:::

:::warning
Warning message here
:::

:::danger
Critical warning here
:::

:::info
Informational note
:::
```

### 8.4 Tabs

```markdown
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="npm" label="npm" default>
    ```bash
    npm install package
    ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
    ```bash
    yarn add package
    ```
  </TabItem>
</Tabs>
```

### 8.5 Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

---

## Phase 9: Checklist

Before launching, verify:

- [ ] `docusaurus.config.ts` has correct `url` and `baseUrl`
- [ ] All navbar links work (no 404s)
- [ ] Sidebar matches actual file structure
- [ ] Logo and favicon are present
- [ ] Social card image exists
- [ ] Build succeeds: `npm run build`
- [ ] Local preview works: `npm run serve`
- [ ] GitHub Actions workflow is set up
- [ ] GitHub Pages is enabled in repo settings

---

## Troubleshooting

### "Page Not Found" on navbar links

Usually caused by `baseUrl` mismatch. If your site is at `org.github.io/repo/`:
- Set `baseUrl: '/repo/'`
- Set `routeBasePath: '/'` in docs config

### Sidebar shows wrong pages

Ensure `sidebars.ts` references match actual file paths (without `.md` extension).

### Styles not applying

1. Check `custom.css` is imported in config
2. Clear cache: `rm -rf .docusaurus build node_modules/.cache`
3. Rebuild: `npm run build`

### Build warnings about broken links

Either fix the links or set `onBrokenLinks: 'warn'` in config to allow deployment.

---

## Quick Reference

```bash
# Development
npm start              # Start dev server (hot reload)
npm run build          # Production build
npm run serve          # Preview production build

# Common files to edit
docusaurus.config.ts   # Site config, navbar, footer
sidebars.ts            # Sidebar navigation
src/css/custom.css     # Theme colors and styles
docs/**/*.md           # Documentation content
static/img/*           # Images and logos
```

---

*This guide created by Claude. Tested with Docusaurus 3.x and GitHub Pages.*
