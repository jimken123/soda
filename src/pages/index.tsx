import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import PhoenixLogoDark from '@site/static/img/phoenix.svg';
import PhoenixLogoLight from '@site/static/img/phoenix.svg';
import HomepageConnectors from '@site/src/components/HomepageConnectors';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();

  return (
    <header className={clsx('hero shadow--lw', styles.heroBanner)}>
      <div className="container">
        {colorMode === 'dark' ? (
          <PhoenixLogoDark name="Sequccence" className={styles.heroLogo} />
        ) : (
          <PhoenixLogoLight name="Phoenix" className={styles.heroLogo} />
        )}
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.heroButton)}
            to="/docs/quick-start"
          >
            Get Started
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
        <HomepageConnectors />
      </main>
    </Layout>
  );
}
