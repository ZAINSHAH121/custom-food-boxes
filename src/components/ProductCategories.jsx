import React from 'react';

const categories = ['Retail Boxes', 'Mailer Boxes', 'Gift Packaging', 'Food Containers'];

const ProductCategories = () => {
  return (
    <section id="products" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Explore Our Packaging Types</h2>
        <div className="flex flex-wrap justify-center mt-8 gap-6">
          {categories.map((category, idx) => (
            <div key={idx} className="w-64 h-40 bg-white rounded-lg shadow-lg flex items-center justify-center text-gray-700 text-lg font-medium">
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
