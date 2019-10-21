import { UpdateContext } from './context';
import { useContext } from 'react';
import compareVersions from 'compare-versions';
import { version as currentApplicationVersion } from '../../../package.json';

const useApplicationMustUpdate = () => {
  const { mustUpdate } = useContext(UpdateContext);

  if (mustUpdate === null) {
    return undefined;
  }
  return compareVersions.compare(mustUpdate, currentApplicationVersion, '>');
};

const useApplicationShouldUpdate = () => {
  const { shouldUpdate } = useContext(UpdateContext);

  if (shouldUpdate === null) {
    return false;
  }
  return compareVersions.compare(shouldUpdate, currentApplicationVersion, '>');
};

export { useApplicationMustUpdate, useApplicationShouldUpdate };
