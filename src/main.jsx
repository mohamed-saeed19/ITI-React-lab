import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App.jsx";
import "./index.css";
import CounterContextProvider from "./context/CounterContext.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterContextProvider>
        <App />
      </CounterContextProvider>
    </Provider>
  </React.StrictMode>
);
