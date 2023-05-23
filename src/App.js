import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import SectionA from "./component/SectionA/SectionA";
import SectionB from "./component/SectionB/SectionB";
import SectionC from "./component/SectionC/SectionC";
import SectionD from "./component/SectionD/SectionD";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element=<SectionD /> />
          <Route path="/home" element=<Home /> />
          <Route path="/task" element=<SectionA /> />
          <Route path="/showtask" element=<SectionB /> />
          <Route path="/update" element=<SectionC /> />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
