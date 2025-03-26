import React from "react";
import Layout from "./layouts/Layout";
import { ContextProvider } from "./context/ContextProvider";

const App = () => {
  return (
    <div>
      <ContextProvider>
        <Layout />
      </ContextProvider>
    </div>
  );
};

export default App;
