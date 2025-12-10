import React, { useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './playground.module.css';
import Link from '@docusaurus/Link';
import useLocalStorage from '../hooks/useLocalStorage';
import IframeResizer from 'iframe-resizer-react';

const PlaygroundFrame = () => {
  const { colorMode } = useColorMode();
  const initDarkMode = useRef(colorMode === 'dark');

  useEffect(() => {
    const frame = document.querySelector('.playground-iframe') as HTMLIFrameElement;
    if (frame) {
      const window = frame.contentWindow as any;
      if (window.setDarkMode) {
        window.setDarkMode(colorMode === 'dark');
      }
    }
  }, [colorMode]);

  return (
    <div style={{ width: '96%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}>
      <IframeResizer
        className="playground-iframe"
        src={`/playground-react.html?darkMode=${initDarkMode.current}`}
        style={{ height: '100%', width: '100%' }}
        heightCalculationMethod="max"
      />
    </div>
  );
};

export default function Playground(): JSX.Element {
  const [accepted, setAccepted] = useLocalStorage<boolean>('playground-accepted', false);

  return (
    <Layout
      title="Sequence Configuration Language Playground"
      description="Try out Sequence, SCL, the file system and structured data connectors in your browser!"
    >
      {accepted ? (
        <PlaygroundFrame />
      ) : (
        <div className="container margin-bottom--xl margin-top--xl">
          <div className={clsx('row', styles.bannerRow)}>
            <div className={clsx('card', 'padding--lg', styles.banner)}>
              <div className={clsx('card__header', 'padding-top--none', styles.header)}>
                <h1>Sequence Configuration Language Playground</h1>
              </div>

              <div className="card__body margin-top--md margin-bottom--sm">
                <div className="row">
                  <h4>
                    The playground uses experimental technology to run C# in your browser. It is a
                    great way to play around with SCL, but has performance and stability
                    implications. Only the{' '}
                    <Link to="/docs/connectors/structureddata">Structured Data</Link> and{' '}
                    <Link to="/docs/connectors/filesystem">File System</Link> connectors are
                    available. It is not the same as <Link to="/download">downloading</Link>{' '}
                    Sequence.
                  </h4>
                  <h4>
                    Once the{' '}
                    <a
                      href="https://docs.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-6.0#blazor-webassembly"
                      target="_blank"
                      rel="noopener"
                    >
                      Blazor WASM
                    </a>{' '}
                    runtime and the Sequence components download (~100MB), everything runs in your
                    browser. The browser cache is used for file and settings storage. No data leaves
                    your computer.
                  </h4>
                  <h4>
                    Open tabs do not persist when navigating away from this page or when changing
                    between dark and light modes. There is an option to save tabs and saved files
                    persist as long as the browser cache for the Sequence website does.
                  </h4>
                  <h4>
                    For more information please have a look at the{' '}
                    <a href="https://gitlab.com/sequence/scl-editor" target="_blank" rel="noopener">
                      scl-editor
                    </a>{' '}
                    project.
                  </h4>
                </div>
                <div className={clsx('row', styles.buttonRow)}>
                  <div className="col margin-top--md">
                    <button
                      className={clsx('button button--success', styles.buttonYes)}
                      onClick={() => setAccepted(true)}
                    >
                      Experimental is my middle name. Go!
                    </button>
                  </div>
                  <div className="col margin-top--md">
                    <Link to="/download" className={clsx('button button--danger', styles.buttonNo)}>
                      I think I'd rather download it.
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
