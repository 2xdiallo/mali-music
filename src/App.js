// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import Sidebar from "./components/sidebar/Sidebar";
import Biblioteque from "./pages/biblioteque/Biblioteque";
import Login from "./pages/auth/login/Login";
import { SidebarProvider } from "./context/IsOpen";
import { ScrollProvider } from "./context/ScrollContext";

const App = () => {
  return (
    <Router>
      <ScrollProvider>
        <SidebarProvider>
          <Sidebar>
            <Routes>
              <Route path="/bundle_home" element={<Home />} />
              <Route path="/bundle_biblioteques" element={<Biblioteque />} />
              <Route path="/bundle_login" element={<Login />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Sidebar>
        </SidebarProvider>
      </ScrollProvider>
    </Router>
  );
};

export default App;
