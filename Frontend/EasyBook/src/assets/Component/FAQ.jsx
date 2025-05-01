import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is EasyBook?",
      answer: "EasyBook is an appointment booking system that allows users to schedule and manage appointments efficiently."
    },
    {
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign Up' button on the homepage and fill out the required information."
    },
    {
      question: "How can I book an appointment?",
      answer: "Once logged in, select a date and time, and fill in the necessary details to complete your booking."
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer: "Yes, you can cancel or reschedule your appointment from your dashboard up to 24 hours before the scheduled time."
    },
    {
      question: "Is EasyBook free to use?",
      answer: "Yes, EasyBook offers a free plan with basic features. There are premium plans with additional functionalities."
    }
  ];

  return (
<div className='bg-blue-50'>
<div className="max-w-4xl mx-auto py-10 px-10 ">
      <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg">
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full px-4 py-3 text-left bg-gray-100 rounded-t-lg hover:bg-gray-200 focus:outline-none"
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 bg-gray-50 rounded-b-lg">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
</div>
  );
};

export default FAQ;
