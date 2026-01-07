import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Visual Cheatsheets',
    Svg: require('@site/static/img/feature-visuals.svg').default,
    description: (
      <>
        Learn Czech grammar with beautiful, comprehensive visual diagrams.
        Every concept explained with clear, colorful cheatsheets you can reference anytime.
      </>
    ),
  },
  {
    title: 'All 7 Cases Covered',
    Svg: require('@site/static/img/feature-cases.svg').default,
    description: (
      <>
        Master the Czech case system with complete declension tables for nouns,
        adjectives, and pronouns. Includes prepositions and their required cases.
      </>
    ),
  },
  {
    title: 'Verb Conjugation',
    Svg: require('@site/static/img/feature-verbs.svg').default,
    description: (
      <>
        All conjugation classes, tenses, aspects, and moods. From present tense
        to conditionals, motion verbs to reflexives — everything explained clearly.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
