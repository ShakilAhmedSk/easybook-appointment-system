import React from 'react';
import {
  FiShield,
  FiClock,
  FiSmartphone,
  FiMapPin,
  FiRefreshCcw,
  FiTrendingUp,
} from 'react-icons/fi';

function WhatMakesUsDifferent() {
  const points = [
    {
      icon: <FiShield className="w-8 h-8 text-blue-600" />,
      title: 'Trusted Professionals Only',
      description:
        'Every service provider on EasyBook is verified, reviewed, and trusted — so you can book with confidence.',
    },
    {
      icon: <FiClock className="w-8 h-8 text-blue-600" />,
      title: 'Real-Time Availability',
      description:
        'No more calling around. Instantly see who’s available right now and lock in your appointment in seconds.',
    },
    {
      icon: <FiSmartphone className="w-8 h-8 text-blue-600" />,
      title: 'Designed for Simplicity',
      description:
        'Our interface is clean, intuitive, and mobile-friendly. No confusion, no clutter — just quick and easy booking.',
    },
    {
      icon: <FiMapPin className="w-8 h-8 text-blue-600" />,
      title: 'Hyper-Local in Kolkata',
      description:
        'Whether you\'re in Salt Lake, Park Street, or Garia — EasyBook connects you with nearby services tailored to your location.',
    },
    {
      icon: <FiRefreshCcw className="w-8 h-8 text-blue-600" />,
      title: 'Flexible Booking Options',
      description:
        'Plans changed? No problem. Reschedule or cancel in a few taps, with no hassle or hidden charges.',
    },
    {
      icon: <FiTrendingUp className="w-8 h-8 text-blue-600" />,
      title: 'True Value for Money',
      description:
        'Get quality service without overpaying. With transparent pricing and no hidden fees, EasyBook ensures every rupee is well spent.',
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          🧩 What Makes <span className="text-blue-600">Us Different</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
          We built EasyBook to take the stress out of appointment booking — by focusing on your needs, every step of the way.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {points.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-5 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatMakesUsDifferent;
