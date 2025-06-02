import React from 'react';

const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-20 px-6 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">
  Ready to Start Your Packaging Project?
</h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-300">
          Let’s bring your brand to life with stunning, custom-designed packaging that makes a lasting impact.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block px-8 py-4 bg-yellow-400 text-gray-900 font-semibold text-lg rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;
