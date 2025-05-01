import React from 'react';
import { FiCalendar, FiUserCheck, FiSmartphone } from 'react-icons/fi';

function HowItWorks() {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 drop-shadow-sm">
          How <span className="text-blue-600">EasyBook</span> Works
        </h2>
        <p className="text-gray-600 text-lg md:text-xl font-medium">
          A simple <span className="text-blue-700 font-semibold">3-step process</span> to book appointments effortlessly.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-6">
        {/* Step 1 */}
        <div className="relative bg-white bg-[url('/images/image/Step1.png')] bg-cover bg-center p-8 rounded-2xl shadow-lg w-full md:w-[300px] lg:w-[340px] h-[300px] hover:shadow-2xl transition duration-300">
          <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mb-6">
            <FiCalendar className="text-white w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-blue-600 text-stroke-white tracking-wide drop-shadow-sm">
            Step 1: Choose a Service
          </h3>
        </div>

        {/* Step 2 */}
        <div className="relative bg-white bg-[url('/images/image/Step2.png')] bg-cover bg-center p-8 rounded-2xl shadow-lg w-full md:w-[300px] lg:w-[340px] h-[300px] hover:shadow-2xl transition duration-300">
          <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mb-6">
            <FiUserCheck className="text-white w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-blue-600 text-stroke-white tracking-wide drop-shadow-sm">
            Step 2: Pick a Time
          </h3>
        </div>

        {/* Step 3 */}
        <div className="relative bg-white bg-[url('/images/image/Step3.png')] bg-cover bg-center p-8 rounded-2xl shadow-lg w-full md:w-[300px] lg:w-[340px] h-[300px] hover:shadow-2xl transition duration-300">
          <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mb-6">
            <FiSmartphone className="text-white w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-blue-600 text-stroke-white tracking-wide drop-shadow-sm">
            Step 3 : Confirm & Book
          </h3>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
