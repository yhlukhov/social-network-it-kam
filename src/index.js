import "./index.css";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StoreContext from "./StoreContext";

export const renderEntireTree = (state) => {
  
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
      <App
        store={store}
        state={state}
        dispatch={store.dispatch.bind(store)}
      />
      </StoreContext.Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());

store.subscribe(()=> {
  renderEntireTree(store.getState())
});
