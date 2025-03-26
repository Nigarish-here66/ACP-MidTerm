import React from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Message from "./components/Message";
const App = () => {
  return (
    <div>
      <Heading />
      <Counter />
      <Message />
    </div>
  );
};

export default App;