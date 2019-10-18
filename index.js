import { AppRegistry } from 'react-native';
import Config from 'react-native-config';
import { name as appName } from './app.json';
import createApp from './src/App';
import getStorybookUI from './storybook';

const RootComponent = Config.STORY_BOOK_APP ? getStorybookUI({}) : createApp();

AppRegistry.registerComponent(appName, () => RootComponent);
