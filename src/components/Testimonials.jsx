import React from 'react';

const testimonials = [
  {
    name: 'Sarah Malik',
    comment: 'Absolutely love the quality and customization. Our customers always notice the packaging!',
  },
  {
    name: 'James Carter',
    comment: 'Quick turnaround and the team was very supportive throughout the design process.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">What Our Clients Say</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-gray-600 italic">"{t.comment}"</p>
              <p className="mt-4 font-semibold text-gray-700">- {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
