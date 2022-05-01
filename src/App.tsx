import React from "react";
import "./App.css";
import Header from "./Header";

import Main from "./Main";

function App() {
  return (
    <div>
      <div className="headerDesktop">
        <Header />
      </div>
      <Main />
    </div>
  );
}

export default App;
