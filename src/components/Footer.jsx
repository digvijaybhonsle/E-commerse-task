import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  const footerStyle = {
    backgroundColor: "#1F2937", // gray-800
    color: "#F9FAFB",           // gray-50
    padding: "24px 32px",
    fontSize: "14px",
    boxSizing: "border-box",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "24px",
  };

  const sectionStyle = {
    flex: "1 1 200px",
    margin: "12px",
    minWidth: "150px",
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "12px",
  };

  const linkListStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const linkStyle = {
    color: "inherit",
    textDecoration: "none",
    transition: "color 0.2s",
  };

  const socialContainerStyle = {
    display: "flex",
    gap: "16px",
    marginTop: "8px",
  };

  const bottomBarStyle = {
    borderTop: "1px solid #374151", // gray-700
    marginTop: "24px",
    paddingTop: "16px",
    textAlign: "center",
    fontSize: "13px",
    color: "#D1D5DB", // gray-300
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h3 style={titleStyle}>About Us</h3>
          <p style={{ lineHeight: 1.6 }}>
            E-Shop is your one-stop online store for electronics, fashion, and jewelry.
            Quality products at unbeatable prices.
          </p>
        </div>

        <div style={sectionStyle}>
          <h3 style={titleStyle}>Quick Links</h3>
          <ul style={linkListStyle}>
            {["Home", "Cart", "About"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FBBF24")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div style={sectionStyle}>
          <h3 style={titleStyle}>Contact Us</h3>
          <p style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            <Mail size={16} /> support@eshop.com
          </p>
          <div style={socialContainerStyle}>
            {[
              { icon: <Facebook size={20} />, url: "https://facebook.com", label: "Facebook" },
              { icon: <Twitter size={20} />, url: "https://twitter.com", label: "Twitter" },
              { icon: <Instagram size={20} />, url: "https://instagram.com", label: "Instagram" },
            ].map(({ icon, url, label }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FBBF24")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={bottomBarStyle}>
        &copy; {new Date().getFullYear()} E-Shop. All rights reserved. <br />
        Made with ❤️ by <strong>Digvijay</strong>
      </div>
    </footer>
  );
}

export default Footer;
