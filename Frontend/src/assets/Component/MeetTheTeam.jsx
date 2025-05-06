import React from 'react';
import Slider from 'react-slick';
import {
  FaUserAlt,
  FaCode,
  FaCogs,
  FaBolt,
  FaShieldAlt,
  FaRocket,
} from 'react-icons/fa';

const team = [
  {
    name: 'Shakil Ahmed',
    role: 'Founder • Full Stack Developer',
    avatar: '/images/image/shakil.jpg',
    funFact: 'Built EasyBook solo — true Avenger style.',
    icon: <FaRocket className="text-blue-600 w-6 h-6" />,
  },
  {
    name: 'Tony Stark',
    role: 'Tech Advisor',
    avatar: '/images/image/Tony-Stark.png',
    funFact: 'Pitched Jarvis. We picked React.',
    icon: <FaCogs className="text-red-500 w-6 h-6" />,
  },
  {
    name: 'Steve Rogers',
    role: 'Project Discipline Manager',
    avatar: '/images/image/Steve-Rogers.png',
    funFact: 'Insists all code should be "by the book".',
    icon: <FaShieldAlt className="text-blue-500 w-6 h-6" />,
  },
  {
    name: 'Bruce Banner',
    role: 'Backend Consultant',
    avatar: '/images/image/Bruce-Banner.png',
    funFact: 'Handles complex queries — unless he’s angry.',
    icon: <FaCode className="text-green-600 w-6 h-6" />,
  },
  {
    name: 'Thor Odinson',
    role: 'Cloud Infrastructure',
    avatar: '/images/image/Thor-Odinson.jpg',
    funFact: 'Deploys with the power of thunder ⚡.',
    icon: <FaBolt className="text-yellow-500 w-6 h-6" />,
  },
  {
    name: 'Natasha Romanoff',
    role: 'UI/UX Feedback Agent',
    avatar: '/images/image/Natasha-Romanoff.jpg',
    funFact: 'Spots bugs even before QA can.',
    icon: <FaUserAlt className="text-pink-500 w-6 h-6" />,
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

function MeetTheTeam() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          👥 Meet the <span className="text-blue-600">Team</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
          One real builder and five legendary consultants. Here’s the face behind EasyBook — with a little help from the Avengers.
        </p>
      </div>

      <Slider {...settings}>
        {team.map((member, index) => (
          <div key={index} className="px-2">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center h-full">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
              />
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{member.role}</p>
              <div className="flex justify-center mb-3">{member.icon}</div>
              <p className="text-gray-600 text-sm">{member.funFact}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default MeetTheTeam;
