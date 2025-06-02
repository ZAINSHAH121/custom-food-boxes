import { motion as Motion } from 'framer-motion';
import { ShieldCheck, Truck, Award } from 'lucide-react';

const badges = [
  {
    icon: <Truck size={32} className="text-green-600 group-hover:animate-spin-slow" />,
    title: 'Free & Fast Shipping',
    description: 'Enjoy quick, reliable delivery on all custom packaging orders.',
  },
  {
    icon: <ShieldCheck size={32} className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
    title: 'Secure Checkout',
    description: 'Your payment is encrypted and safe with top-tier security.',
  },
  {
    icon: <Award size={32} className="text-yellow-500 group-hover:rotate-6 transition-transform duration-300" />,
    title: 'Satisfaction Guarantee',
    description: 'We ensure high-quality standards and customer satisfaction.',
  },
];

const TrustBadges = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-white">
          Trusted By Thousands
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              aria-label={badge.title}
            >
              <div className="flex justify-center items-center mb-4">
                {badge.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {badge.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {badge.description}
              </p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
