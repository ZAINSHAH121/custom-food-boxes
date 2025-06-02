// src/components/ProductCard.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // ✅ Get addToCart from context

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{product.name}</h3>
        <p className="text-gray-700 mb-2">${product.price.toFixed(2)}</p>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => addToCart(product)} // ✅ This triggers addToCart
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <ShoppingCart size={18} /> Add to Cart
          </button>

          <Link
            to={`/products/${product.id}`}
            className="text-blue-600 hover:underline text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
