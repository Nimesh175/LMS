import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, createTransform } from "redux-persist";
import rootReducer from '../reducers/index';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
     key: 'root',
     storage : AsyncStorage,



 };
 
 const middleWares = [thunk];
 const enhancer = applyMiddleware(...middleWares);
 const persistedReducer = persistReducer(persistConfig, rootReducer);
 
 const store = createStore(
   persistedReducer,
   enhancer
 )
 
 let persistor = persistStore(store);
 
 export {
     store,
     persistor,
 };
 