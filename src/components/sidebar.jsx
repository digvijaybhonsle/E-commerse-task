import React, { useState, useEffect } from "react";
import { Home, Box, ShoppingCart, Gem } from "lucide-react";

function Sidebar({ filter, setFilter }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    { name: "All", icon: <Home size={20} /> },
    { name: "Electronics", icon: <Box size={20} /> },
    { name: "Fashion", icon: <ShoppingCart size={20} /> },
    { name: "Jewelery", icon: <Gem size={20} /> },
  ];

  const sidebarStyle = {
    width: "250px",
    backgroundColor: "#F3F4F6",
    padding: "8px",
    boxSizing: "border-box",
    height: "100vh",
  };

  const titleStyle = {
    marginBottom: "12px",
    fontSize: "22px",
    fontWeight: 600,
    color: "#111827",
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginLeft: "14px",
  };

  const buttonStyle = (name) => ({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: filter === name ? "#E5E7EB" : "transparent",
    color: "#1F2937",
    padding: "8px 12px",
    borderRadius: "4px",
    border: "none",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "14px",
  });

  const bottomNavStyle = {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#F3F4F6",
    display: "flex",
    justifyContent: "space-around",
    padding: "8px 0",
    boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
    zIndex: 100,
  };

  const bottomButtonStyle = (name) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: filter === name ? "#374151" : "#1F2937",
    fontSize: "12px",
    background: "none",
    border: "none",
    cursor: "pointer",
  });

  if (isMobile) {
    return (
      <nav style={bottomNavStyle}>
        {categories.map(({ name, icon }) => (
          <button
            key={name}
            onClick={() => setFilter(name)}
            style={bottomButtonStyle(name)}
          >
            {icon}
            <span>{name}</span>
          </button>
        ))}
      </nav>
    );
  }

  return (
    <aside style={sidebarStyle}>
      <h2 style={titleStyle}>Categories</h2>
      <ul style={listStyle}>
        {categories.map(({ name, icon }) => (
          <li key={name}>
            <button
              onClick={() => setFilter(name)}
              style={buttonStyle(name)}
            >
              {icon}
              <span>{name}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
