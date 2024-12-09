import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [activeFilter, setActiveFilter] = useState("");

  const toggleFilter = (filterName) => {
    setActiveFilter((prev) => (prev === filterName ? "" : filterName));
  };

  const products = [
    { id: 1, name: "Female Pant", category: "T-Shirts", price: 299, img: "https://littleboxindia.com/cdn/shop/products/9ecba9a1665fc879773c3c59b5e3f70e_2dd69582-4211-4a3c-af89-2128ae0c3907.jpg?v=1692199580", gender: "Female", age: "22 - 25" },
    { id: 2, name: "Female Fromal set", category: "Tops", price: 599, img: "https://littleboxindia.com/cdn/shop/products/37befaedf9b508e3813a96d91f32758c.jpg?v=1692779728", gender: "Female", age: "22 - 25" },
    { id: 3, name: "Female Shirt", category: "Jeans", price: 1299.99, img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/c/b/l/s-3015cyan-english-navy-original-imags9p2rpz24ugk.jpeg?q=20&crop=false", gender: "Female", age: "22 - 25" },
    { id: 4, name: "Female Blazer", category: "Jeans", price: 999.99, img: "https://cdn-ilbjpoh.nitrocdn.com/irqMNmbANnWKDLjAhhyiXtOeVUdvvZsh/assets/images/optimized/rev-d7c5172/www.houseoftailors.ae/images/women/suit/formal/women-formal-1.png", gender: "Female", age: "22 - 25" },
    { id: 5, name: "Female Pant", category: "T-Shirts", price: 399, img: "https://littleboxindia.com/cdn/shop/products/b0eb3f6a0c073484b7f11bb3f5aa1d5a_900x.jpg?v=1692199580", gender: "Female", age: "22 - 25" },
    { id: 6, name: "Female Shirt", category: "Tops", price: 999.99, img: "https://www.hancockfashion.com/cdn/shop/files/16116BlackS_5_1800x1800.jpg?v=1690526591", gender: "Female", age: "22 - 25" },
    { id: 4, name: "Female Blazer", category: "Jeans", price: 999.99, img: "https://cdn-ilbjpoh.nitrocdn.com/irqMNmbANnWKDLjAhhyiXtOeVUdvvZsh/assets/images/optimized/rev-d7c5172/www.houseoftailors.ae/images/women/suit/formal/women-formal-1.png", gender: "Female", age: "22 - 25" },
    { id: 5, name: "Female Pant", category: "T-Shirts", price: 399, img: "https://littleboxindia.com/cdn/shop/products/b0eb3f6a0c073484b7f11bb3f5aa1d5a_900x.jpg?v=1692199580", gender: "Female", age: "22 - 25" },
    { id: 6, name: "Female Shirt", category: "Tops", price: 999.99, img: "https://www.hancockfashion.com/cdn/shop/files/16116BlackS_5_1800x1800.jpg?v=1690526591", gender: "Female", age: "22 - 25" },
  ];

  const brands = [
    { id: 1, name: "Levi's", img: "https://cdn.gyftr.com/indusindmore/brands/banner/levis.png" },
    { id: 2, name: "Puma", img: "https://upload.wikimedia.org/wikipedia/en/d/da/Puma_complete_logo.svg" },
    { id: 3, name: "Adidas", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlh-TMpLiCdf4aGSZt2lA_Y8JX1hgAadjSw&s" },
    { id: 4, name: "H&M", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAobukVf4Ewkw2YW_rvgWuUJ8M7H-EynYJXw&s" },
    { id: 1, name: "Levi's", img: "https://cdn.gyftr.com/indusindmore/brands/banner/levis.png" },
    { id: 2, name: "Puma", img: "https://upload.wikimedia.org/wikipedia/en/d/da/Puma_complete_logo.svg" },
    { id: 3, name: "Adidas", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlh-TMpLiCdf4aGSZt2lA_Y8JX1hgAadjSw&s" },
  ];

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo">StarFashion</div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact Us</a>
        </nav>
        <div className="header-actions">
          <input type="text" className="search-bar" placeholder="Search products..." />
          <button className="cart-btn">Cart</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
      <aside className="filter">
  <h3>Filters</h3>
  <div className="filter-wrapper">
    {/* Category Filter */}
    <div className="filter-section">
      <button className="filter-title" onClick={() => toggleFilter("category")}>
        Category
        <span className="filter-icon">{activeFilter === "category" ? "▲" : "▼"}</span>
      </button>
      {activeFilter === "category" && (
        <div className="filter-content">
          <label>
            <input type="checkbox" />
            Jeans
          </label>
          <label>
            <input type="checkbox" />
            Tops
          </label>
          <label>
            <input type="checkbox" />
            T-Shirts
          </label>
        </div>
      )}
    </div>

    {/* Price Filter */}
    <div className="filter-section">
      <button className="filter-title" onClick={() => toggleFilter("price")}>
        Price
        <span className="filter-icon">{activeFilter === "price" ? "▲" : "▼"}</span>
      </button>
      {activeFilter === "price" && (
        <div className="filter-content">
          <label>
            Min
            <input type="number" placeholder="Min" className="filter-input" />
          </label>
          <label>
            Max
            <input type="number" placeholder="Max" className="filter-input" />
          </label>
        </div>
      )}
    </div>

    {/* Gender Filter */}
    <div className="filter-section">
      <button className="filter-title" onClick={() => toggleFilter("gender")}>
        Gender
        <span className="filter-icon">{activeFilter === "gender" ? "▲" : "▼"}</span>
      </button>
      {activeFilter === "gender" && (
        <div className="filter-content">
          <label>
            <input type="radio" name="gender" />
            Male
          </label>
          <label>
            <input type="radio" name="gender" />
            Female
          </label>
          <label>
            <input type="radio" name="gender" />
            Unisex
          </label>
        </div>
      )}
    </div>

    {/* Age Filter */}
    <div className="filter-section">
      <button className="filter-title" onClick={() => toggleFilter("age")}>
        Age
        <span className="filter-icon">{activeFilter === "age" ? "▲" : "▼"}</span>
      </button>
      {activeFilter === "age" && (
        <div className="filter-content">
          <label>
            <input type="checkbox" />
            18 - 21
          </label>
          <label>
            <input type="checkbox" />
            22 - 25
          </label>
          <label>
            <input type="checkbox" />
            26 - 30
          </label>
        </div>
      )}
    </div>

    {/* Sort By Filter */}
    <div className="filter-section">
      <button className="filter-title" onClick={() => toggleFilter("sort")}>
        Sort By
        <span className="filter-icon">{activeFilter === "sort" ? "▲" : "▼"}</span>
      </button>
      {activeFilter === "sort" && (
        <div className="filter-content">
          <select className="filter-dropdown">
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="popularity">Popularity</option>
            <option value="new-arrivals">New Arrivals</option>
          </select>
        </div>
      )}
    </div>
  </div>
  

{/* Material Filter */}
<div className="filter-section">
  <button className="filter-title" onClick={() => toggleFilter("material")}>
    Material
    <span className="filter-icon">{activeFilter === "material" ? "▲" : "▼"}</span>
  </button>
  {activeFilter === "material" && (
    <div className="filter-content">
      <label><input type="checkbox" /> Cotton</label>
      <label><input type="checkbox" /> Polyester</label>
      <label><input type="checkbox" /> Silk</label>
    </div>
  )}
</div>

{/* Color Filter */}
<div className="filter-section">
  <button className="filter-title" onClick={() => toggleFilter("color")}>
    Color
    <span className="filter-icon">{activeFilter === "color" ? "▲" : "▼"}</span>
  </button>
  {activeFilter === "color" && (
    <div className="filter-content">
      <div className="color-palette">
        <div className="color-option" style={{ backgroundColor: "#FF5733" }}></div>
        <div className="color-option" style={{ backgroundColor: "#28A745" }}></div>
        <div className="color-option" style={{ backgroundColor: "#0056B3" }}></div>
        <div className="color-option" style={{ backgroundColor: "#FFC107" }}></div>
      </div>
    </div>
  )}
</div>


  {/* Apply and Clear Filters */}
  <div className="filter-actions">
    <button className="apply-filters">Apply Filters</button>
    <button className="clear-filters">Clear Filters</button>
  </div>
</aside>


        {/* Products Section */}
        <section className="products">
          <h2 className="section-title">Top Brands</h2>
          <div className="brands">
            {brands.map((brand) => (
              <a href={`/brands/${brand.name.toLowerCase()}`} key={brand.id} className="brand-card">
                <img src={brand.img} alt={brand.name} className="brand-image" />
                <p className="brand-name">{brand.name}</p>
              </a>
            ))}
          </div>
          <div className="product-grid">
  {products.map((product) => (
    <div className="product-card" key={product.id}>
      <img src={product.img} alt={product.name} className="product-image" />
      <div className="product-info">
        <p>{product.name}</p>
        <p>{`Gen: ${product.gender} | Age: ${product.age}`}</p>
        <p>{`Rs. ${product.price}`}</p>
      </div>
      <div className="product-actions">
        <button className="add-to-cart">Add to Cart</button>
        
      </div>
    </div>
  ))}
</div>

          

        </section>
      </main>
    </div>
  );
};

export default App;
