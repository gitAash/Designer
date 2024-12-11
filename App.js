import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [activeFilter, setActiveFilter] = useState("");

  const toggleFilter = (filterName) => {
    setActiveFilter((prev) => (prev === filterName ? "" : filterName));
  };

  const products = [
    { id: 1, name: "Female jumpsuit", category: "Jumpsuit", price: 689, img: "https://www.libas.in/cdn/shop/files/35098.jpg?v=1713522861", gender: "Female", age: "22 - 25" },
    { id: 2, name: "Female Jumpsuit", category: "Jumpsuit", price: 599, img: "https://sassafras.in/cdn/shop/products/SFJMPS8022-1.jpg?v=1666383252", gender: "Female", age: "22 - 25" },
    { id: 3, name: "Female Jumpsuit", category: "Jumpsuit", price: 1299.99, img: "https://www.ordinaree.com/cdn/shop/files/ordinaree-326_3456x.jpg?v=1712562757", gender: "Female", age: "22 - 25" },
    { id: 4, name: "Female Jumpsuit", category: "Jumpsuit", price: 999.99, img: "https://s.alicdn.com/@sc04/kf/H195ed53d90664a378ab2ea5e8e35c0e8c.jpg_720x720q50.jpg", gender: "Female", age: "22 - 25" },
    { id: 5, name: "Female Jumpsuit", category: "Jumpsuit", price: 1399, img: "https://www.ordinaree.com/cdn/shop/files/ordinaree-7_3456x.jpg?v=1712567067", gender: "Female", age: "22 - 25" },
    { id: 6, name: "Female Jumpsuit", category: "Jumpsuit", price: 999.99, img: "https://mandirawirk.in/cdn/shop/files/DSC6839copy.jpg?v=1714985217&width=1500", gender: "Female", age: "22 - 25" },
    { id: 7, name: "Female Jumpsuit", category: "Jumpsuit", price: 899, img: "https://www.ordinaree.com/cdn/shop/products/Shopdressesonline4M4A0029_3456x.jpg?v=1659634613", gender: "Female", age: "22 - 25" },
    { id: 8, name: "Female Jumpsuit", category: "Jumpsuit", price: 799, img: "https://images.meesho.com/images/products/264181559/hnokh_512.jpg", gender: "Female", age: "22 - 25" },
    { id: 9, name: "Female Jumpsuit", category: "Jumpsuit", price: 1299.99, img: "https://img.kwcdn.com/product/fancy/7f9215cd-0869-48a3-9729-3d6da8f72b1b.jpg?imageView2/2/w/500/q/60/format/webp", gender: "Female", age: "22 - 25" },
    { id: 10, name: "Female Jumpsuit", category: "Jumpsuit", price: 999.99, img: "https://rukminim2.flixcart.com/image/550/650/xif0q/jumpsuit/7/g/p/l-h-48-jumpsuit-house-of-common-original-imah4h6qshjxjgyd.jpeg?q=90&crop=false", gender: "Female", age: "22 - 25" },
    { id: 11, name: "Female Jumpsuit", category: "Jumpsuit", price: 399, img: "https://images.bestsellerclothing.in/data/only/05-aug-2024/900728001_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto", gender: "Female", age: "22 - 25" },
    { id: 12, name: "Female Jumpsuit", category: "Jumpsuit", price: 999.99, img: "https://img.tobi.com/product_images/sm/1/red-multi-carrie-stripe-strapless-jumpsuit.jpg", gender: "Female", age: "22 - 25" },
    { id: 13, name: "Female Jumpsuit", category: "Jumpsuit", price: 299, img: "https://img.ltwebstatic.com/images3_pi/2024/11/22/17/1732243830b13056f5f1a99d2228bb803bd62ea049_thumbnail_750x999_wk_shein.jpg", gender: "Female", age: "22 - 25" },
    { id: 14, name: "Female Jumpsuit", category: "Jumpsuit", price: 599, img: "https://img.shopstyle-cdn.com/sim/5f/cc/5fcc11fac59eb98bc85233c0d52f694d_xlarge/babao-patchwork-overlay-evening-elegant-jumpsuit-womens-wide-leg-high-waist-overlays-jumpsuits-wedding-guest.jpg", gender: "Female", age: "22 - 25" },
    { id: 3, name: "Female Jumpsuit", category: "Jumpsuit", price: 1299.99, img: "https://rukminim2.flixcart.com/image/450/550/xif0q/jumpsuit/q/t/f/l-mcaw21d04-88-159-miss-chase-original-imags9suc5wfhmav.jpeg?q=90&crop=false", gender: "Female", age: "22 - 25" },
    
  ];

  const brands = [
    { id: 1, name: "Levi's", img: "https://cdn.gyftr.com/indusindmore/brands/banner/levis.png" },
    { id: 2, name: "Puma", img: "https://upload.wikimedia.org/wikipedia/en/d/da/Puma_complete_logo.svg" },
    { id: 3, name: "Adidas", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlh-TMpLiCdf4aGSZt2lA_Y8JX1hgAadjSw&s" },
    { id: 4, name: "H&M", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAobukVf4Ewkw2YW_rvgWuUJ8M7H-EynYJXw&s" },
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
        {/* Sidebar Filters */}
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


            {/* Other Filters (Gender, Age, Material, etc.) */}
            {/* Add your other filters here */}
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
                  <p>Gender: {product.gender} | Age: {product.age}</p>
                  <p>₹{product.price}</p>
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
