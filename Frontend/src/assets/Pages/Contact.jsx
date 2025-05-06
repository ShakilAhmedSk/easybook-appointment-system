import React from 'react';
import Footer from '../Component/Footer';

function Contact() {
  return (
    <>
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">📬 Get in <span className="text-blue-600">Touch</span></h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Have questions, feedback, or partnership ideas? We'd love to hear from you!
        </p>
      </div>

      <form className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>

    <Footer></Footer>
    </>
  );
}

export default Contact;
