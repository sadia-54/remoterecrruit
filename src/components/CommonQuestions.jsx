import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const faqs = [
  {
    q: 'Do I have to sign a long-term contract?',
    a: 'No, there are no long-term contracts required. You can start and stop your account at any time with no penalties or hidden fees. We believe in earning your continued business every month.',
  },
  {
    q: 'Can I pay for a whole year?',
    a: 'Yes! We offer annual billing at a discounted rate. Paying annually saves you up to 20% compared to monthly billing. Contact us for more details about our annual plans.',
  },
  {
    q: 'What if I need help?',
    a: 'Our support team is available 24/7 to help you with any questions or issues you may have. You can reach us via live chat, email, or phone. We\'re committed to making sure you have the best experience possible.',
  },
  {
    q: 'Is RemoteRecruit free for job seekers?',
    a: 'Absolutely! RemoteRecruit is completely free for job seekers. Browse unlimited job listings, apply to as many positions as you like, and connect directly with employers — all at zero cost.',
  },
  {
    q: 'How do I create a profile?',
    a: 'Simply sign up with your email address, fill in your professional details, upload your resume, and add any portfolio links or media. Your profile will be live and visible to employers immediately.',
  },
];

const FAQItem = ({ q, a, index }) => {
  const [open, setOpen] = useState(index === 2); // open the 3rd one by default (matches design)

  return (
    <div className={`border rounded-xl mb-3 transition-all duration-300 ${open ? 'border-[#52B4DA] bg-[#f0fbff]' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className={`text-sm font-semibold pr-4 ${open ? 'text-[#1E3E85]' : 'text-gray-700'}`}>{q}</span>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? 'bg-[#1E3E85] rotate-45' : 'bg-gray-100'}`}>
          <svg className={`w-3.5 h-3.5 ${open ? 'text-white' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      {open && (
        <div className="px-5 pb-4">
          <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

const CommonQuestions = () => {
  const ref = useScrollReveal('up');

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Common Questions
        </h2>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="border border-gray-300 text-gray-600 text-sm font-medium px-6 py-2.5 rounded-full hover:border-[#1E3E85] hover:text-[#1E3E85] transition-colors duration-200">
            More Questions
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommonQuestions;
