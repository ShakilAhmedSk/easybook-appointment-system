import React from 'react';

function WhatIsEasyBook() {
  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
            What is <span className="text-blue-600">EasyBook</span>?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>EasyBook</strong> is your modern solution to scheduling appointments without the hassle. Whether you're booking a haircut, a health checkup, or a beauty session, EasyBook connects you with verified local service providers — all with a few clicks.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Designed with simplicity and speed in mind, EasyBook offers real-time availability, trusted reviews, and location-based suggestions to help you find the right service at the right time.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Say goodbye to long queues, unanswered calls, and confusion. EasyBook puts control in your hands — wherever you are in Kolkata.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/image/what-is-easybook.png"
            alt="EasyBook concept illustration"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default WhatIsEasyBook;
