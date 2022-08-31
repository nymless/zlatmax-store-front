import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import 'swiper/css/bundle';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

// todo: for GitHub Pages use. Remove for production.
import { HashRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

// todo: for GitHub Pages use. Remove for production.
const url =
  process.env.NODE_ENV === 'development'
    ? './mockServiceWorker.js'
    : '/zlatmax-store-front/mockServiceWorker.js';
const { worker } = require('./msw/browser');
worker.start({
  waitUntilReady: true,
  onUnhandledRequest: 'bypass',
  serviceWorker: {
    url,
  },
});
// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('./msw/browser');
//   worker.start({
//     waitUntilReady: true,
//     onUnhandledRequest: "bypass",
//   });
// }

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
