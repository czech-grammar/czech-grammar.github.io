# Czech Case Workbook Template

A guide for creating comprehensive Czech grammar case workbooks. Based on the Locative case workbook at `grammar.ilearnczech.com/locative/`.

---

## Overview

Each Czech case gets its own:
- **Repository**: `czech-grammar/{case-name}` (e.g., `czech-grammar/accusative`)
- **URL**: `grammar.ilearnczech.com/{case-name}/`
- **Docusaurus site** with consistent branding

---

## Repository Setup

### 1. Create New Repo

```bash
# Clone accusative as template (recommended setup)
git clone git@github.com:czech-grammar/accusative.git {case-name}
cd {case-name}

# Reset git history
rm -rf .git
git init
git add .
git commit -m "Initial commit"

# Update docusaurus.config.ts
# - Change baseUrl to /{case-name}/
# - Update title, tagline, metadata
# - Update projectName
```

### 2. GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

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

### 3. GitHub Pages Setup

```bash
# Create repo on GitHub
gh repo create czech-grammar/{case-name} --public

# Push to main branch
git remote add origin git@github.com:czech-grammar/{case-name}.git
git push -u origin main

# Configure GitHub Pages for workflow deployment
gh api repos/czech-grammar/{case-name}/pages -X PUT \
  -f build_type=workflow \
  -f source[branch]=main \
  -f source[path]=/
```

The workflow will automatically build and deploy on every push to `main`.

---

## Content Structure

### Sidebar Organization

```
1. Introduction (intro.md)
2. Quick Reference (quick-reference.md)
3. Theory/
   - Singular endings (singular.md)
   - Plural endings (plural.md)
   - Preposition rules (prepositions.md or specific like v-vs-na.md)
   - Palatalization if applicable (palatalization.md)
   - Adjective agreement (adjectives.md)
4. Exercises/
   - Exercise index (exercises/index.md)
   - Written exercises (exercises/*.md)
   - Interactive quizzes (exercises/interactive.mdx)
5. Memory Tools/
   - Mnemonics (memory/mnemonics.md)
   - Word lists (memory/*.md)
6. Cheatsheets/
   - Cheatsheet index (cheatsheets/index.md)
   - Visual cheatsheets with SVGs (cheatsheets/*.md)
   - Flowcharts (cheatsheets/flowcharts.md)
7. Exam Guide (exam-guide.md)
8. Quick Reference (quick-reference.md) - at bottom
```

---

## Page Templates

### Introduction Page (intro.md)

```markdown
---
sidebar_position: 1
slug: /
title: Introduction
---

# The {Case} Case ({Czech name} pád)

{Brief description of what this case is used for}

---

## When to Use the {Case}

{List main uses with examples}

### 1. {Use Category 1}
- Example: {Czech} — {English}

### 2. {Use Category 2}
- Example: {Czech} — {English}

---

## Key Prepositions

| Preposition | Meaning | Example |
|:------------|:--------|:--------|
| {prep} | {meaning} | {example} |

---

## Quick Examples

| Nominative | {Case} | English |
|:-----------|:-------|:--------|
| {nom form} | {case form} | {translation} |

---

## What You'll Learn

- ✅ {Topic 1}
- ✅ {Topic 2}
- ✅ {Topic 3}

---

## Navigation

Start with [Singular Endings](/singular) or jump to the [Quick Reference](/quick-reference).
```

### Singular Endings Page (singular.md)

```markdown
---
sidebar_position: 2
title: Singular Endings
---

# {Case} Singular Endings

{Brief intro}

---

## The Big Picture

:::tip Key Pattern
{Summarize the main pattern in 1-2 sentences}
:::

---

## Masculine Nouns

### Animate (people, animals)

| Pattern | Ending | Example |
|:--------|:-------|:--------|
| hard (student) | {ending} | {example} |
| soft (muž) | {ending} | {example} |

### Inanimate (things)

| Pattern | Ending | Example |
|:--------|:-------|:--------|
| hard (hrad) | {ending} | {example} |
| soft (stroj) | {ending} | {example} |

---

## Feminine Nouns

| Pattern | Ending | Example |
|:--------|:-------|:--------|
| -a (žena) | {ending} | {example} |
| -e (růže) | {ending} | {example} |
| consonant (věc) | {ending} | {example} |

---

## Neuter Nouns

| Pattern | Ending | Example |
|:--------|:-------|:--------|
| -o (město) | {ending} | {example} |
| -e (moře) | {ending} | {example} |
| -í (náměstí) | {ending} | {example} |

---

## Common Irregular Forms

| Nominative | {Case} | Note |
|:-----------|:-------|:-----|
| {word} | {form} | {note} |

---

## Practice

{Exercises with expandable answers}
```

### Plural Endings Page (plural.md)

```markdown
---
sidebar_position: 3
title: Plural Endings
---

# {Case} Plural Endings

{Brief intro highlighting any patterns}

---

## Overview

{Summary table of all plural endings}

---

## By Gender

### Masculine
{Tables and examples}

### Feminine
{Tables and examples}

### Neuter
{Tables and examples}

---

## Practice

{Exercises}
```

### Adjective Agreement Page (adjectives.md)

```markdown
---
sidebar_position: X
title: Adjective Agreement
---

# Adjectives in the {Case}

Adjectives must agree with their nouns in gender, number, and case.

---

## Hard Adjectives

| Gender | Nominative | {Case} | Example |
|:-------|:-----------|:-------|:--------|
| Masculine | -ý | {ending} | {example} |
| Neuter | -é | {ending} | {example} |
| Feminine | -á | {ending} | {example} |
| Plural | varies | {ending} | {example} |

---

## Soft Adjectives

{Same structure}

---

## Possessives

| Possessive | Masc./Neut. | Fem. |
|:-----------|:------------|:-----|
| můj | {form} | {form} |
| tvůj | {form} | {form} |
| ...

---

## Demonstratives (ten/ta/to)

{Table with forms}

---

## Interrogatives (který/jaký)

{Table with forms}
```

### Quick Reference Page (quick-reference.md)

```markdown
---
sidebar_position: X
title: Quick Reference
---

# {Case} Case Quick Reference

Everything you need on one page. Print this!

---

## All Prepositions

| Preposition | Meaning | Example |
|:------------|:--------|:--------|

---

## Singular Noun Endings

| Gender | Pattern | Ending | Example |
|:-------|:--------|:-------|:--------|

---

## Plural Noun Endings

| Gender | Pattern | Ending | Example |
|:-------|:--------|:-------|:--------|

---

## Adjective Endings

| | Masc./Neut. Sg. | Fem. Sg. | All Plural |
|:--|:---------------|:---------|:-----------|

---

## Example Sentences

| Czech | English |
|:------|:--------|

---

*Print this page: Ctrl+P (Cmd+P on Mac)*
```

---

## Visual Assets

### SVG Cheatsheets

Create matching SVG diagrams in `/static/img/`. These are the most valuable part of the workbook - visual learners can grasp patterns instantly.

#### Required Cheatsheets

| File | Purpose | Layout |
|:-----|:--------|:-------|
| `{case}-singular-cheatsheet.svg` | All singular noun endings | 4 columns: M.Anim, M.Inan, Fem, Neut |
| `{case}-plural-cheatsheet.svg` | All plural noun endings | 2-4 columns depending on complexity |
| `{case}-adjective-cheatsheet.svg` | Adjective agreement | Sections for hard/soft, possessives, demonstratives |
| `{case}-flowchart.svg` | Decision tree (optional) | Flowchart for choosing correct ending |

#### Design Principles

1. **Dark theme** - Dark card background (#1a202c to #2d3748 gradient)
2. **Color-coded by gender**:
   - Blue (#4299e1) for masculine
   - Pink (#ed64a6) for feminine
   - Green (#48bb78) for neuter
   - Gray (#718096) for "no change" categories
   - Gold (#ecc94b) for "golden rule" banners
   - Purple (#9f7aea) for special adjectives (possessives, demonstratives)
3. **Highlight changes** - Use `<tspan>` to color the ending that changes
4. **Golden rule banner** - Put the key insight in a gold banner at top
5. **Consistent structure** - Each gender gets a rounded card with gradient header

#### SVG Style Guide

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 950 520"
     font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="2" dy="3" stdDeviation="4" flood-opacity="0.12"/>
    </filter>
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a202c"/>
      <stop offset="100%" style="stop-color:#2d3748"/>
    </linearGradient>
    <linearGradient id="mascGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#4299e1"/>
      <stop offset="100%" style="stop-color:#3182ce"/>
    </linearGradient>
    <linearGradient id="femGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ed64a6"/>
      <stop offset="100%" style="stop-color:#d53f8c"/>
    </linearGradient>
    <linearGradient id="neutGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#48bb78"/>
      <stop offset="100%" style="stop-color:#38a169"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ecc94b"/>
      <stop offset="100%" style="stop-color:#d69e2e"/>
    </linearGradient>
  </defs>

  <!-- Main card background -->
  <rect x="20" y="20" width="910" height="480" rx="20" fill="url(#cardBg)" filter="url(#shadow)"/>

  <!-- Header -->
  <text x="475" y="58" text-anchor="middle" font-size="26" font-weight="bold" fill="white">
    {Case} Singular Cheat Sheet
  </text>

  <!-- Golden rule banner -->
  <rect x="35" y="110" width="870" height="50" rx="10" fill="url(#goldGrad)"/>
  <text x="475" y="142" text-anchor="middle" font-size="16" font-weight="bold" fill="#1a202c">
    THE KEY RULE: {summarize the pattern}
  </text>

  <!-- Gender column card -->
  <rect x="35" y="175" width="210" height="300" rx="12" fill="#1a202c" stroke="url(#mascGrad)" stroke-width="3"/>
  <rect x="35" y="175" width="210" height="45" rx="12" fill="url(#mascGrad)"/>
  <text x="140" y="205" text-anchor="middle" font-size="14" font-weight="bold" fill="white">MASCULINE</text>

  <!-- Example with highlighted ending -->
  <text x="55" y="250" font-size="12" fill="#e2e8f0">
    student → student<tspan fill="#4299e1" font-weight="bold">a</tspan>
  </text>
</svg>
```

#### Example Reference

See these live examples:
- **Accusative**: `grammar.ilearnczech.com/accusative/cheatsheets/singular`
- **Locative**: `grammar.ilearnczech.com/locative/cheatsheets/singular`

#### Embedding in Markdown

```markdown
## Visual Cheatsheet

![{Case} Singular Cheatsheet](/img/{case}-singular-cheatsheet.svg)
```

---

## Interactive Quiz Component

The Quiz component supports:

```jsx
<Quiz
  title="Quiz Title"
  questions={[
    {
      question: "Question text with ___ blank",
      options: ["option1", "option2"],  // For multiple choice
      answer: "correct answer",
      explanation: "Why this is correct"
    },
    {
      question: "Fill in: v ___ (Praha)",
      answer: "Praze",  // No options = text input
      explanation: "Explanation here"
    }
  ]}
/>
```

---

## Exercise Types

### 1. Multiple Choice
- Preposition selection (v/na, etc.)
- Ending selection

### 2. Fill in the Blank
- Type the correct form
- Preposition + noun combinations

### 3. Transformation Drills
- Nominative → Case conversion
- Singular → Plural

### 4. Error Correction
- Find and fix mistakes

### 5. Translation
- English → Czech
- Czech → English

---

## Case-Specific Content

### For Each Case, Research:

1. **Primary uses** - What situations require this case?
2. **Prepositions** - Which prepositions govern this case?
3. **Verbs** - Which verbs require this case for objects?
4. **Adjective endings** - How do adjectives decline?
5. **Pronouns** - Personal pronoun forms in this case
6. **Common phrases** - Idiomatic expressions
7. **Irregulars** - Common words with irregular forms

### Czech Cases Overview

| Case | Czech | Question | Main Uses |
|:-----|:------|:---------|:----------|
| 1. Nominative | První pád | Kdo? Co? | Subject |
| 2. Genitive | Druhý pád | Koho? Čeho? | Possession, quantities, some prepositions |
| 3. Dative | Třetí pád | Komu? Čemu? | Indirect object, some prepositions |
| 4. Accusative | Čtvrtý pád | Koho? Co? | Direct object, motion toward |
| 5. Vocative | Pátý pád | — | Direct address |
| 6. Locative | Šestý pád | O kom? O čem? | Location, always with preposition |
| 7. Instrumental | Sedmý pád | Kým? Čím? | Means/instrument, with/by |

---

## Branding

### Colors (iLearnCzech)

```css
--color-primary: #e91e8c;  /* Magenta/Pink */
--color-dark: #2d3748;
--color-light: #f7fafc;
```

### Footer

```
Part of the iLearnCzech family. Made by Jana & Melvin.
```

---

## Checklist for New Case

- [ ] Create repository from template (clone accusative)
- [ ] Reset git history and create fresh repo
- [ ] Update docusaurus.config.ts (baseUrl, title, metadata)
- [ ] Add `.github/workflows/deploy.yml`
- [ ] Push to GitHub and configure Pages for workflow deployment
- [ ] Write intro.md with case overview
- [ ] Write singular.md with all noun patterns
- [ ] Write plural.md with all plural patterns
- [ ] Write preposition page(s) specific to this case
- [ ] Write adjectives.md with agreement rules
- [ ] Write quick-reference.md summary
- [ ] Create SVG cheatsheets (2-4 diagrams)
- [ ] Create exercises (4-5 types)
- [ ] Create interactive quizzes (5-7 quiz sections)
- [ ] Write memory tools/mnemonics
- [ ] Write exam guide section
- [ ] Test dark mode
- [ ] Test mobile responsiveness
- [ ] Test print styles
- [ ] Deploy and verify

---

## File Listing (Locative Reference)

```
docs/
├── intro.md
├── quick-reference.md
├── singular.md
├── plural.md
├── v-vs-na.md
├── po-and-pri.md
├── palatalization.md
├── adjectives.md
├── exam-guide.md
├── exercises/
│   ├── index.md
│   ├── v-or-na.md
│   ├── fill-blank.md
│   ├── transform.md
│   ├── errors.md
│   └── interactive.mdx
├── memory/
│   ├── mnemonics.md
│   └── na-words.md
└── cheatsheets/
    ├── index.md
    ├── singular.md
    ├── plural.md
    ├── adjectives.md
    └── flowcharts.md

static/img/
├── locative-singular-cheatsheet.svg
├── locative-plural-cheatsheet.svg
├── locative-plural-flowchart.svg
├── adjective-endings-cheatsheet.svg
├── adjective-special-cheatsheet.svg
└── (case-specific images)

src/
├── components/
│   └── Quiz.tsx
├── css/
│   └── custom.css
└── pages/
    └── index.tsx (landing page)
```

---

*Template version 1.0 — Based on Locative workbook*
