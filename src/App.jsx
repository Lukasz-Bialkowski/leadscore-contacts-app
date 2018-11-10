import React from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import Layout from "./Layout";
import Routes from "./_routes";

const App = () => (
  <Layout>
    <Routes />
  </Layout>
);

export default compose(withRouter)(App);
