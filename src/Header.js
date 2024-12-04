import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#5b9eb6] to-[#73C1DE] shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">StarFashion</h1>
        <nav className="space-x-4">
          <a href="#home" className="text-white hover:text-blue-600">Home</a>
          <a href="#products" className="text-white hover:text-blue-600">Products</a>
          <a href="#contact" className="text-white hover:text-blue-600">Contact Us</a>
        </nav>
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search products..." className="border px-4 py-2 rounded" />
          <button className="text-white hover:text-blue-800">Cart</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
