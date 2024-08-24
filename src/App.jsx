import React from "react";
import Headers from "./components/Headers";
// import Navbar2 from "./components/Navbar";
import Navbar from "./components/NavbarT";
import Home from "./components/home/Home";

const App = () => {
  return (
    <div>
      <Headers />
      <Navbar />

      <Home />
    </div>
  );
};

export default App;
