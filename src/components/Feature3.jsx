import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Feature3 = () => {
  const textRef = useScrollReveal('left');
  const imgRef = useScrollReveal('right');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text side */}
          <div ref={textRef} className="flex-1">
            <span className="inline-block bg-purple-50 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
              Custom Profile
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              Showcase Your Talents
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              Personalize your profile with everything that makes you unique. Add an introductory
              video and other media for a personal touch that stands out to employers and candidates.
            </p>
            <button className="inline-flex items-center gap-2 bg-[#FF4F8B] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#e8377a] transition-colors duration-200 shadow-md">
              Build Your Profile
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Profile card mockup */}
          <div ref={imgRef} className="flex-1 relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative z-10">
              {/* Profile cover */}
              <div className="h-24 bg-gradient-to-r from-[#1E3E85] to-[#3159D3]" />
              {/* Avatar */}
              <div className="px-6 pb-6">
                <div className="flex items-end gap-4 -mt-10 mb-4">
                  <div
                    className="w-20 h-20 rounded-2xl border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-2xl"
                    style={{ background: 'linear-gradient(135deg, #52B4DA, #3159D3)' }}
                  >
                    BU
                  </div>
                  <div className="mb-1">
                    <h4 className="font-bold text-gray-800">Borhan Uddin</h4>
                    <p className="text-sm text-gray-500">Full Stack Developer</p>
                  </div>
                  <div className="ml-auto">
                    <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">● Open to work</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-2">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'JavaScript', 'React', 'Back End', 'Front End', 'iOS Development', '+2'].map(skill => (
                      <span key={skill} className="text-xs bg-[#E8EEFF] text-[#3159D3] rounded-full px-3 py-1 font-medium">{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Video placeholder */}
                <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3 border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#1E3E85] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Intro Video</p>
                    <p className="text-xs text-gray-400">Best Developer Ever!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#FF4F8B]/15 z-0" />
            <div className="absolute -bottom-4 left-4 w-12 h-12 rounded-full bg-[#52B4DA]/20 z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3;
