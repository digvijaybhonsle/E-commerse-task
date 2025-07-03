import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/sidebar";
// import { useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [cart, setCart] = useState([]);
//   const navigate = useNavigate();

  useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => setProducts(data));

  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    setCart(JSON.parse(storedCart));
  }
}, []);

  // Filter products based on selected category
  const filteredProducts = products.filter(prod => {
    if (filter === "All") return true;
    const cat = prod.category.toLowerCase();
    if (filter === "Electronics" && cat.includes("electronics")) return true;
    if (filter === "Fashion" && (cat.includes("men's clothing") || cat.includes("women's clothing"))) return true;
    if (filter === "Jewelery" && cat.includes("jewelery")) return true;
    return false;
  });

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.title} has been added to your cart!`);
    // navigate("/cart");
  };

  // Styles
  const layoutStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "24px",
  };
  const contentStyle = {
    flexGrow: 1,
    paddingLeft: "24px",
  };
  const headerStyle = {
    fontSize: "28px",
    fontWeight: 600,
    marginBottom: "16px",
    color: "#111827",
  };
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "24px",
  };

  return (
    <div style={layoutStyle}>
      <Sidebar filter={filter} setFilter={setFilter} />

      <main style={contentStyle}>
        <h2 style={headerStyle}>Featured Products</h2>
        <div style={gridStyle}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(prod => (
              <ProductCard key={prod.id} product={prod} onAddToCart={() => handleAddToCart(prod)} />
            ))
          ) : (
            <p style={{ color: '#6B7280' }}>No products found.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;
