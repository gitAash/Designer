import React, { useState } from "react";

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className="bg-gradient-to-r from-[#5b9eb6] to-[#73C1DE] shadow-md"
        style={{
          backgroundColor: "linear-gradient(to right, #5b9eb6, #73C1DE)",
        }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-white">StarFashion</h1>

          {/* Navigation Links */}
          <nav className="flex space-x-8">
            <a href="/" className="text-white hover:text-blue-500">
              Home
            </a>
            <a href="/products" className="text-white hover:text-blue-500">
              Products
            </a>
            <a href="/contact-us" className="text-white hover:text-blue-500">
              Contact Us
            </a>
          </nav>

          {/* Sign Up Button */}
          <div>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <img
              src="10.jpeg"
              alt="Women's Lehenga"
              className="rounded-lg mx-auto w-80 h-auto"
            />
            <div className="absolute inset-0 flex justify-between items-center px-4">
              <button className="bg-gray-800 text-white rounded-full p-2">❮</button>
              <button className="bg-gray-800 text-white rounded-full p-2">❯</button>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              Elegant Lehenga
            </h2>
            <p className="text-xl text-blue-700 font-bold mt-2">₹12,000</p>
            <p className="text-gray-600 mt-2">
              This lehenga is crafted for modern elegance with traditional charm.
              Perfect for weddings, receptions, and festive occasions.
            </p>

            {/* Detailed Information */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Product Highlights:
              </h3>
              <ul className="mt-2 text-gray-600 list-disc list-inside">
                <li>
                  <strong>Fabric:</strong> Premium silk with a soft, lightweight
                  feel.
                </li>
                <li>
                  <strong>Embellishments:</strong> Intricate zari embroidery
                  with hand-stitched sequins.
                </li>
                <li>
                  <strong>Color:</strong> Vibrant red with golden accents.
                </li>
                <li>
                  <strong>Dupatta:</strong> Matching net dupatta with
                  embroidered border.
                </li>
                <li>
                  <strong>Occasion:</strong> Suitable for weddings, receptions,
                  or festive gatherings.
                </li>
                <li>
                  <strong>Styling Tip:</strong> Pair with gold jewelry and
                  embellished heels for a regal look.
                </li>
              </ul>
            </div>

            {/* Ratings */}
            <div className="mt-4">
              <p className="text-sm text-gray-600">Customer Ratings</p>
              <div className="flex justify-center">
                <span>⭐⭐⭐⭐☆</span>
              </div>
            </div>

            {/* Quantity Selection and Add to Cart Buttons */}
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <button
                  className="bg-gray-200 text-gray-600 p-2 rounded"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  min="1"
                  onChange={handleQuantityChange}
                  className="w-16 text-center border border-gray-300 p-2 rounded"
                />
                <button
                  className="bg-gray-200 text-gray-600 p-2 rounded"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              <div className="flex space-x-4">
                <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Add to Cart
                </button>
                <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            More Suggestions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="border rounded-lg p-4 text-center">
              <img
                src="https://mandirawirk.in/cdn/shop/files/10_a2af37eb-fb35-469d-8253-199c2ca6d6c0.jpg?v=1694153981"
                alt="Product 1"
                className="rounded mx-auto w-32 h-32"
              />
              <h4 className="mt-2 text-gray-800 font-medium">
                Embroidered Kurta
              </h4>
              <p className="text-blue-700">₹2,499</p>
              <button className="bg-blue-700 text-white w-full mt-2 px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
            <div className="border rounded-lg p-4 text-center">
              <img
                src="https://sunasa.in/cdn/shop/products/IMG_20221019_010024_1500x.jpg?v=1715888401"
                alt="Product 2"
                className="rounded mx-auto w-32 h-32"
              />
              <h4 className="mt-2 text-gray-800 font-medium">Silk Saree</h4>
              <p className="text-blue-700">₹7,999</p>
              <button className="bg-blue-700 text-white w-full mt-2 px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
            <div className="border rounded-lg p-4 text-center">
              <img
                src="https://www.mirraclothing.com/wp-content/uploads/2024/06/5-2-1-1.jpg"
                alt="Product 3"
                className="rounded mx-auto w-32 h-32"
              />
              <h4 className="mt-2 text-gray-800 font-medium">
                Designer Blouse
              </h4>
              <p className="text-blue-700">₹1,999</p>
              <button className="bg-blue-700 text-white w-full mt-2 px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Subscribe Section */}
          <div>
            <h4 className="font-bold">SIGN UP AND SAVE</h4>
            <p>
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals.
            </p>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg border-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-700 px-4 py-2 rounded-r-lg">Sub</button>
            </div>
          </div>

          {/* Location Section */}
          <div>
            <h4 className="font-bold">LOCATION</h4>
            <p>007, James Bond Street, London, England.</p>
            <p>Mon-Sat: 10AM - 9PM</p>
            <p>Sun: Closed</p>
          </div>

          {/* Useful Links Section */}
          <div>
            <h4 className="font-bold">USEFUL LINKS</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  Shipping & Returns
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetailPage;
