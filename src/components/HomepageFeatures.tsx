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
  {
    title: 'ETL Simplified',
    image: '/img/features/undraw_active_options_re_8rj3.svg',
    description: (
      <>
        Sequence empowers users to create multi-application extract-transform-load workflows with a
        single configuration. Technicians no longer need to learn multiple scripting or programming
        languages, or trawl through API documentation for the applications they want to automate.
      </>
    ),
  },
  {
    title: 'Data Driven',
    image: '/img/features/undraw_data_processing_yrrv.svg',
    description: (
      <>
        Automating forensic and ediscovery workflows is all about wrangling data between systems.
        Sequence makes it easy with entities and schemas. Use schemas to define what your data
        should look like once (and even get help to do that), and let Sequence handle the rest.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    image: '/img/features/undraw_project_completed_re_pqqq.svg',
    description: (
      <>
        Automate applications using the Sequence Configuration Language, simple and intuitive to
        pick up, yet powerful enough to automate complex workflows. We took YAML as a baseline and
        supercharged it with features from popular programming languages.
      </>
    ),
  },
  {
    title: 'Extensible',
    image: '/img/features/undraw_data_extraction_re_0rd3.svg',
    description: (
      <>
        Use the existing connector ecosystem with steps for popular data formats and
        forensic/ediscovery applications, automatically generate steps from any OpenAPI endpoint
        using the REST connector, or if that's not enough, build your own connectors for any
        application using the Sequence Core SDK.
      </>
    ),
    offset: FeatureWidth / 2,
  },
  {
    title: 'Defensible',
    image: '/img/features/undraw_version_control_re_mg66.svg',
    description: (
      <>
        Make your workflows predictable and repeatable through automation. Enhance your ability to
        maintain chain of custody by standardising and version controlling workflows. Improve
        auditability with an extensive set of logging providers that can log to file, database, or
        the Elastic stack.
      </>
    ),
  },
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
