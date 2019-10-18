import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./business/HomeScreen";
import LoginScreen from "./business/user/components/LoginScreen";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export const MainNavigator = createSwitchNavigator(
  {
    Auth: LoginScreen,
    App: AppNavigator
  },
  { initialRouteName: "Auth" }
);

const Router = createAppContainer(MainNavigator);

export default Router;
