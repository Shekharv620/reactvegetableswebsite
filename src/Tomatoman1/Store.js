// import VegetableReducer from './Reducer';

// import { createStore, combineReducers } from 'redux'

// const rootReducer = combineReducers({
//     VegetableReducer: VegetableReducer
//   })

// const Store = createStore(rootReducer);

// export default Store;

import { createStore,combineReducers,applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
 
import logger from 'redux-logger'

import {VegetableReducer,totalReducer} from './Reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['VegetableReducer','totalReducer']
}
const rootReducer = combineReducers({
    VegetableReducer: VegetableReducer,
    totalReducer: totalReducer
  })
const persistedReducer = persistReducer(persistConfig, rootReducer,applyMiddleware(logger))
export const  store = createStore(persistedReducer)
export const  persistor = persistStore(store)
export  default {store, persistor}