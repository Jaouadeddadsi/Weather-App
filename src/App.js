import React from "react";
import { items } from "./static-data";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="app">
      <Weather item={items[0]} />
    </div>
  );
}

export default App;
