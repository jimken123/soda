import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import DownloadBanner from './DownloadBanner';
import { SequenceVersion } from '@site/src/types/SequenceVersion';
import styles from './DownloadContent.module.css';
import VsCodeExtensionImageUrl from '@site/static/img/sequence-vscode-extension-example.gif';

const DloadPwsh = `Invoke-WebRequest -Uri '{downloadUri}' -OutFile '{fileName}'
Expand-Archive -Path '{fileName}' -DestinationPath './sequence'
cd './sequence'
./sequence steps`;

export default function DownloadContent({ latest }: { latest: SequenceVersion }) {
  const fileName = latest.download.split('/').slice(-1)[0];
  const pwsh = DloadPwsh.replace('{downloadUri}', latest.download).replace(
    /\{fileName\}/g,
    fileName
  );
  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <div className={clsx('row', styles.bannerRow)}>
            <DownloadBanner {...latest} />
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={clsx('container', styles.container)}>
          <h1>Download Using PowerShell</h1>
          <CodeBlock className={clsx(styles.code, 'shadow--md', 'language-powershell')}>
            {pwsh}
          </CodeBlock>
        </div>
      </section>
      <section className={styles.section}>
        <div className={clsx('container', styles.container)}>
          <h1>Visual Studio Code Extension</h1>
          <div className="row">
            <div className="col col--3">
              Now that you have sequence up and running, try the{' '}
              <Link to="https://marketplace.visualstudio.com/items?itemName=reductech.reductech-scl">
                VS Code extension
              </Link>
              .
            </div>
            <div className="col col--9">
              <img
                src={VsCodeExtensionImageUrl}
                alt="Sequence VS Code Extension Download Example"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
