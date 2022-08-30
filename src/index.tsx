import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import './index.css';
import 'swiper/css/bundle';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./msw/browser');
  worker.start();
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CookiesProvider>
    </Provider>
  </React.StrictMode>,
);
