import React, { useCallback } from "react";
import { NavigationScreenProps } from "react-navigation";
import translator from "src/i18n";
import Button from "ui/buttons";
import Layout from "ui/layout";

interface Props extends NavigationScreenProps {}

const LoginScreen: React.SFC<Props> = ({ navigation }) => {
  const requestLogin = useCallback(() => {
    navigation.navigate("Home");
  }, []);

  return (
    <Layout.Page>
      <Button.Primary
        label={translator.t("login.cta")}
        onPress={requestLogin}
      />
    </Layout.Page>
  );
};

export default LoginScreen;
