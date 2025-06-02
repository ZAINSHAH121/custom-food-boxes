// src/components/ProductUpload.jsx
import React, { useState } from "react";
import API from "../api/api";

const ProductUpload = ({ onUploadSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    imageUrl: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    API.post("/products", formData)
      .then(() => {
        alert("Product uploaded successfully!");
        setFormData({
          name: "",
          description: "",
          category: "",
          price: "",
          imageUrl: "",
        });
        setError(null);
        if (onUploadSuccess) onUploadSuccess();
      })
      .catch((err) => {
        setError("Upload failed: " + err.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Product Name"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
        className="w-full p-2 border rounded"
        required
      />
      {error && <p className="text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Upload Product"}
      </button>
    </form>
  );
};

export default ProductUpload;
