import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeaturesPerRow = 3;
const FeatureWidth = 4;

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
  offset?: number;
};

const FeatureList: FeatureItem[] = [

];

function Feature({ title, image, description, offset }: FeatureItem) {
  return (
    <div
      className={clsx('col', `col--${FeatureWidth}`, offset == null ? '' : `col--offset-${offset}`)}
    >
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  let rows = [[]];
  let current = 0;

  FeatureList.reduce((acc, obj, idx) => {
    if (idx > 0 && idx % FeaturesPerRow === 0) {
      acc[++current] = [];
    }
    acc[current].push(obj);
    return acc;
  }, rows);

  return (
    <section className={styles.features}>
      <div className="container">
        {rows.map((row, rowNum) => (
          <div className={clsx('row margin-bottom--lg', styles.feature)} key={rowNum}>
            {row.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
