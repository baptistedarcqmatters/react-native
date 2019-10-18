import React from 'react';
import translator from 'src/i18n';
import Layout from 'ui/layout';
import Text from 'ui/typo/text';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {}

const HomeScreen: React.SFC<Props> = () => {
  return (
    <Layout.Page>
      <Icon name="rocket" size={30} color="#900" />
      <Text>{translator.t('home.title')}</Text>
    </Layout.Page>
  );
};

export default HomeScreen;
