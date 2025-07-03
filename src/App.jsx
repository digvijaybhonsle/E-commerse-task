import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";

function App() {
  // Inline layout styles
  const appStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    width: "100%",
    boxSizing: "border-box",
  };
  const mainContainerStyle = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    padding: 0,
  };
  const contentWrapperStyle = {
    flexGrow: 1,
    overflowY: "auto",
  };

  return (
    <Router>
      <div style={appStyle}>
        <Header />
        <div style={mainContainerStyle}>
          <div style={contentWrapperStyle}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
