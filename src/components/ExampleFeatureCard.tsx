import React from 'react';
import clsx from 'clsx';
import styles from './ExampleFeatureCard.module.css';

export type FeatureCardDetails = {
  title: string;
  content: JSX.Element;
  icon: JSX.Element;
};

export default function FeatureCard({ title, content, icon }: FeatureCardDetails) {
  return (
    <div className={clsx('card', 'margin--sm')}>
      <div className={clsx('card__header', styles.header)}>
        <div className={styles.icon}>{icon}</div>
        <h3>{title}</h3>
      </div>
      <div className={clsx('card__body', 'padding-top--sm')}>{content}</div>
    </div>
  );
}
