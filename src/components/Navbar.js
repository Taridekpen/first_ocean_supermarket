import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="logo.png" // Replace with your logo
            alt="First Ocean Supermarket"
            className="h-10 mr-2"
          />
          <span className="text-xl font-bold">First Ocean Supermarket</span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow p-2 border border-gray-300 rounded-l-md"
          />
          <button className="bg-yellow-400 p-2 rounded-r-md">
            <i className="fas fa-search text-white"></i>
          </button>
        </div>

        {/* Icon Links */}
        <div className="hidden md:flex space-x-4">
          <i className="fas fa-user text-xl cursor-pointer"></i>
          <i className="fas fa-heart text-xl cursor-pointer"></i>
          <i className="fas fa-shopping-cart text-xl cursor-pointer"></i>
        </div>

        {/* Toggle Button for Smaller Screens */}
        <button className="md:hidden text-xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 bg-green-800">
        <ul className="flex flex-wrap justify-between text-white">
          <li className="p-3 bg-red-600 cursor-pointer border border-white hover:bg-red-700">
            SALE <span className="ml-1">▼</span>
          </li>
          <li className="p-3 cursor-pointer border border-white hover:bg-green-700">
            Fresh Food <span className="ml-1">▼</span>
          </li>
          <li className="p-3 cursor-pointer border border-white hover:bg-green-700">
            Naija Food <span className="ml-1">▼</span>
          </li>
          <li className="p-3 cursor-pointer border border-white hover:bg-green-700">
            Mile 12 Market <span className="ml-1">▼</span>
          </li>
          <li className="p-3 cursor-pointer border border-white hover:bg-green-700">
            Food Cupboard <span className="ml-1">▼</span>
          </li>
          <li className="p-3 cursor-pointer border border-white hover:bg-green-700">
            Oil & Sauces <span className="ml-1">▼</span>
          </li>
          <li className="p-3 cursor-pointer border border-white hover:bg-green-700">
            Snacks <span className="ml-1">▼</span>
          </li>
          <li className="p-3 cursor-pointer border border-white hover:bg-green-700">
            Drinks <span className="ml-1">▼</span>
          </li>
          <li className="p-3 cursor-pointer border border-white hover:bg-green-700">
            Alcohol <span className="ml-1">▼</span>
          </li>
          <li className="p-3 cursor-pointer border border-white hover:bg-green-700">
            Toiletries <span className="ml-1">▼</span>
          </li>
          <li className="p-3 cursor-pointer border border-white hover:bg-green-700">
            Cleaning <span className="ml-1">▼</span>
          </li>
          <li className="p-3 cursor-pointer border border-white hover:bg-green-700">
            Household <span className="ml-1">▼</span>
          </li>
          <li className="p-3 cursor-pointer border border-white hover:bg-green-700">
            Frozen <span className="ml-1">▼</span>
          </li>
          <li className="p-3 cursor-pointer border border-white hover:bg-green-700">
            Kitchen & Dining <span className="ml-1">▼</span>
          </li>
          <li className="p-3 cursor-pointer border border-white hover:bg-green-700">
            Health & Wellness <span className="ml-1">▼</span>
          </li>
          <li className="p-3 cursor-pointer border border-white hover:bg-green-700">
            Baby & Kids <span className="ml-1">▼</span>
          </li>
          <li className="p-3 cursor-pointer border border-white hover:bg-green-700">
            Electronics <span className="ml-1">▼</span>
          </li>
          <li className="p-3 cursor-pointer border border-white hover:bg-green-700">
            Office Supplies <span className="ml-1">▼</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
