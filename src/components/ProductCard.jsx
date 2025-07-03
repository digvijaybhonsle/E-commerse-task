import React from "react";

function ProductCard({ product, onAddToCart }) {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    transition: "transform 0.2s, box-shadow 0.2s",
  };

  const imageWrapperStyle = {
    width: "100%",
    paddingTop: "75%",
    position: "relative",
    overflow: "hidden",
  };
  const imageStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
    backgroundColor: "#F9FAFB",
  };

  const contentStyle = {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    flexGrow: 1,
  };
  const titleStyle = {
    fontSize: "16px",
    fontWeight: 600,
    color: "#111827",
    margin: 0,
  };
  const priceStyle = {
    fontSize: "14px",
    fontWeight: 500,
    color: "#4B5563",
  };
  const buttonStyle = {
    marginTop: "auto",
    padding: "10px 16px",
    fontSize: "14px",
    fontWeight: 600,
    color: "#FFFFFF",
    backgroundColor: "#2563EB",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.2s, transform 0.2s",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={imageWrapperStyle}>
        <img
          src={product.image}
          alt={product.title}
          style={imageStyle}
        />
      </div>

      <div style={contentStyle}>
        <h3 style={titleStyle}>{product.title}</h3>
        <p style={priceStyle}>${product.price.toFixed(2)}</p>
        <button
          style={buttonStyle}
          onClick={onAddToCart}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1D4ED8')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563EB')}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
