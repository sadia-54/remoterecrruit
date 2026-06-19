import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Pricing = () => {
  const ref = useScrollReveal('up');

  return (
    <section id="pricing" className="py-20 bg-[#1E3E85] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#52B4DA] via-[#FF4F8B] to-[#3159D3]" />
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#52B4DA]/10 blur-3xl" />

      <div ref={ref} className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Help Is One Click Away</h2>
        <p className="text-white/60 mb-12">Choose the plan that works best for you</p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Free plan */}
          <div className="bg-white rounded-2xl p-8 text-left hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-6">
              <p className="text-gray-500 text-sm font-medium mb-1">Basic</p>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-extrabold text-gray-900">Free</span>
              </div>
              <p className="text-gray-400 text-sm mt-1">Forever, no credit card needed</p>
            </div>
            <div className="space-y-3 mb-8">
              {['1 Active Job', 'Basic List Placement', 'Unlimited Job Applicants', 'Invite Anyone to Apply to Your Jobs'].map(f => (
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
            <div className="absolute top-4 right-4 bg-[#FF4F8B] text-white text-xs font-bold px-3 py-1 rounded-full">Premium</div>
            <div className="mb-6">
              <p className="text-white/70 text-sm font-medium mb-1">Pro</p>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-extrabold text-white">$79.99</span>
              </div>
              <p className="text-white/50 text-sm mt-1">Per Month</p>
            </div>
            <div className="space-y-3 mb-8">
              {['Unlimited Job Posts', 'Instant Job Post Approval', 'Premium List Placement', 'Unlimited Job Applicants'].map(f => (
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
