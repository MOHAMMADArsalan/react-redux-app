import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { AppContainer } from 'react-hot-loader';

import { store } from "./store"

import Routers from "./config/routes"

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Routers);

if (module.hot) {
  module.hot.accept('./config/routes', () => {
    const newApp = require('./config/routes').default;
    render(newApp);
  });
}
