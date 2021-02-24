import React from "react";
import "./App.css";
import { ThemeLayout } from "./context";
import { Home } from "./pages";

function App() {
  return (
    <ThemeLayout>
      <div className="App">
        <Home />
      </div>
    </ThemeLayout>
  );
}

export default App;
