import React from 'react';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import configureStore from './store';

export default function ReduxProvider(Component: any) {
  let store = configureStore();
  let persistor = persistStore(store);
  return (props: any) => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...props} />
      </PersistGate>
    </Provider>
  );
};