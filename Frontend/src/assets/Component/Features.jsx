import React from 'react';
import { FiClock, FiBell, FiSmartphone, FiSettings } from 'react-icons/fi';

const features = [
  {
    icon: <FiClock className="w-6 h-6 text-white" />,
    title: 'Smart Scheduling',
    description: 'Automate appointments with flexible time slots and availability controls.',
  },
  {
    icon: <FiBell className="w-6 h-6 text-white" />,
    title: 'Reminders & Alerts',
    description: 'Send automatic SMS or email reminders to reduce no-shows.',
  },
  {
    icon: <FiSmartphone className="w-6 h-6 text-white" />,
    title: 'Mobile Friendly',
    description: 'Book, view, and manage appointments from any device, anywhere.',
  },
  {
    icon: <FiSettings className="w-6 h-6 text-white" />,
    title: 'Easy Customization',
    description: 'Set your services, durations, breaks, and branding with ease.',
  },
];

const Features = () => {
  return (
    <section className="bg-blue-50 from-blue-50 via-white to-slate-100 py-10 px-6 md:px-20">
      <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 drop-shadow-sm">
        Why <span className="text-blue-600">Choose EasyBook?</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 font-medium max-w-xl mx-auto">
        Everything you need to <span className="text-blue-700 font-semibold">manage appointments</span> professionally and effortlessly.
      </p>

      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-blue-100 transition duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mb-6 shadow-lg">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
