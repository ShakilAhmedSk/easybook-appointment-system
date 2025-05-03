import React from 'react';
import { FaClinicMedical, FaTooth, FaHeartbeat, FaUserMd, FaSpa } from 'react-icons/fa';

const brands = [
  { name: 'Wellness', icon: <FaSpa className="text-4xl text-blue-600" /> },
  { name: 'MediCare', icon: <FaClinicMedical className="text-4xl text-green-600" /> },
  { name: 'BeautyPro', icon: <FaTooth className="text-4xl text-pink-500" /> },
  { name: 'SalonEase', icon: <FaUserMd className="text-4xl text-purple-500" /> },
  { name: 'DocConnect', icon: <FaHeartbeat className="text-4xl text-red-500" /> },
];

function TrustedBy() {
  return (
    <section className="py-16 px-6 md:px-20 bg-slate-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Trusted By Leading Providers
        </h2>
        <p className="text-gray-500 text-md">
          Professionals and businesses across industries trust EasyBook.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-slate-50 flex flex-col items-center gap-2 w-24 h-24 justify-center border rounded-xl shadow-sm hover:shadow-md transition"
          >
            {brand.icon}
            <span className="text-sm font-medium text-gray-600 text-center">{brand.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedBy;
