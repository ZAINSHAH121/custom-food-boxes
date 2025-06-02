import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../api/api";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.get(`/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load product.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-4">Loading product...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;
  if (!product) return <p className="p-4">Product not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link
        to="/"
        className="inline-block mb-4 text-blue-600 hover:underline"
      >
        ← Back to Products
      </Link>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded-md object-cover"
        />

        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description || "No description available."}</p>

          <p className="text-lg font-semibold text-green-700 mb-6">Price: ${product.price.toFixed(2)}</p>

          <button
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => alert("Add to cart feature coming soon!")}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
