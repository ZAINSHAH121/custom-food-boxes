import React from 'react';

const features = [
  { title: 'Eco-Friendly Materials', description: 'Sustainable packaging options for eco-conscious brands.' },
  { title: 'Full Customization', description: 'Shapes, sizes, finishes, and branding tailored to your vision.' },
  { title: 'Fast Turnaround', description: 'Quick production timelines with consistent quality.' },
  { title: 'Affordable Pricing', description: 'Premium packaging that doesn’t break the bank.' },
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">Our Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold text-gray-700">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
