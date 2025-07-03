import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleRemove = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const containerStyle = {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "0 24px",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "24px",
    color: "#111827",
    textAlign: "center",
  };

  const itemStyle = {
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  };

  const imageStyle = {
    width: "80px",
    height: "80px",
    objectFit: "contain",
    backgroundColor: "#F9FAFB",
    borderRadius: "4px",
  };

  const detailsStyle = {
    flex: 1,
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: 600,
    color: "#111827",
    margin: "0 0 6px",
  };

  const priceStyle = {
    fontSize: "14px",
    color: "#4B5563",
  };

  const removeButtonStyle = {
    padding: "8px 12px",
    backgroundColor: "#DC2626",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#6B7280' }}>Your cart is empty.</p>
      ) : (
        cartItems.map((item, idx) => (
          <div key={idx} style={itemStyle}>
            <img src={item.image} alt={item.title} style={imageStyle} />
            <div style={detailsStyle}>
              <h3 style={titleStyle}>{item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title}</h3>
              <p style={priceStyle}>${item.price.toFixed(2)}</p>
            </div>
            <button style={removeButtonStyle} onClick={() => handleRemove(idx)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
