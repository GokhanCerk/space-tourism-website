import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home";

import Destination from "./pages/destination";
import Crew from "./pages/crew";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="destination" element={<Destination />} />
      <Route path="crew" element={<Crew />} />
    </Routes>
  </Router>
);
