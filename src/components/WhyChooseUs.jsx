import React from 'react';
import { CheckCircleIcon } from 'lucide-react';

const features = [
  {
    title: 'Premium Quality',
    description: 'We use the finest materials to ensure your packaging stands out and lasts.',
  },
  {
    title: 'Fully Customizable',
    description: 'Get boxes in any shape, size, design, and finish — tailored exactly to your brand.',
  },
  {
    title: 'Fast Turnaround',
    description: 'Quick production and delivery timelines to keep your business moving.',
  },
  {
    title: 'Eco-Friendly Options',
    description: 'We offer sustainable packaging choices to help reduce environmental impact.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50" id="why-choose-us">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Why Choose Us
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Discover the top reasons why businesses trust us for their custom packaging needs.
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4 text-green-600">
                <CheckCircleIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
