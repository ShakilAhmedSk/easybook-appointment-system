import React from 'react';
import Slider from 'react-slick';
import { FiStar } from 'react-icons/fi';

const feedbacks = [
  {
    OrgName: 'John Wick',
    AvatarImg: 'https://picsum.photos/500/300',
    Subject: 'Very VERY intuitive 👏',
    Date: 'Jan 25, 2023',
    OriginalDate: 'Jun 02, 2022',
    Question: 'What do you like best about EasyBook?',
    Description:
      'EasyBook is such an intuitive platform. We use it for scheduling demos with clients, and the metrics are super easy to track.',
  },
  {
    OrgName: 'Sarah Connor',
    AvatarImg: 'https://picsum.photos/400/100',
    Subject: 'Perfect for daily use 🚀',
    Date: 'Feb 14, 2023',
    OriginalDate: 'Jan 05, 2023',
    Question: 'How has EasyBook helped your business?',
    Description:
      'EasyBook made managing appointments simple and reliable. It’s now our go-to system for all customer meetings and internal training sessions.',
  },
  {
    OrgName: 'Tony Stark',
    AvatarImg: 'https://picsum.photos/300/200',
    Subject: 'Streamlined workflows 🔧',
    Date: 'Mar 3, 2023',
    OriginalDate: 'Feb 01, 2023',
    Question: 'What would you say to new users?',
    Description:
      'If you want something that just works and doesn’t require training, go with EasyBook.',
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
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

const UserFeedback = () => {
  return (
    <section className="bg-slate-100 py-8">
      <h2 className="text-center text-2xl md:text-3xl font-extrabold text-slate-800 mb-6">
        User Testimonials
      </h2>

      <Slider {...settings}>
        {feedbacks.map((item, index) => (
          <div key={index} className="px-2">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 h-full flex flex-col gap-3">
              {/* Star + Date */}
              <div className="flex justify-between items-center text-xs text-gray-500">
                <div className="flex items-center gap-1 text-red-500">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="text-base fill-red-500" />
                  ))}
                </div>
                <p>
                  {item.Date}{' '}
                  <span className="text-[10px] text-gray-400">(Original {item.OriginalDate})</span>
                </p>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-slate-800">{item.Subject}</h3>

              {/* Question */}
              <p className="font-semibold text-sm text-gray-800">{item.Question}</p>

              {/* Description */}
              <p className="text-sm text-gray-600 line-clamp-4">{item.Description}</p>

              {/* Avatar & Name */}
              <div className="flex items-center gap-2 pt-2 mt-auto">
                <img
                  src={item.AvatarImg}
                  alt={item.OrgName}
                  className="w-8 h-8 rounded-full border border-gray-300"
                />
                <p className="text-sm font-medium text-gray-700">{item.OrgName}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default UserFeedback;
