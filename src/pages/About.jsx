import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: "1000px",
    margin: "40px auto",
    padding: "0 24px",
    fontFamily: "Arial, sans-serif",
    color: "#1F2937", // gray-800
    lineHeight: 1.6,
  };

  const headerStyle = {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "16px",
    color: "#111827", // gray-900
  };

  const sectionTitleStyle = {
    fontSize: "20px",
    fontWeight: "600",
    marginTop: "24px",
    marginBottom: "12px",
    color: "#374151", // gray-700
  };

  const paragraphStyle = {
    fontSize: "16px",
    marginBottom: "16px",
    color: "#4B5563", // gray-600
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>About E-Shop</h1>

      <p style={paragraphStyle}>
        Welcome to <strong>E-Shop</strong>, your go-to destination for quality electronics, fashion, and jewelry.
        We are dedicated to bringing you the best shopping experience, combining unbeatable prices, top-rated products,
        and fast delivery all in one place.
      </p>

      <h2 style={sectionTitleStyle}>Our Mission</h2>
      <p style={paragraphStyle}>
        At E-Shop, our mission is to make online shopping seamless, secure, and satisfying for every customer.
        We aim to offer a wide range of curated products that meet the needs of modern lifestyles while
        ensuring affordability and trust.
      </p>

      <h2 style={sectionTitleStyle}>Why Shop With Us?</h2>
      <ul style={{ paddingLeft: "20px", color: "#4B5563" }}>
        <li>✅ Wide range of categories including electronics, fashion, and jewelry</li>
        <li>✅ Competitive prices and exclusive deals</li>
        <li>✅ Fast and secure checkout process</li>
        <li>✅ Friendly support team</li>
        <li>✅ Trusted by hundreds of happy customers</li>
      </ul>

      <h2 style={sectionTitleStyle}>Contact</h2>
      <p style={paragraphStyle}>
        Have questions or suggestions? Feel free to reach out to us at <a href="mailto:support@eshop.com" style={{ color: "#2563EB" }}>support@eshop.com</a>. We'd love to hear from you!
      </p>
    </div>
  );
};

export default About;
