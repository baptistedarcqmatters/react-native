import React, { useCallback } from 'react';
import { NavigationScreenProps } from 'react-navigation';
import translator from 'src/i18n';
import Button from 'ui/buttons';
import Layout from 'ui/layout';
import Text from 'ui/typo/text';

interface Props extends NavigationScreenProps {}

const LoginScreen: React.SFC<Props> = ({ navigation }) => {
  const requestLogin = useCallback(() => {
    navigation.navigate('Home');
  }, []);

  return (
    <Layout.Page>
      <Button.Primary
        label={translator.t('login.cta')}
        onPress={requestLogin}
      />
      <Text style={{ color: '#FF6600' }}>Tu dis plus rien la</Text>
    </Layout.Page>
  );
};

export default LoginScreen;
