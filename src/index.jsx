import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import moment from 'moment';
import 'moment/locale/pt-br';

import store from './Store';
import GlobalContextProvider from './GlobalContext';
import ConfigureRoute from './Routes';

moment.locale('pt_BR');

ReactDOM.render(
  <Provider store={store()}>
    <GlobalContextProvider>
      <ConfigureRoute />
    </GlobalContextProvider>
  </Provider>,
  document.getElementById('root')
);
