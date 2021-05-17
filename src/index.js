import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './store/reducers/allReducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
  createFirestoreInstance,
  reduxFirestore,
  getFirestore,
} from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app';

const store = createStore(
  allReducers,
  compose(
    applyMiddleware(
      thunk.withExtraArgument({
        getFirebase,
        getFirestore,
      })
    ),
    reduxFirestore(fbConfig)
    // ReactReduxFirebaseProvider(fbConfig)
  )
);

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
