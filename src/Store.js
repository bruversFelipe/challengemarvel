import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './Redux';
import sagas from './Sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(sagas);

  return store;
}
