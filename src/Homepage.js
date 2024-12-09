import React from "react";
import "./App.css";



function App() {
  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          {/* Font Awesome Star Icon */}
          <i className="fas fa-star logo-icon"></i> {/* Star icon */}
          <span>StarFashion</span>
        </div>
        <nav className="navbar">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <div className="actions">
          <button className="action-btn">Search</button>
          <button className="action-btn">Cart</button>
          <button className="get-started-btn">Get Started</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        {/* Text Section */}
        <div className="text-content">
          <h1>
            Getting the best <span className="highlight">and</span> latest style
            has never been <span className="highlight">easier!</span>
          </h1>
          <p className="description">
            <strong>StarFashion</strong> is a platform that helps to make fashion
            accessible to all. It brings fashion right to your doorstep!
          </p>
          <button className="shop-btn">Shop Collections</button>
        </div>

        {/* Image Section */}
        <div className="image-content">
          <div className="main-images">
            <img
              src="https://images.pexels.com/videos/5586008/girls-online-online-shopping-shopping-5586008.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Fashion 1"
              className="main-image"
            />
            <img
              src="https://png.pngtree.com/thumb_back/fw800/background/20240330/pngtree-beautiful-girl-with-colorful-shoping-bag-shopping-online-image_15698225.jpg"
              alt="Fashion 2"
              className="main-image"
            />
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default App;
