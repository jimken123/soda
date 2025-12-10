import React from 'react';
import clsx from 'clsx';
import styles from './DownloadBanner.module.css';
import SvgWindows from '@site/static/img/icons/windows-svgrepo-com.svg';
import SvgLinux from '@site/static/img/icons/linux-svgrepo-com.svg';
import { SequenceVersion } from '@site/src/types/SequenceVersion';
import DownloadButton from './DownloadButton';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function DownloadBanner({
  version,
  platform,
  download,
  changelog,
}: SequenceVersion) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx('card', 'margin--lg', styles.banner)}>
      <div className={clsx('card__header', styles.header)}>
        <div className="container">
          <div className="row row--no-gutters">
            <div className="col col--6 col--offset-1">
              <h1 className={styles.title}>&nbsp;Latest release&nbsp;</h1>
            </div>
            <div className="col col--5">
              <h1 className={styles.version}>{'v' + version}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="card__body margin-top--sm margin-bottom--sm">
        <div className="row row--no-gutters">
          <div className={clsx('col col--6', styles.buttons)}>
            <DownloadButton link={download} text="Windows Download" icon={<SvgWindows />} />
          </div>
          <div className={clsx('col col--6', styles.buttons)}>
            <DownloadButton
              link="/docs/build-from-source"
              text="Build from Source"
              icon={<SvgLinux />}
            />
          </div>
        </div>
        <div className="row row--no-gutters margin-top--md">
          <div className={clsx('col col--6', styles.buttons)}>
            <Link to={siteConfig.customFields.downloads}>Previous Releases</Link>
          </div>
          <div className={clsx('col col--6', styles.buttons)}>
            <Link to={changelog}>View the Changelog</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
