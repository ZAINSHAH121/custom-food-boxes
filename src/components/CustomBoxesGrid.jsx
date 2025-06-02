import React from 'react';

const boxes = [
  {
    title: 'Luxury Rigid Boxes',
    description: 'Perfect for premium product presentation and protection.',
    image: '/images/Luxury Rigid Boxes.jpg',
  },
  {
    title: 'Corrugated Mailer Boxes',
    description: 'Durable and customizable for shipping and branding.',
    image: '/images/Corrugated Mailer Boxes.jpg',
  },
  {
    title: 'Folding Cartons',
    description: 'Cost-effective and lightweight, ideal for retail packaging.',
    image: '/images/Folding Cartons.jpg',
  },
  {
    title: 'Custom Display Boxes',
    description: 'Great for showcasing products on shelves and counters.',
    image: '/images/Custom Display Boxes.png',
  },
];

const CustomBoxesGrid = () => {
  return (
    <section className="py-16 bg-white" id="custom-boxes">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Custom Box Styles
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={box.image}
                alt={box.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {box.title}
                </h3>
                <p className="mt-2 text-gray-600">{box.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomBoxesGrid;
