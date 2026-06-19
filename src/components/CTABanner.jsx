import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const CTABanner = () => {
  const leftRef = useScrollReveal('left');
  const rightRef = useScrollReveal('right');

  return (
    <section className="py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #E8EEFF 0%, #dde8ff 100%)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Dashboard mockup */}
          <div ref={leftRef} className="flex-1 w-full">
            <div className="bg-[#1E3E85] rounded-2xl shadow-2xl overflow-hidden">
              {/* Fake sidebar + content */}
              <div className="flex">
                {/* Sidebar */}
                <div className="w-14 bg-[#152d60] flex flex-col items-center py-4 gap-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center ${i === 0 ? 'bg-[#52B4DA]' : 'bg-white/10'}`}>
                      <div className="w-3 h-3 rounded-sm bg-white/70" />
                    </div>
                  ))}
                </div>
                {/* Main content */}
                <div className="flex-1 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-white/50 text-xs">Welcome back</p>
                      <p className="text-white font-bold text-sm">Let's Find Work</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#52B4DA] flex items-center justify-center text-white text-xs font-bold">RR</div>
                  </div>
                  {/* Job cards */}
                  <div className="space-y-2">
                    {[
                      { title: 'Senior React Dev', company: 'TechCorp', tag: 'Remote', active: true },
                      { title: 'UI/UX Designer', company: 'DesignLab', tag: 'Part-time', active: false },
                      { title: 'Node.js Backend', company: 'StartupXYZ', tag: 'Full-time', active: false },
                    ].map((job, i) => (
                      <div key={i} className={`rounded-lg p-3 flex items-center justify-between ${job.active ? 'bg-[#52B4DA]/20 border border-[#52B4DA]/40' : 'bg-white/5'}`}>
                        <div>
                          <p className="text-white text-xs font-semibold">{job.title}</p>
                          <p className="text-white/50 text-xs">{job.company}</p>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${job.active ? 'bg-[#52B4DA] text-white' : 'bg-white/10 text-white/70'}`}>{job.tag}</span>
                      </div>
                    ))}
                  </div>
                  {/* Apply bar */}
                  <div className="mt-3 bg-[#FF4F8B] rounded-lg p-2 flex items-center justify-between">
                    <span className="text-white text-xs font-semibold">Quick Apply</span>
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#FF4F8B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div ref={rightRef} className="flex-1 text-center lg:text-left">
            <p className="text-[#52B4DA] text-sm font-semibold uppercase tracking-widest mb-3">Are you ready?</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3E85] leading-tight mb-4">
              Help is only a few clicks away!
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Click below to get set up super quickly and find help now.
            </p>
            <button className="inline-flex items-center gap-3 bg-[#1E3E85] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#2a52a8] transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
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
