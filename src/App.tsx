import React from "react";
import { ThemeLayout } from "./context";
import { Home } from "./pages";
import { Navbar } from "./containers";

function App() {
  return (
    <ThemeLayout>
      <Navbar />
      <Home />
    </ThemeLayout>
  );
}

export default App;
