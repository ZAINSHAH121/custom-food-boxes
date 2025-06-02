// src/pages/Home.jsx
import React, { useState, useEffect } from "react";

// Hero & Feature Sections
import HeroSection from "../components/HeroSection";
import PackagingInfo from "../components/PackagingInfo";
import FeaturesGrid from "../components/FeaturesGrid";
import ProductCategories from "../components/ProductCategories";
import CustomBoxesGrid from "../components/CustomBoxesGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import TrustBadges from "../components/TrustBadges";
import PricingSection from "../components/PricingSection";
import Testimonials from "../components/Testimonials";
import FAQSection from "../components/FAQSection";
import ContactCTA from "../components/ContactCTA";
import ContactForm from "../components/ContactForm";

// Product Logic
import ProductUpload from "../components/ProductUpload";
import ProductList from "../components/ProductList";
import API from "../api/api";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await API.get("/products");
      setProducts(response.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to load products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <HeroSection />
      <PackagingInfo />
      <FeaturesGrid />
      <ProductCategories />
      <CustomBoxesGrid />

      {/* Upload New Product Section */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Add New Product</h2>
          <ProductUpload onUploadSuccess={fetchProducts} />
        </div>
      </section>

      {/* All Products Section */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Product Collection</h2>

          {loading && (
            <p className="text-lg text-blue-600 animate-pulse">Loading products...</p>
          )}

          {error && (
            <p className="text-red-600 text-lg font-semibold">{error}</p>
          )}

          {!loading && !error && products.length > 0 ? (
            <ProductList products={products} />
          ) : (
            !loading &&
            !error && (
              <p className="text-gray-500 text-md">No products found. Please add one.</p>
            )
          )}
        </div>
      </section>

      {/* Extra Sections */}
      <WhyChooseUs />
      <TrustBadges />
      <PricingSection />
      <Testimonials />
      <FAQSection />
      <ContactCTA />
      <ContactForm />
    </>
  );
};

export default Home;
