import * as React from "react";
import Router from "./Router";

interface Props {}

const App: React.SFC<Props> = () => <Router />;

function createApp() {
  return App;
}

export default createApp;
