import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './download.module.css';
import { SequenceVersion } from '@site/src/types/SequenceVersion';
import DownloadContent from '@site/src/components/DownloadContent';
import Link from '@docusaurus/Link';

export default function Download(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const [versionState, setVersionState] = useState<{
    versions?: SequenceVersion[];
    done: boolean;
    error?: string;
  }>({ done: false });

  const getSequenceVersions = () => {
    fetch('https://get.sequence.sh/sequence.json')
      .then((res) => res.json())
      .then((json) => setVersionState({ versions: json, done: true }))
      .catch((err) => {
        console.error(err);
        setVersionState({ done: true, error: err.message });
      });
  };

  useEffect(() => {
    getSequenceVersions();
  }, []);

  let content: JSX.Element;

  if (!versionState.done) {
    content = <div className={styles.loading}>Loading....</div>;
  } else if (versionState.error != null) {
    content = (
      <div className={styles.error}>
        <h3>Sorry, an error has occured whilst fetching the latest version.</h3>
        <h4 className={styles.errorMessage}>{versionState.error}</h4>
        <h4>
          <Link to="https://gitlab.com/sequence/sequence-docs">
            Please submit an issue in GitLab.
          </Link>
        </h4>
      </div>
    );
  } else {
    content = <DownloadContent latest={versionState.versions[0]} />;
  }

  return (
    <Layout
      title="Download Sequence, the forensic and ediscovery automation toolkit"
      description={`${siteConfig.customFields.description}`}
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Download Sequence</h1>
          <p className="hero__subtitle">
            And start automating your forensic and ediscovery workflows today...
          </p>
        </div>
      </header>
      {content}
    </Layout>
  );
}
