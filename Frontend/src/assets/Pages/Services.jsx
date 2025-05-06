import React from 'react';
import { FaCalendarAlt, FaBell, FaUsers, FaChartLine, FaLink, FaWpforms } from 'react-icons/fa';
import Footer from '../Component/Footer'
const services = [
  {
    title: 'Online Scheduling',
    icon: <FaCalendarAlt className="text-blue-600 w-8 h-8" />,
    description: 'Clients can easily book appointments anytime, anywhere.',
  },
  {
    title: 'Automated Reminders',
    icon: <FaBell className="text-yellow-500 w-8 h-8" />,
    description: 'Send automatic email or SMS reminders to reduce no-shows.',
  },
  {
    title: 'Client Management',
    icon: <FaUsers className="text-green-600 w-8 h-8" />,
    description: 'Manage client info, history, and communication in one place.',
  },
  {
    title: 'Analytics & Reports',
    icon: <FaChartLine className="text-purple-600 w-8 h-8" />,
    description: 'Track appointments, trends, and business performance.',
  },
  {
    title: 'Calendar Integration',
    icon: <FaLink className="text-pink-600 w-8 h-8" />,
    description: 'Sync with Google, Outlook, and Apple calendars seamlessly.',
  },
  {
    title: 'Custom Booking Forms',
    icon: <FaWpforms className="text-red-500 w-8 h-8" />,
    description: 'Create personalized booking forms to match your services.',
  },
];

const Services = () => {
  return (
    <>
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">📌 Our <span className="text-blue-600">Services</span></h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
          EasyBook offers everything you need to manage appointments efficiently and grow your business.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
    <Footer></Footer>
    </>
  );
};

export default Services;
