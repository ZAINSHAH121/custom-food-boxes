import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Features", to: "features" },
    { name: "Products", to: "products" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight cursor-pointer">
          <span className="text-yellow-500">Custom</span>Packaging
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer hover:text-yellow-500 transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + Cart */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="px-5 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 cursor-pointer"
          >
            Get Quote
          </Link>

          <button
            type="button"
            className="relative text-gray-700 hover:text-yellow-500 transition-colors duration-300"
            aria-label="View Cart"
          >
            <ShoppingCart size={24} />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                {totalQuantity}
              </span>
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-white shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-700 font-medium hover:text-yellow-500 cursor-pointer transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center bg-yellow-400 text-gray-900 font-semibold py-2 rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
