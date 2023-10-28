import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import rootReducer from './store/reducer';
import {
  watchAuthentication,
  watchBooking,
  watchCustomer,
  watchLocation,
  watchProfile,
  watchReport,
  watchService,
  watchVehicle,
} from './store/sagas';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchAuthentication);
sagaMiddleware.run(watchProfile);
sagaMiddleware.run(watchVehicle);
sagaMiddleware.run(watchBooking);
sagaMiddleware.run(watchLocation);
sagaMiddleware.run(watchService);
sagaMiddleware.run(watchCustomer);
sagaMiddleware.run(watchReport);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
serviceWorker.register();
