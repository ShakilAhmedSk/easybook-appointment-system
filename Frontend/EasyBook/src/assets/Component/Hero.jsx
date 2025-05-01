import React from 'react';
import Pattern from '../../../public/images/image/subtle-prism.svg'
import { FiCalendar, FiArrowRight, FiSmartphone, FiUserCheck } from 'react-icons/fi';
import Slider from 'react-slick';


const slides = [
  {
    title: 'EasyBook',
    subtitle: 'Your Hassle-Free Appointment Booking System',
    description: 'Schedule appointments in just a few clicks. Ideal for clinics, salons, freelancers, and more.',
    icon: <FiCalendar className="w-5 h-5" />,
    img: '/images/image/smart-timer.png',
    cta: 'Book Now',
  },
  {
    title: 'Smart Scheduling',
    subtitle: 'Never Miss an Appointment',
    description: 'Send automatic reminders and manage time slots easily with our intuitive dashboard.',
    icon: <FiUserCheck className="w-5 h-5" />,
    img: '/images/image/booking.png',
    cta: 'Try It Now',
  },
  {
    title: 'Mobile Friendly',
    subtitle: 'Book On-the-Go',
    description: 'Your customers can book from any device, anytime, anywhere.',
    icon: <FiSmartphone className="w-5 h-5" />,
    img: '/images/image/mobile-frendly.png',
    cta: 'Get Started',
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-slate-100 py-20  px-0 md:px-10 " 
    style={{backgroundImage: `url(${Pattern})`}}>
      <div className="max-w-15xl mx-auto">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row items-center gap-10 px-1">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-blue-600 font-medium mb-2">
                    {slide.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6">{slide.description}</p>
                  <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
                      {slide.icon}
                      {slide.cta}
                    </button>
                    <button className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition">
                      Learn More
                      <FiArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div className="flex-1">
                  <img
                    src={slide.img}
                    alt="slide illustration"
                    className="w-full max-w-sm mx-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;

