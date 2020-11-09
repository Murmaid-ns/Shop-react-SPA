import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';


import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'
import getStore from "./redux/store";

const { store, persistor } = getStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
