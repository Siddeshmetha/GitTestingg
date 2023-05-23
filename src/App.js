import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import SectionA from "./component/SectionA/SectionA";
import SectionB from "./component/SectionB/SectionB";
import SectionC from "./component/SectionC/SectionC";
import SectionD from "./component/SectionD/SectionD";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./component/SectionA/Add";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element=<SectionD /> />
          <Route path="/home" element=<Home /> />
          <Route path="/add" element=<Add /> />
          <Route path="/task" element=<SectionA /> />
          <Route path="/showtask" element=<SectionB /> />
          <Route path="/update" element=<SectionC /> />
        </Routes>
      </Router>
    </>
  );
}

export default App;
