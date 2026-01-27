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
# Clone locative as template
git clone git@github.com:czech-grammar/locative.git {case-name}
cd {case-name}

# Reset git history
rm -rf .git
git init
git checkout -b gh-pages

# Update docusaurus.config.ts
# - Change baseUrl to /{case-name}/
# - Update title, tagline, metadata
```

### 2. GitHub Pages Setup

- Create repo `czech-grammar/{case-name}`
- Push to gh-pages branch
- Enable GitHub Pages with workflow deployment
- Add CNAME if using custom domain subdirectory

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

Create matching SVG diagrams in `/static/img/`:

1. **Noun endings cheatsheet** - `{case}-singular-cheatsheet.svg`
2. **Plural endings cheatsheet** - `{case}-plural-cheatsheet.svg`
3. **Flowchart** - `{case}-flowchart.svg`
4. **Adjective cheatsheet** - `{case}-adjective-cheatsheet.svg`

#### SVG Style Guide

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450"
     font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <!-- Standard gradients -->
    <linearGradient id="cardBg">
      <stop offset="0%" style="stop-color:#1a202c"/>
      <stop offset="100%" style="stop-color:#2d3748"/>
    </linearGradient>
    <!-- Color palette: pink #e91e8c, green #48bb78, blue #4299e1,
         purple #9f7aea, orange #ed8936, teal #38b2ac -->
  </defs>
  <!-- Dark card background with rounded corners -->
  <rect x="20" y="20" width="760" height="410" rx="20" fill="url(#cardBg)"/>
  <!-- Content... -->
</svg>
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
Part of the iLearnCzech family. Built with love by Jana & Melvin.
```

---

## Checklist for New Case

- [ ] Create repository from template
- [ ] Update docusaurus.config.ts (baseUrl, title, metadata)
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
