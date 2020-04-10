import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import Reducers from './reducers';

const configureStore = () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['alerta']
  };
  const persistedReducer = persistReducer( persistConfig, Reducers );
  let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
  return store;
};

export default configureStore;