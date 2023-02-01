import React from "react";
import { Button } from "./components/Button";
import { Header } from "./components/Header";

import { Home } from "./pages/Home";

function App() {
  return (
    <div className="w-full h-screen">
      <Header/>
      <Home />
    </div>
  );
}

export default App;
