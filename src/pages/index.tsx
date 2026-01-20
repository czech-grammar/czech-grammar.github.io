import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const cases = [
  { num: 1, name: 'Nominative', czech: 'Nominativ', question: 'Kdo? Co?', path: '/docs/morphology/nouns/nominative' },
  { num: 2, name: 'Genitive', czech: 'Genitiv', question: 'Koho? Čeho?', path: '/docs/morphology/nouns/genitive' },
  { num: 3, name: 'Dative', czech: 'Dativ', question: 'Komu? Čemu?', path: '/docs/morphology/nouns/dative' },
  { num: 4, name: 'Accusative', czech: 'Akuzativ', question: 'Koho? Co?', path: '/docs/morphology/nouns/accusative' },
  { num: 5, name: 'Vocative', czech: 'Vokativ', question: 'Oslovení!', path: '/docs/morphology/nouns/vocative' },
  { num: 6, name: 'Locative', czech: 'Lokál', question: 'O kom? O čem?', path: '/docs/morphology/nouns/locative' },
  { num: 7, name: 'Instrumental', czech: 'Instrumentál', question: 'Kým? Čím?', path: '/docs/morphology/nouns/instrumental' },
];

const features = [
  { icon: '🎨', title: 'Visual Cheatsheets', desc: 'Beautiful SVG diagrams for every grammar concept. See patterns at a glance instead of reading walls of text.' },
  { icon: '⚡', title: 'Quick Reference', desc: 'Find any declension or conjugation in seconds. Perfect for exam prep or checking your homework.' },
  { icon: '📱', title: 'Mobile Friendly', desc: 'Works beautifully on any device. Study on your phone, tablet, or desktop.' },
  { icon: '🆓', title: '100% Free', desc: 'All content is free and open source. No signup, no paywall, no ads.' },
];

function HeroSection() {
  return (
    <header className="hero-new">
      <div className="container">
        <h1 className="hero-new__title">Czech Grammar</h1>
        <p className="hero-new__subtitle">Visual cheatsheets for every case, verb & pattern</p>
        <p className="hero-new__tagline">The quick reference companion to iLearnCzech</p>
        <div className="hero-new__buttons">
          <Link className="hero-new__btn hero-new__btn--primary" to="/docs/morphology/nouns/cases-overview">
            Explore Cases
          </Link>
          <Link className="hero-new__btn hero-new__btn--secondary" to="/docs/quick-reference">
            Quick Reference
          </Link>
        </div>
      </div>
    </header>
  );
}

function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="stats-bar__container">
        <div className="stats-bar__item">
          <div className="stats-bar__number">38+</div>
          <div className="stats-bar__label">Cheatsheets</div>
        </div>
        <div className="stats-bar__item">
          <div className="stats-bar__number">7</div>
          <div className="stats-bar__label">Cases</div>
        </div>
        <div className="stats-bar__item">
          <div className="stats-bar__number">5</div>
          <div className="stats-bar__label">Verb Classes</div>
        </div>
        <div className="stats-bar__item">
          <div className="stats-bar__number">100%</div>
          <div className="stats-bar__label">Free</div>
        </div>
      </div>
    </section>
  );
}

function CaseGrid() {
  return (
    <section className="case-grid">
      <h2 className="case-grid__title">Master the 7 Cases</h2>
      <p className="case-grid__subtitle">Click any case to see complete declension tables and visual guides</p>
      <div className="case-grid__container">
        {cases.map((c) => (
          <Link key={c.num} className="case-grid__card" to={c.path}>
            <div className="case-grid__number">{c.num}</div>
            <div className="case-grid__name">{c.name}</div>
            <div className="case-grid__question">{c.question}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function PreviewSection() {
  return (
    <section className="preview-section">
      <h2 className="preview-section__title">See Grammar at a Glance</h2>
      <p className="preview-section__subtitle">Every concept visualized with beautiful, comprehensive diagrams</p>
      <img
        src="/img/seven-cases-overview.svg"
        alt="The 7 Czech Cases Overview"
        className="preview-section__image"
      />
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="features-new">
      <div className="features-new__container">
        {features.map((f, i) => (
          <div key={i} className="features-new__card">
            <div className="features-new__icon">{f.icon}</div>
            <h3 className="features-new__title">{f.title}</h3>
            <p className="features-new__desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="cta-section">
      <h2 className="cta-section__title">Part of the iLearnCzech Family</h2>
      <p className="cta-section__subtitle">
        Looking for lessons, exercises, and videos? Visit the main site.
      </p>
      <a href="https://ilearnczech.com" className="cta-section__link" target="_blank" rel="noopener noreferrer">
        Go to iLearnCzech.com →
      </a>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Visual Czech Grammar Reference"
      description="Master Czech grammar with 38+ beautiful visual cheatsheets. All 7 cases, verb conjugations, pronouns, and more. Free, comprehensive, and designed for visual learners.">
      <HeroSection />
      <StatsBar />
      <CaseGrid />
      <PreviewSection />
      <FeaturesSection />
      <CTASection />
    </Layout>
  );
}
