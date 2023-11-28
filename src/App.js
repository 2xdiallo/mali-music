// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Sidebar>
    </Router>
  );
};

export default App;
