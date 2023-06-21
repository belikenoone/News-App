import React from "react";
import Header from "./components/Header";
import Headlines from "./components/Headlines";
import News from "./components/News";
import { AppProvider } from "./store/context";

const App = () => {
  return (
    <AppProvider>
      <Header />
      <Headlines />
      <News />
    </AppProvider>
  );
};

export default App;
