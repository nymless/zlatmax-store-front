import React from "react";
import ReactDOM from "react-dom/client";
import 'normalize.css';
import "./index.css";
import "swiper/css/bundle";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}
// todo: strict mode check
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);
