import React from 'react';
import styles from './HomepageConnectors.module.css';
import ConnectorCard, { ConnectorDetails } from './ConnectorCard';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

const Connectors: ConnectorDetails[] = [
  {
    name: 'User',
    image: '/img/connectors/autopsy.png',
    link: 'docs/connectors/tsk',
  },
  {
    name: 'Tenant',
    image: '/img/connectors/concordance.svg',
    link: 'docs/connectors/structureddata',
    useTheme: true,
  },
  {
    name: 'Service Operator',
    image: '/img/connectors/postgresql.svg',
    link: 'docs/connectors/sql',
  },
];

export default function HomepageConnectors() {
  return (
    <div id="Phoenix-connectors" className="container margin-bottom--xl">
      <div className={styles.header}>
        <h1>Lorem Ipsum</h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
