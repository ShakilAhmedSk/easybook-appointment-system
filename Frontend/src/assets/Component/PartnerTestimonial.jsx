import React from 'react';
import Slider from 'react-slick';

const feedbacks = [
  {
    OrgName: 'John Wick',
    AvatarImg: 'https://picsum.photos/500/300',
    Rating: '/images/image/graph.png',
    Subject: 'Good Dude',
    Description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  },
  {
    OrgName: 'Sarah Connor',
    AvatarImg: 'https://picsum.photos/400/100',
    Rating: '/images/image/graph.png',
    Subject: 'Very Professional',
    Description: 'Quick responses and smooth coordination throughout the service.',
  },
  {
    OrgName: 'Tony Stark',
    AvatarImg: 'https://picsum.photos/300/500',
    Rating: '/images/image/graph.png',
    Subject: 'Highly Recommended',
    Description: 'Excellent communication and reliable scheduling support.',
  },
  {
    OrgName: 'Bruce Wayne',
    AvatarImg: 'https://picsum.photos/200/500',
    Rating: '/images/image/graph.png',
    Subject: 'Great Partner',
    Description: 'Handled tasks efficiently with attention to detail.',
  },
  {
    OrgName: 'Diana Prince',
    AvatarImg: 'https://picsum.photos/100/600',
    Rating: '/images/image/graph.png',
    Subject: 'Smooth Collaboration',
    Description: 'Super easy to work with and always punctual.',
  },
];

const PartnerTestimonial = () => {
  const setting = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    rtl: true,
    autoplaySpeed: 4500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-slate-100 py-10">
      <h2 className="text-center text-3xl md:text-2xl font-extrabold text-slate-800 mb-6">
        Service Partner Feedback
      </h2>

      <Slider {...setting}>
        {feedbacks.map((feedback, index) => (
          <div key={index} className="px-3">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 max-w-md mx-auto h-full flex flex-col gap-4">
              {/* Header: Avatar + Name + Rating */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={feedback.AvatarImg}
                    alt="avatar"
                    className="w-12 h-12 rounded-full border border-gray-300 object-cover"
                  />
                  <h4 className="text-gray-800 font-semibold text-lg">{feedback.OrgName}</h4>
                </div>
                <img src={feedback.Rating} alt="rating" className="w-20 h-5 object-contain" />
              </div>

              {/* Subject */}
              <h3 className="text-slate-700 font-semibold text-base">{feedback.Subject}</h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed">
                {feedback.Description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default PartnerTestimonial;
