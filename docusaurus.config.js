const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');
const versions = require('./versions.json');

const ConnectorLookup = {
  relativity: 'Relativity®',
  rest: 'REST',
  sql: 'SQL',
  structureddata: 'StructuredData',
  tsk: 'TSK',
};

function capitalizeCategoryNames(items) {
  return items.map((i) => {
    if (i.type === 'category') {
      if (ConnectorLookup[i.label]) {
        i.label = ConnectorLookup[i.label];
      } else {
        i.label = i.label.charAt(0).toUpperCase() + i.label.slice(1);
      }
    }
    return i;
  });
}

async function generateStepsSidebar({
  defaultSidebarItemsGenerator,
  numberPrefixParser,
  item,
  version,
  docs,
}) {
  const connectors = {};
  docs.forEach((doc) => {
    if (doc.sourceDirName === '.') return;
    const connector = doc.sourceDirName;
    if (!connectors[connector]) {
      const newCon = {
        type: 'category',
        label: connector,
        collapsible: true,
        collapsed: true,
        link: connector === 'Enums' ? null : { type: 'doc', id: connector },
        items: [],
      };
      connectors[connector] = newCon;
    }
    connectors[connector].items.push({ type: 'doc', id: doc.id });
  });
  return [{ type: 'doc', id: 'all' }].concat(
    Object.keys(connectors)
      .sort()
      .map((k) => connectors[k])
  );
}

function getNextVersionName() {
  const latest = versions[0];
  const split = latest.split('.');
  const next = `${split[0]}.${parseInt(split[1]) + 1}.${split[2]}-alpha 🚧`;
  return next;
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PhoenixSoda',
  tagline: 'Automate all the tings',
  url: 'https://jimken-mido.github.io/',
  baseUrl: '/soda/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'loremipsum',
  projectName: 'jimken-mido.github.io',
  organizationName: 'jimken-mido',
  trailingSlash: false,
  customFields: {
    homeTitle: 'End-to-end automation for forensics and ediscovery',
    description:
      'Flexible and powerful open-source automation toolkit for creating repeatable, predictable, and defensible end-to-end forensic and ediscovery workflows.',
    downloads: 'https://get.Phoenix.sh',
  },
  staticDirectories: ['static', 'playground'],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebarsDocs.js'),
          editUrl: 'https://gitlab.com/Phoenix/Phoenix-docs/edit/main',
          sidebarItemsGenerator: async function ({ defaultSidebarItemsGenerator, ...args }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return capitalizeCategoryNames(sidebarItems);
          },
          versions: {
            current: {
              label: getNextVersionName(),
            },
          },
        },
        blog: {
          path: 'blog',
          routeBasePath: 'blog',
          editUrl: 'https://github.com/jimken-mido/soda',
          postsPerPage: 10,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Reductech Ltd`,
          },
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'steps',
        path: 'steps',
        routeBasePath: 'steps',
        sidebarPath: require.resolve('./sidebarsSteps.js'),
        editUrl: 'https://github.com/jimken-mido/soda',
        sidebarItemsGenerator: generateStepsSidebar,
        versions: {
          current: {
            label: getNextVersionName(),
          },
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'Phoenix',
        logo: {
          alt: 'Phoenix Logo',
          src: 'img/phoenix.svg',
          srcDark: 'img/phoenix.svg',
        },
        hideOnScroll: false,
        items: [
          {
            type: 'docsVersion',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docsVersion',
            docsPluginId: 'steps',
            docId: 'all',
            position: 'left',
            label: 'Steps',
          },
          { to: 'blog', label: 'Blog', position: 'left' },
          {
            label: 'Download',
            href: '/download',
            position: 'right',
            className: 'button button-download button--primary button--lg',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://gitlab.com/Phoenix',
            position: 'right',
            className: 'header-gitlab-link',
            'aria-label': 'GitLab Repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Lorem',
            items: [
              {
                label: 'Ting',
                to: '/docs/quick-start#connectors',
              },
            ],
          },
          {
            title: 'Ipsum',
            items: [
              {
                label: 'Check out the Source Code',
                href: 'https://gitlab.com/Phoenix',
              },
            ],
          },
          {
            title: 'Dolor',
            items: [
              {
                label: 'Search',
                href: '/search',
              },
            ],
          },
        ],
        copyright: `Copyright ©${new Date().getFullYear()} LoremIpsum. Built with <a href="https://docusaurus.io" target="_blank" rel="noopener">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'csharp'],
      },
      algolia: {
        appId: 'CKHLUDXFLE',
        apiKey: 'eefd45babb6696e6fc0fe9943a9d631c',
        indexName: 'Phoenix-sh',
        contextualSearch: true,
      },
    }),
};

module.exports = config;
