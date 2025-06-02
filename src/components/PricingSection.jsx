// src/components/PricingSection.jsx
import React from 'react';

const pricingPlans = [
  {
    name: 'Starter',
    price: '£49',
    description: 'Best for small businesses just getting started.',
    features: [
      '100 custom boxes',
      'Basic design support',
      '3-5 business day shipping',
    ],
    highlight: false,
  },
  {
    name: 'Business',
    price: '£129',
    description: 'Ideal for growing brands with regular packaging needs.',
    features: [
      '500 custom boxes',
      'Premium design support',
      '2-3 business day shipping',
      'Priority customer support',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for high-volume orders.',
    features: [
      '5000+ boxes / month',
      'Dedicated design team',
      'Next-day shipping available',
      'Custom logistics support',
    ],
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Simple Pricing, Scaled to Your Needs</h2>
        <p className="text-gray-500 mb-12">Choose the plan that fits your packaging needs.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-2xl p-8 shadow-md transition hover:scale-105 duration-300 ${
                plan.highlight ? 'border-blue-600 shadow-lg bg-blue-50' : 'bg-gray-50'
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">
                {plan.price === 'Custom' ? plan.price : `${plan.price}`} <span className="text-base font-normal text-gray-600">/month</span>
              </p>
              <p className="text-gray-500 mb-6">{plan.description}</p>
              <ul className="text-left mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-blue-600 mr-2">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 px-4 rounded text-white font-semibold ${
                  plan.highlight ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-800'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
