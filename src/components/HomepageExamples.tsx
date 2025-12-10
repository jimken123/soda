import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './HomepageExamples.module.css';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';

import FeatureCard, { FeatureCardDetails } from './ExampleFeatureCard';

import SvgBricks from '@site/static/img/icons/bricks-2d-svgrepo-com.svg';
import SvgBrickSingle from '@site/static/img/icons/bricks-single-2d-svgrepo-com.svg';
import SvgConnectors from '@site/static/img/icons/connected-ecosystem-svgrepo-com.svg';
import SvgToolBox from '@site/static/img/icons/toolbox-svgrepo-com.svg';

const Cards: FeatureCardDetails[] = [
  {
    title: 'Step',
    content: (
      <>
        A unit of work. An action in an application or a control flow statement.{' '}
        <Link to="steps/all">See all available steps.</Link>
      </>
    ),
    icon: <SvgBrickSingle height={36} width={36} />,
  },
  {
    title: 'Sequence',
    content: (
      <>
        One or more steps executed in order.{' '}
        <Link to="docs/examples/connectors/structureddata/csv-files">An example.</Link>
      </>
    ),
    icon: <SvgBricks height={48} width={48} />,
  },
  {
    title: 'Connector',
    content: (
      <>
        A collection of steps that execute actions in an application or within a specific domain.{' '}
        <Link to="#sequence-connectors">See available connectors.</Link>
      </>
    ),
    icon: <SvgConnectors height={48} width={48} />,
  },
  // {
  //   title: 'SDK',
  //   content: (
  //     <>
  //       Sequence is a software development kit for building steps and connectors for any
  //       application. <Link to="docs/developers-guide">See available connectors here.</Link>
  //     </>
  //   ),
  //   icon: <SvgToolBox />,
  // },
];

const Tabs = {
  Intro: `# A sequence to remove duplicate rows from a CSV file
#
# SCL steps start with a '-' or a '|'.
# | means take the output from the previous step
# as input to the next step

- ReadFromFile Path: 'C:/data.csv'
| ConvertCSVToEntity
| RemoveDuplicates
| ConvertEntityToCSV
| WriteToFile Path: 'C:/data-distinct.csv'
`,

  Autopsy: `# Create a new Autopsy case and ingest data

- <CasePath> = 'c:\\cases\\MyNewCase'

- AutopsyCreateNewCase
    CaseName: 'MyNewCase'
    CaseBaseDirectory: <CasePath>
    DataSourcePath: (
      PathCombine ['c:\\data', 'loadfile_0001-10001.dat']
    )
    IngestProfileName: '' #Use Default Profile`,

  REST: `# The REST connector automatically generates steps from an
# OpenAPI endpoint or JSON spec saved in a file.
# Endpoints can be configured in connectors.json.
# It's also possible to configure aliases for the generated
# parameters and steps.
# 
# This example uses the Reveal API to retrieve case
# statistics.

- <CaseId> = 123

- <Login> = Reveal_Login_Get
              username: 'username'
              password: 'password'

- <Stats> = Reveal_Cases_GetCaseStatistics
              InControlAuthToken: <Login>["LoginSessionId"]
              Body: (CaseId: <CaseId> LatestOnly: true)

- Print <Stats>`,

  Schemas: `# Schemas allow data to be validated and transformed.
# Schemas can be automatically generated from a data stream.
# 
# This example creates a new table using a schema and inserts
# the two entities into it.

- <Entities> = [
    (Id: 0 Name: "Mark" Number: 3.14 Date: 1970-01-06T00:00:00)
    (Id: 1 Name: "Antony" Number: 5 Date: 1970-02-06T00:00:00)
  ]

- <ConnStr> = (
    CreateMsSQLConnectionString
      Server: 'sqlserver'
      Database: 'TestDb'
      Username: 'sa'
      Password: 'VerySecure'
  )

- <TableSchema> = CreateSchema From: <Entities> Name: 'MyTable'
- SqlCreateTable Schema: <TableSchema> Connection: <ConnStr>
- SqlInsert Schema: <TableSchema> Entities: <Entities>`,
};

const DefaultTab = 'Intro';

export default function HomepageExamples(): JSX.Element {
  const [activeTab, setActiveTab] = useState(DefaultTab);

  return (
    <div className="container margin-bottom--xl margin-top--xl">
      <div className="row">
        <div className={styles.header}>
          <h1>Sequence Configuration Language</h1>
        </div>
      </div>
      <div className={clsx(styles.content, 'row')}>
        <div className="col col--3 col--offset-1">
          {Cards.map((card, idx) => (
            <FeatureCard key={idx} {...card} />
          ))}
        </div>
        <div className="col col--8">
          <div className="text--center">
            <ul className="tabs">
              {Object.keys(Tabs).map((name, idx) => (
                <li
                  key={idx}
                  className={clsx('tabs__item', activeTab === name ? 'tabs__item--active' : '')}
                  onClick={() => setActiveTab(name)}
                >
                  {name}
                </li>
              ))}
            </ul>
            <div className="text--left">
              <CodeBlock className={clsx(styles.code, 'shadow--md', 'language-scl')}>
                {Tabs[activeTab]}
              </CodeBlock>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
