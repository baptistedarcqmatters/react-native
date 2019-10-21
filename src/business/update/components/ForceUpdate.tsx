import React from 'react';
import Layout from 'ui/layout';
import { Text } from 'react-native';
import translator from 'src/i18n';

const ForceApplicationUpdate: React.SFC = () => {
  return (
    <Layout.Page>
      <Text>{translator.t('update.force.title')}</Text>
    </Layout.Page>
  );
};

export default ForceApplicationUpdate;
