import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-6 text-center">Loading products...</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Products</h2>
        <button
          onClick={() => navigate("/cart")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          🛒 Go to Cart
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map(({ _id, name, description, price, image }) => (
          <div key={_id} className="bg-white shadow-md rounded-lg p-4 flex flex-col">
            <img src={image} alt={name} className="h-48 w-full object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <p className="text-gray-700 mb-2">${price.toFixed(2)}</p>
            <p className="text-sm text-gray-600 flex-grow">{description}</p>
            <button
              onClick={() => addToCart({ _id, name, price, image })}
              className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold py-2 rounded"
            >
              ➕ Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
