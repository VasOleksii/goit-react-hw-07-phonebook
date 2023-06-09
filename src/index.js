import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/APP/App';
import './index.css';
import { Provider } from 'react-redux/es';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
