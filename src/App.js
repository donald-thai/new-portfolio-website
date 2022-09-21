import "./App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page-wrapper">
      <Header />
      {/* <button></button> */}
      <div className="page-content-wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
