import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rooterReducer from "./components/reducers";

const store = createStore(
  rooterReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
const AppWithProvider = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(AppWithProvider, document.getElementById("root"));
