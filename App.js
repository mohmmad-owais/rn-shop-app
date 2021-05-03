import React, { useState } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import productReducer from "./store/reducers/products";
import ShopNavigator from "./navigation/ShopNavigator";

import * as firebase from 'firebase';
import apiKeys from './config/key';

const rootReducer = combineReducers({
  products: productReducer,
});

const store = createStore(rootReducer);



export default function App() {

  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(apiKeys.firebaseConfig);
  }
    return (
      <Provider store={store}>
        <ShopNavigator />
      </Provider>
    ); 

   
  
}
