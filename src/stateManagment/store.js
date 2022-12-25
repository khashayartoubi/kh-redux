import {createStore, applyMiddleware} from 'redux';
import Reducers from './reducers';

//
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// logger
import logger from 'redux-logger';


// thunk
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage,
  }
   
const persistedReducer = persistReducer(persistConfig, Reducers)
  
export const store = createStore(persistedReducer,applyMiddleware(thunk, logger));
export const persistor = persistStore(store)
