import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Reducers from './reducers';


const configureStore = () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['alerta']
  };
  const persistedReducer = persistReducer( persistConfig, Reducers );
  let store = createStore(persistedReducer, applyMiddleware(thunk));
  return store;
};

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