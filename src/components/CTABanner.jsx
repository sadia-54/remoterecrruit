import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const CTABanner = () => {
  const leftRef = useScrollReveal('left');
  const rightRef = useScrollReveal('right');

  return (
    <section className="py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #E8EEFF 0%, #dde8ff 100%)' }}>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image side — LEFT */}
          <div ref={leftRef} className="flex-1 flex justify-left lg:justify-start rounded">
            <img
              src="/find-work.png"
              alt="Get started"
              loading="lazy"
              className="w-full max-w-sm lg:max-w-md object-contain mb-[-80px] ml-[-90px] rounded-3xl shadow-2xl"
            />
          </div>



          {/* Text side */}
          <div ref={rightRef} className="flex-1 text-center lg:text-left">
            <p className="text-[#1E3E85] text-sm font-semibold uppercase tracking-widest mb-3">Are you ready?</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-black leading-tight mb-4">
              Help is only a few clicks away!
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Click below to get set up super quickly and find help now.
            </p>
            <button className="inline-flex items-center gap-3 bg-[#52B4DA] text-[#1E3E85] text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#52B4DA5] transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
              <span className="w-5 h-5 rounded-full bg-[#52B4DA] flex items-center justify-center">
                <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
