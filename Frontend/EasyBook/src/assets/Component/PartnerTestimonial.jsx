import React from 'react';
import Slider from 'react-slick';
import { FiStar } from 'react-icons/fi';


const feedbacks = [

    {
        OrgName:'John Wick',
        AvatarImg:'https://picsum.photos/500/300',
        Rating:'/images/image/graph.png',
        Subject:'Good Dude',
        Description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        OrgName:'John Wick',
        AvatarImg:'https://picsum.photos/400/100',
        Rating:'/images/image/graph.png',
        Subject:'Good Dude',
        Description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        OrgName:'John Wick',
        AvatarImg:'https://picsum.photos/300/500',
        Rating:'/images/image/graph.png',
        Subject:'Good Dude',
        Description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        OrgName:'John Wick',
        AvatarImg:'https://picsum.photos/200/500',
        Rating:'/images/image/graph.png',
        Subject:'Good Dude',
        Description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        OrgName:'John Wick',
        AvatarImg:'https://picsum.photos/100/600',
        Rating:'/images/image/graph.png',
        Subject:'Good Dude',
        Description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
];

const PartnerTestimonial = () => {

    const setting = {
        dots:false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024, // tablets
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 640, // mobile
              settings: {
                slidesToShow: 1,
              },
            },
          ],
    }

  return (
    <>
        <section className="bg-slate-100">
            <h2 className=' text-center text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 drop-shadow-sm'>Service  Partner Feedback</h2>
            <Slider {...setting} >
                {feedbacks.map((feedback,index)=>(
                <div key={index} className='bg-slate-100 '>
                    <div className="flex justify-center px-4 py-6">
                      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm max-w-xl w-full p-6 flex flex-col sm:flex-row gap-6">
                        {/* Avatar */}
                        <div className="flex-shrink-0 flex justify-center sm:justify-start">
                          <img
                            src={feedback.AvatarImg}
                            alt="avatar"
                            className="w-14 h-14 rounded-full border border-gray-300"
                          />
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col gap-3">
                          {/* Name + Rating */}
                          <div>
                            <h4 className="text-gray-800 font-bold text-lg">{feedback.OrgName}</h4>
                            <img
                              src={feedback.Rating}
                              alt="rating"
                              className="w-24 mt-1"
                            />
                          </div>

                          {/* Message */}
                          <div>
                            <h3 className="text-slate-700 font-semibold text-base">
                              {feedback.Subject}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                              {feedback.Description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                ))}
            </Slider>
        </section>
    </>
  )
}

export default PartnerTestimonial
