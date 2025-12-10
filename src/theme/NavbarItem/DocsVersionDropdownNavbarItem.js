import React from 'react';
import { useVersions, useActiveDocContext } from '@docusaurus/plugin-content-docs/client';
import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import { useDocsVersionCandidates } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import { useLocation } from '@docusaurus/router';

const getVersionMainDoc = (version) => version.docs.find((doc) => doc.id === version.mainDocId);

export default function DocsVersionDropdownNavbarItem({
  mobile,
  docsPluginId,
  dropdownActiveClassDisabled,
  dropdownItemsBefore,
  dropdownItemsAfter,
  ...props
}) {
  // Use the path to select the plugin id
  // Hack to use the same version dropdown for both docs and steps
  const { pathname } = useLocation();
  const pathmatch = pathname.match(/^\/(.+?)\//);
  if (pathmatch != null && pathmatch.length > 1 && pathmatch[1] === 'steps') {
    docsPluginId = 'steps';
  }

  const activeDocContext = useActiveDocContext(docsPluginId);
  const versions = useVersions(docsPluginId);
  // onClick, set the preferred version for both steps and default docs
  const { savePreferredVersionName: savePreferredVersionNameDefault } = useDocsPreferredVersion();
  const { savePreferredVersionName: savePreferredVersionNameSteps } =
    useDocsPreferredVersion('steps');

  const versionLinks = versions.map((version) => {
    // We try to link to the same doc, in another version
    // When not possible, fallback to the "main doc" of the version
    const versionDoc =
      activeDocContext.alternateDocVersions[version.name] ?? getVersionMainDoc(version);
    return {
      label: version.label,
      to: versionDoc.path,
      isActive: () => version === activeDocContext.activeVersion,
      onClick: () => {
        savePreferredVersionNameDefault(version.name);
        savePreferredVersionNameSteps(version.name);
      },
    };
  });
  const items = [...dropdownItemsBefore, ...versionLinks, ...dropdownItemsAfter];
  const dropdownVersion = useDocsVersionCandidates(docsPluginId)[0];
  // Mobile dropdown is handled a bit differently
  const dropdownLabel =
    mobile && items.length > 1
      ? translate({
          id: 'theme.navbar.mobileVersionsDropdown.label',
          message: 'Versions',
          description: 'The label for the navbar versions dropdown on mobile view',
        })
      : dropdownVersion.label;
  const dropdownTo =
    mobile && items.length > 1 ? undefined : getVersionMainDoc(dropdownVersion).path;
  // We don't want to render a version dropdown with 0 or 1 item. If we build
  // the site with a single docs version (onlyIncludeVersions: ['1.0.0']),
  // We'd rather render a button instead of a dropdown

  if (items.length <= 1) {
    return (
      <DefaultNavbarItem
        {...props}
        mobile={mobile}
        label={dropdownLabel}
        to={dropdownTo}
        isActive={dropdownActiveClassDisabled ? () => false : undefined}
      />
    );
  }

  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={dropdownLabel}
      to={dropdownTo}
      items={items}
      isActive={dropdownActiveClassDisabled ? () => false : undefined}
    />
  );
}
