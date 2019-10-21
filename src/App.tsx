import { UpdateProvider } from 'business/update/provider';
import * as React from 'react';
import { Setup } from './Setup';

interface Props {}

const App: React.SFC<Props> = () => {
  return (
    <UpdateProvider>
      <Setup />
    </UpdateProvider>
  );
};

function createApp() {
  return App;
}

export default createApp;
