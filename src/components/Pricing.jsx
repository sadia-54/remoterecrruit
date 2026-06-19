import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Pricing = () => {
  const ref = useScrollReveal('up');

  return (
    <section id="pricing" className="relative overflow-hidden py-20" >

      {/* Split background */}
      <div className="absolute inset-0 flex flex-col pointer-events-none">
        <div className="h-1/2 bg-gray-white/70" />
        <div className="h-1/2 bg-[#1E3E85]" />
      </div>

      {/* SVG wave */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          style={{ height: '120px' }}
          preserveAspectRatio="none"
        >
          <path d="M0,0 C360,120 1080,0 1440,80 L1440,120 L0,120 Z" fill="#1E3E85" />
        </svg>
      </div>

      {/* Content */}
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
          Help Is One Click Away
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Free plan */}
          <div className="bg-white rounded-2xl p-8 text-left hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-6 bg-[#ECF2FF] rounded-lg p-4 prelative">
   
              <div className="flex items-end gap-1">
                <span className="text-3xl text-[#52B4DA] font-semibold">Free</span>
              </div>
                         <p className="text-gray-500 text-sm font-medium mb-1">Basic</p>
            </div>
            <div className="space-y-3 mb-8">
              {[
                '1 Active Job',
                'Basic List Placement',
                'Unlimited Job Applicants',
                'Invite Anyone to Apply to Your Jobs',
              ].map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm">{f}</span>
                </div>
              ))}
            </div>
            <button className="w-full border-2 border-[#1E3E85] text-[#1E3E85] font-semibold py-3 rounded-xl hover:bg-[#1E3E85] hover:text-white transition-all duration-200">
              Get Started
            </button>
          </div>

          {/* Premium plan */}
          <div className="bg-[#3159D3] rounded-2xl p-8 text-left relative overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="absolute top-4 right-4 bg-[#4391C135] text-white text-xs font-bold px-3 py-1 rounded-full">
              Premium
            </div>
            <div className="mb-6">
              <p className="text-white/70 text-sm font-medium mb-1">Pro</p>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-extrabold text-white">$79.99</span>
              </div>
              <p className="text-white/50 text-sm mt-1">Per Month</p>
            </div>
            <div className="space-y-3 mb-8">
              {[
                'Unlimited Job Posts',
                'Instant Job Post Approval',
                'Premium List Placement',
                'Unlimited Job Applicants',
              ].map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/80 text-sm">{f}</span>
                </div>
              ))}
            </div>
            <button className="w-full bg-white text-[#3159D3] font-semibold py-3 rounded-xl hover:bg-[#E8EEFF] transition-all duration-200">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;