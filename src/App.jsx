import React from "react";
import Child from "./Child";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Child />
      </Provider>
    </>
  );
}

export default App;
