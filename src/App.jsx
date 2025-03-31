import React from "react";
import store from "./store/store";
import Layout from "./layouts/Layout";
import { Provider } from "react-redux";
import { ContextProvider } from "./context/ContextProvider";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <ContextProvider>
          <Layout />
        </ContextProvider>
      </Provider>
    </div>
  );
};

export default App;
