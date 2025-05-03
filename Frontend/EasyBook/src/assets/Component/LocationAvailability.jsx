import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const locations = [
  'Salt Lake Sector V',
  'New Town',
  'Park Street',
  'Garia',
  'Behala',
  'Dum Dum',
  'Tollygunge',
  'Ballygunge',
];

function LocationAvailability() {
  return (
    <section className="py-16 px-6 md:px-20 bg-slate-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
          Available Across <span className="text-blue-600">Kolkata</span>
        </h2>
        <p className="text-lg text-gray-600">
          Find services in your nearest area—quick and easy!
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {locations.map((location, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-3 bg-blue-50 rounded-xl shadow hover:shadow-md transition duration-300 w-full max-w-xs"
          >
            <FaMapMarkerAlt className="text-blue-600 w-5 h-5" />
            <span className="text-gray-800 font-medium">{location}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LocationAvailability;
