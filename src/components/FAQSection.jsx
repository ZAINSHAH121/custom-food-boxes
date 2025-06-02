import React, { useState } from 'react';

const faqs = [
  {
    question: "What types of custom packaging do you offer?",
    answer: "We offer boxes, bags, mailers, and eco-friendly packaging tailored to your brand."
  },
  {
    question: "Can I request a design before placing a bulk order?",
    answer: "Yes, we offer design previews and prototypes before bulk production."
  },
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer: "Our MOQ depends on the product type, starting from as low as 100 units."
  },
  {
    question: "How long does production and delivery take?",
    answer: "Typically, production takes 7–14 business days, with shipping time depending on your location."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide with competitive international rates."
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left font-medium text-lg transition duration-300"
              >
                {faq.question}
                <span className="ml-2">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <div
                className={`mt-2 text-gray-600 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
