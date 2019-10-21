import React from 'react';
import { Text, View } from 'react-native';
import translator from 'src/i18n';

const ShouldApplicationUpdate: React.SFC = () => {
  return (
    <View>
      <Text>{translator.t('update.should.title')}</Text>
    </View>
  );
};

export default ShouldApplicationUpdate;
