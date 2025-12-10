import React from 'react';
import Link from '@docusaurus/Link';
import styles from './DownloadButton.module.css';

export default function DownloadButton({
  link,
  text,
  icon,
}: {
  link: string;
  text: string;
  icon: JSX.Element;
}) {
  return (
    <div className={styles.card}>
      <Link to={link}>
        <div className={styles.content}>
          <div className={styles.icon}>{icon}</div>
          <div className={styles.description}>
            <h4>{text}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
}
