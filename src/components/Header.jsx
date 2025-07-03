import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Common styles
  const headerStyle = {
    backgroundColor: "#1E3A8A",
    color: "#FFFFFF",
    boxShadow: "0 4px 4px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 50,
    width: "100%",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 32px",
  };

  const navStyle = {
    display: isMobile ? "none" : "flex",
    gap: "24px",
    fontSize: "18px",
    fontWeight: 500,
  };

  const linkStyle = (path) => ({
    padding: "8px 12px",
    textDecoration: "none",
    color: location.pathname === path ? "#FBBF24" : "#FFFFFF",
    transition: "color 0.2s",
  });

  const mobileButtonStyle = {
    display: isMobile ? "flex" : "none",
    padding: "8px",
    background: "none",
    border: "none",
    cursor: "pointer",
  };

  const mobileMenuStyle = {
    display: isMobile && isOpen ? "block" : "none",
    backgroundColor: "#1E3A8A",
    padding: "8px 16px",
  };

  const mobileLinkStyle = (path) => ({
    display: "block",
    padding: "12px",
    textDecoration: "none",
    color: location.pathname === path ? "#FBBF24" : "#FFFFFF",
  });

  const routes = [
    { label: "Home", path: "/" },
    { label: "Cart", path: "/cart" },
    { label: "About", path: "/about" },
  ];

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        {/* Logo */}
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>E-Shop</h1>

        {/* Desktop Navigation */}
        <nav style={navStyle}>
          {routes.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              style={linkStyle(path)}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FBBF24")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  location.pathname === path ? "#FBBF24" : "#FFFFFF")
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button onClick={toggleMenu} style={mobileButtonStyle}>
          {isOpen ? <X size={28} color="#FFFFFF" /> : <Menu size={28} color="#FFFFFF" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div style={mobileMenuStyle}>
        {routes.map(({ label, path }) => (
          <Link
            key={label}
            to={path}
            style={mobileLinkStyle(path)}
            onClick={() => setIsOpen(false)}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1F3A93")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;
