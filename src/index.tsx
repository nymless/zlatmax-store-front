import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import 'swiper/css/bundle';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, HashRouter } from 'react-router-dom';

// FIXME: Если ключь валидации просрочен на момент авторизии, сделать чтобы MSW создавал и высылал новый.
// FIXME: В режиме BrowserRouter, если открыта не первая страница, то перезагрузка вызывает ошибку.

const Router =
  process.env.REACT_APP_DEPLOY_ENV === 'gh-pages' ? HashRouter : BrowserRouter;

if (process.env.REACT_APP_MODE_ENV === 'msw') {
  const url =
    process.env.REACT_APP_DEPLOY_ENV === 'gh-pages'
      ? '/zlatmax-store-front/mockServiceWorker.js'
      : './mockServiceWorker.js';
  const { worker } = require('./msw/browser');
  worker.start({
    waitUntilReady: true,
    onUnhandledRequest: 'bypass',
    serviceWorker: {
      url,
    },
  });
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <Router>
          <App />
        </Router>
      </CookiesProvider>
    </Provider>
  </React.StrictMode>
);
