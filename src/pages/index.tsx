import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import SequenceLogoDark from '@site/static/img/sequence_dark_opt.svg';
import SequenceLogoLight from '@site/static/img/sequence_light_opt.svg';
import HomepageConnectors from '@site/src/components/HomepageConnectors';
import HomepageExamples from '@site/src/components/HomepageExamples';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();

  return (
    <header className={clsx('hero shadow--lw', styles.heroBanner)}>
      <div className="container">
        {colorMode === 'dark' ? (
          <SequenceLogoDark name="Sequence" className={styles.heroLogo} />
        ) : (
          <SequenceLogoLight name="Sequence" className={styles.heroLogo} />
        )}
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.heroButton)}
            to="/docs/quick-start"
          >
            Get Started &gt;&gt;&gt; 5min ⏱️
          </Link>
          <Link
            className={clsx(
              'button button--primary button--lg',
              styles.heroButton,
              styles.tryButton
            )}
            to="/playground"
          >
            Try Now on the Playground
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.customFields.homeTitle}`}
      description={`${siteConfig.customFields.description}`}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageExamples />
        <HomepageConnectors />
      </main>
    </Layout>
  );
}
