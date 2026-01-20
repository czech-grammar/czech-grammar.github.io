# Czech Grammar Site - Error Audit Log

This document tracks errors found during systematic review of all case pages.

## Format
- **Page**: [page name]
- **Line**: [line number in source]
- **Error Type**: [typo | inconsistency | incorrect-czech | formatting | logic]
- **Issue**: [description]
- **Fix**: [proposed correction]

---

## Nominative Case (nominative.md)

### Error 1
- **Line**: 84, 91
- **Error Type**: inconsistency
- **Issue**: Redundant text "*Čech → Češi (or *Češi*)*" - says the same thing twice
- **Fix**: Change to "*Čech → Češi*" (remove the redundant "or *Češi*")

### Error 2
- **Line**: 86
- **Error Type**: inconsistency
- **Issue**: Under "muž" model, ending listed as "-i" but example shows "*učitel → učitelé*" which ends in "-é" not "-i"
- **Fix**: Change example to "*muž → muži*" or note that učitel is irregular/uses -é variant

### Error 3
- **Line**: 92
- **Error Type**: unclear-example
- **Issue**: "*Nor → Norové*" - "Nor" is not a standard Czech word, unclear example
- **Fix**: Replace with clearer example like "*Němec → Němci*" (German) or note "Nor" means Norwegian

### Error 4
- **Line**: 70
- **Error Type**: typo
- **Issue**: Neuter models listed as "-o, -e, -ě, -í" but kuře ends in "-e" not "-ě"
- **Fix**: Change to "-o, -e, -e, -í" or clarify the distinction

---

---

## Genitive Case (genitive.md)

### Error 1
- **Line**: 62
- **Error Type**: typo
- **Issue**: "*socialismu***" has three asterisks instead of two (formatting error)
- **Fix**: Change to "*socialismu**" (two asterisks for italic + bold)

### Error 2
- **Line**: 141
- **Error Type**: incorrect-czech
- **Issue**: "*spadl se **stromu***" - incorrect preposition. "Se" is instrumental ("with"), not genitive "from"
- **Fix**: Change to "*spadl **ze stromu***" (ze + genitive = from the tree)

---

## Dative Case (dative.md)

### Error 1
- **Line**: 235
- **Error Type**: incorrect-czech
- **Issue**: "kostem" listed in feminine plural examples - should be "kostím" (soft feminine → -ím)
- **Fix**: Change "*ženám, růžím, písním, kostem*" to "*ženám, růžím, písním, kostím*"

---

---

## Accusative Case (accusative.md)

### Error 1
- **Line**: 47
- **Error Type**: redundant
- **Issue**: "*Vidím pán**a*** = *Vidím pán**a***" - shows the same thing twice
- **Fix**: Change to "*Vidím pán**a*** (accusative) = *pán**a*** (genitive)" to show the equivalence clearly

### Error 2
- **Line**: 298
- **Error Type**: logic
- **Issue**: "❌ *Jedu do Prah**y**.* → ✅ *Jedu do Prah**y***." - shows the same correct form twice
- **Fix**: Either remove the ❌ mark (if showing a correct example) or change left side to show an actual error

---

## Vocative Case (vocative.md)

### Error 1
- **Line**: 286
- **Error Type**: incorrect-czech
- **Issue**: "Bog" is not a Czech word - the nominative form of "God" is "Bůh"
- **Fix**: Change "❌ *Bog**e**!*" to "❌ *Bůh**e**!*" to show the incorrect form before palatalization

---

## Locative Case (locative.md)

### Error 1
- **Line**: 436
- **Error Type**: typo
- **Issue**: "*v matkč**iných** dopisech*" - "matkč" has an extra 'k'
- **Fix**: Change to "*v matč**iných** dopisech*" (mother's letters)

### Error 2
- **Line**: 476
- **Error Type**: logic
- **Issue**: "❌ *v lesích* → ✅ *v lesech* or *v lesích* (both acceptable)" - marks "v lesích" as wrong but then lists it as acceptable
- **Fix**: Remove the ❌ entirely or rephrase: "Both *v lesech* and *v lesích* are acceptable" or show a different error

---

## Instrumental Case (instrumental.md)

No errors found.

---

## Gender (gender.md)

No errors found.

---

## Number (number.md)

### Error 1
- **Line**: 35
- **Error Type**: redundant
- **Issue**: "Ending in consonant: **-i** or **-i**." - lists "-i" twice
- **Fix**: Change to just "**-i**" or specify the variation if there is one (e.g., "-i or -ě")

---

## Irregular Nouns (irregular.md)

No errors found.

---

## Plural Declensions (plural-declensions.md)

### Error 1
- **Line**: 40
- **Error Type**: incorrect-czech
- **Issue**: Dative plural for "kost" shown as "kost**em**" - should be "kost**ím**" (soft feminine plural dative = -ím, not -em)
- **Fix**: Change "kost**em**" to "kost**ím**" in the Dative row

---

## Cases Overview (cases-overview.md)

No errors found.

---

## Introduction to Nouns (intro.md)

No errors found.

---

## Quick Reference (quick-reference.md)

No errors found.

---

## Consonant Alternations (consonant-alternations.md)

No errors found.

---

## Hard and Soft Adjectives (adjectives/hard-soft.md)

No errors found.

---

## Present Tense (verbs/present-tense.md)

No errors found.

---

## Personal Pronouns (pronouns/personal.md)

### Error 1
- **Line**: 35
- **Error Type**: unclear/draft-text
- **Issue**: "*Wait, they are often the same now!*" appears to be draft text/internal comment left in the content
- **Fix**: Remove the inline comment or rephrase to clarify: "**mě** serves as both short and long form in modern Czech, while **mne** is archaic/formal"

---

## Status

### Case Pages
- ✅ Nominative: audited (4 errors)
- ✅ Genitive: audited (2 errors)
- ✅ Dative: audited (1 error)
- ✅ Accusative: audited (2 errors)
- ✅ Vocative: audited (1 error)
- ✅ Locative: audited (2 errors)
- ✅ Instrumental: audited (0 errors)

### Supporting Pages (Nouns)
- ✅ Gender: audited (0 errors)
- ✅ Number: audited (1 error)
- ✅ Irregular: audited (0 errors)
- ✅ Plural Declensions: audited (1 error)
- ✅ Cases Overview: audited (0 errors)
- ✅ Intro: audited (0 errors)

### Adjective Pages
- ✅ Hard/Soft Adjectives: audited (0 errors)

### Verb Pages
- ✅ Present Tense: audited (0 errors)
- ✅ Past Tense: audited (0 errors)
- ✅ Aspect: audited (0 errors)
- ✅ Imperative: audited (0 errors)
- ✅ Modal Verbs: audited (0 errors)
- ✅ Motion Verbs: audited (0 errors)

### Pronoun Pages
- ✅ Personal Pronouns: audited (1 error)
- ✅ Possessive Pronouns: audited (0 errors)
- ✅ Demonstrative Pronouns: audited (0 errors)

### Syntax Pages
- ✅ Word Order: audited (0 errors)
- ✅ Negation: audited (0 errors)

### Other Pages
- ✅ Quick Reference: audited (0 errors)
- ✅ Consonant Alternations (phonology): audited (0 errors)

**Total: 15 errors found across 29 pages audited**

## Summary by Error Type

- **Typos/Formatting**: 4 errors (triple asterisks, extra 'k' in matkčiných, model description, redundant "-i or -i")
- **Incorrect Czech**: 4 errors (wrong preposition, wrong plural forms, wrong word)
- **Logic/Redundancy**: 4 errors (redundant examples, contradictory examples, same form shown twice)
- **Unclear/Draft Text**: 2 errors (unclear example "Nor", inline draft comment)
- **Inconsistency**: 1 error (učitel → učitelé showing -é when pattern says -i)

## Pages Remaining (Not Yet Audited)

33 pages remain unaudited out of 62 total markdown files. These include:
- Additional verb pages (future, conditional, reflexive, passive, prefixes, intro)
- Additional adjective pages (comparison, intro)
- Additional pronoun pages (interrogative, relative, intro)
- Phonology pages (intro, alphabet, pronunciation, vowels, consonants, stress)
- Additional syntax pages (intro, questions, time, conditional clauses, purpose, conjunctions)
- Vocabulary pages
- Other morphology pages (numerals, adverbs, intro)
