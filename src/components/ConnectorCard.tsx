import React from 'react';
import styles from './ConnectorCard.module.css';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';

export type ConnectorDetails = {
  name: string;
  image: string;
  link: string;
  imageDark?: string;
  useTheme?: boolean;
};

export default function ConnectorCard(connector: ConnectorDetails): JSX.Element {
  const { colorMode } = useColorMode();

  const imagePath =
    colorMode === 'dark' && connector.imageDark != null ? connector.imageDark : connector.image;

  const ext = imagePath.split('.').pop().toLowerCase();

  let image =
    connector.useTheme && ext === 'svg' ? (
      <svg>
        <use href={imagePath + '#icon'} width={64} height={64}></use>
      </svg>
    ) : (
      <img src={imagePath} alt={connector.name} />
    );

  return (
    <div className={styles.card}>
      <Link to={connector.link}>
        <div className={styles.content}>
          <div className={styles.icon}>{image}</div>
          <div className={styles.description}>
            <h4>{connector.name}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
}
