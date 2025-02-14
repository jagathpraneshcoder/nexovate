import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Landing from "./components/Landing";
import Workshops from "./components/Workshop";
function App() {
  return (
    <div>
      <Landing />
      <Workshops/>
    </div>
  );
}

export default App;
