import React from 'react';
import { FiCalendar, FiUserCheck, FiSmartphone } from 'react-icons/fi';
import { motion as Motion } from 'framer-motion';

const steps = [
  {
    icon: <FiCalendar className="text-white w-8 h-8" />,
    title: 'Choose a Service',
    description: 'Browse and select the service you want to book.',
    image: '/images/image/Step1.png',
  },
  {
    icon: <FiUserCheck className="text-white w-8 h-8" />,
    title: 'Pick a Time',
    description: 'Choose a time slot that works best for you.',
    image: '/images/image/Step2.png',
  },
  {
    icon: <FiSmartphone className="text-white w-8 h-8" />,
    title: 'Confirm & Book',
    description: 'Provide details and confirm your appointment.',
    image: '/images/image/Step3.png',
  },
];

function HowItWorks() {
  return (
      <section className="bg-blue-50 pt-28 pb-16 px-6 md:px-20 z-0">
      {/* Header */}
      <div className="text-center mb-14 z-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 drop-shadow-sm z-0">
          How <span className="text-blue-600 z-0">EasyBook</span> Works
        </h2>
        <p className="text-gray-600 text-lg md:text-xl font-medium z-0">
          A simple <span className="text-blue-700 font-semibold z-0">3-step process</span> to book appointments effortlessly.
        </p>
      </div>

      {/* Step Cards */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-6 z-0">
        {steps.map((step, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative bg-white bg-cover bg-center rounded-2xl shadow-lg w-full md:w-[300px] lg:w-[340px] h-[350px] hover:shadow-2xl transition duration-300 z-0"
            style={{ backgroundImage: `url(${step.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur/70 rounded-2xl p-8 flex flex-col justify-start z-10">
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mb-6 shadow-md">
                {step.icon}
              </div>
              {/* Title */}
              <h3 className="text-2xl font-bold text-blue-700 mb-2">
                Step {index + 1}: {step.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </Motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HowItWorks;
