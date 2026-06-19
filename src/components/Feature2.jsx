import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Feature2 = () => {
  const imgRef = useScrollReveal('left');
  const textRef = useScrollReveal('right');

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          {/* Text side */}
          <div ref={textRef} className="flex-1">
            <span className="inline-block bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
              Actually Fee Free
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              Fee-Free Forever
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              We charge no fees and we don't put up barriers. We're the bridge that connects job
              opportunities with the best candidates, with no middlemen involved.
            </p>
            <div className="space-y-3">
              {[
                'No subscription fees ever',
                'Unlimited job applications',
                'Direct employer contact',
                'No hidden charges',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#52B4DA] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual side — pricing card mockup */}
          <div ref={imgRef} className="flex-1 relative">
            <div className="relative">
              {/* Main pricing card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Your Membership Plan</span>
                    <h3 className="text-2xl font-extrabold text-[#1E3E85] mt-1">Premium</h3>
                  </div>
                  <span className="bg-[#FF4F8B]/10 text-[#FF4F8B] text-xs font-semibold px-3 py-1 rounded-full">Active</span>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    'Up to 20 active job posts',
                    'Premium Placement & Visibility',
                    'Messaging anyone, unlimited',
                    'Unlimited invites',
                    'View all applicants',
                    'Unlimited invites to jobseekers',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#52B4DA] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">Upcoming payment</p>
                    <p className="text-sm font-semibold text-gray-700">14 Days • $79.99</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-8 h-5 bg-blue-600 rounded-sm" />
                    <span className="text-xs text-gray-400">Visa</span>
                  </div>
                </div>
              </div>

              {/* Floating "Nahid Hossain" badge from design */}
              <div className="absolute -bottom-4 -right-4 bg-[#FF4F8B] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg z-20">
                Free Always ✓
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
