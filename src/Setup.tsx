import * as React from 'react';
import Router from './Router';
import { useApplicationMustUpdate } from 'business/update/hooks';
import ForceApplicationUpdate from 'business/update/components/ForceUpdate';
import { ActivityIndicator } from 'react-native';

interface Props {}

const Setup: React.SFC<Props> = () => {
  const applicationMustUpdate = useApplicationMustUpdate();
  if (applicationMustUpdate === undefined) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return applicationMustUpdate ? <ForceApplicationUpdate /> : <Router />;
};

export { Setup };
