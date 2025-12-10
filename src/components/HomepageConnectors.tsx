import React from 'react';
import styles from './HomepageConnectors.module.css';
import ConnectorCard, { ConnectorDetails } from './ConnectorCard';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

const Connectors: ConnectorDetails[] = [
  {
    name: 'Autopsy / TSK®',
    image: '/img/connectors/autopsy.png',
    link: 'docs/connectors/tsk',
  },
  {
    name: 'Brainspace',
    image: '/img/connectors/brainspace.png',
    link: 'docs/connectors/rest',
  },
  {
    name: 'Concordance / Loadfile',
    image: '/img/connectors/concordance.svg',
    link: 'docs/connectors/structureddata',
    useTheme: true,
  },
  {
    name: 'CSV / Delimited',
    image: '/img/connectors/csv-svgrepo-com.svg',
    link: 'docs/connectors/structureddata',
    useTheme: true,
  },
  {
    name: 'IDX',
    image: '/img/connectors/idx-files.svg',
    link: 'docs/connectors/structureddata',
    useTheme: true,
  },
  {
    name: 'JSON',
    image: '/img/connectors/json-svgrepo-com.svg',
    link: 'docs/connectors/structureddata',
    useTheme: true,
  },
  {
    name: 'MariaDB',
    image: '/img/connectors/mariadb_light.svg',
    imageDark: '/img/connectors/mariadb_dark.svg',
    link: 'docs/connectors/sql',
  },
  {
    name: 'Microsoft 365',
    image: '/img/connectors/microsoft365.png',
    link: 'docs/connectors/microsoft365',
  },
  {
    name: 'MySQL',
    image: '/img/connectors/mysql-logo.svg',
    link: 'docs/connectors/sql',
  },
  {
    name: 'Nuix',
    image: '/img/connectors/nuix_light.png',
    imageDark: '/img/connectors/nuix_dark.png',
    link: 'docs/connectors/nuix',
  },
  {
    name: 'PostgreSQL',
    image: '/img/connectors/postgresql.svg',
    link: 'docs/connectors/sql',
  },
  {
    name: 'PowerShell',
    image: '/img/connectors/powershell.png',
    link: 'docs/connectors/powershell',
  },
  {
    name: 'Relativity',
    image: '/img/connectors/relativity_light.png',
    imageDark: '/img/connectors/relativity_dark.png',
    link: 'docs/connectors/relativity',
  },
  {
    name: 'REST',
    image: '/img/connectors/rest.svg',
    link: 'docs/connectors/rest',
    useTheme: true,
  },
  {
    name: 'Reveal',
    image: '/img/connectors/reveal.png',
    link: 'docs/connectors/rest',
  },
  {
    name: 'Singer',
    image: '/img/connectors/singer.svg',
    link: 'docs/connectors/singer',
    useTheme: true,
  },
  {
    name: 'SQL Server',
    image: '/img/connectors/sql-server_solid.png',
    link: 'docs/connectors/sql',
  },
  {
    name: 'Tesseract OCR',
    image: '/img/connectors/tesseract-ocr_solid.png',
    link: 'docs/connectors/tesseract',
  },
];

export default function HomepageConnectors() {
  return (
    <div id="sequence-connectors" className="container margin-bottom--xl">
      <div className={styles.header}>
        <h1>Sequence Connectors</h1>
        <h4>
          Automate applications using our extensive connector ecosystem...{' '}
          <Link to="docs/developers-guide">or build your own</Link>.
        </h4>
      </div>
      <div className={clsx(styles.content, 'text--center')}>
        {Connectors.map((props, idx) => (
          <ConnectorCard key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}
