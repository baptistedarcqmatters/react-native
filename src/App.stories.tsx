import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, text } from '@storybook/addon-knobs';
import Text from 'ui/typo/text';

import createApp from './App';

const App = createApp();

const stories = storiesOf('App', module);

stories.add('default view', () => <App />);

stories.addDecorator(withKnobs);

stories.add('with knobs', () => {
  const dynamicValue = text('DynamicValue', 'Dynamic value');
  const content = `${dynamicValue} is a dynamic value, thanks to knobs addon.`;
  return <Text>{content}</Text>;
});
