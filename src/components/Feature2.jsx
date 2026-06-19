import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

/* ─────────────────────────────────────────────
   Floating profile card
───────────────────────────────────────────── */
const ProfileCard = ({ tag, name, role, avatar, delay }) => (
  <div
    className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100"
    style={{ animation: `f1FadeUp 0.55s ease ${delay}s both`, minWidth: '210px' }}
  >
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
      style={{ background: 'linear-gradient(135deg, #52B4DA, #3159D3)' }}
    >
      {avatar}
    </div>
    <div className="min-w-0">
      {tag && (
        <p className="text-[9px] font-semibold text-[#1E3E85] uppercase tracking-widest mb-0.5 truncate">
          {tag}
        </p>
      )}
      <p className="font-bold text-gray-900 text-sm leading-tight truncate">{name}</p>
      <p className="text-gray-400 text-xs truncate">{role}</p>
    </div>
  </div>
);

const Feature2 = () => {
  const imgRef = useScrollReveal('left');
  const textRef = useScrollReveal('right');

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          {/* Text side */}
          <div ref={textRef} className="flex-1">
            <span className="inline-block bg-[#C2EEFF] text-black text-xs font-semibold px-5 py-3 rounded-full mb-8 ">
              Actually Fee Free
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight mb-7">
              Fee-Free Forever
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              We charge no fees and we don't put up barriers. We're the bridge that connects job
              opportunities with the best candidates, with no middlemen involved.
            </p>

          </div>

          {/* Visual side — pricing card mockup */}
          <div ref={imgRef} className="flex-1 relative">
            <div className="relative">
              {/* Main pricing card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 relative z-10 pb-30">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[12px] text-gray-400 font-medium uppercase tracking-wide">Your Membership Tier</span>
                    <h3 className="text-xl font-semibold bg-clip-text text-transparent mt-1"  style={{ backgroundImage: 'linear-gradient(135deg, #52B4DA, #1E3E85)'  }}>Premium</h3>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h3  className="text-[12px] text-gray-400 font-medium uppercase tracking-wide"> FEATURES </h3>
                  {[
                    'Up to 20 active job posts',
                    'Premium Placement & Visibility',
                    'Messaging anyone, unlimited',
                    'Unlimited invites',
                    'View all applicants',
                    'Unlimited invites to jobseekers',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <div className="w-[18px] h-[18px] rounded-full bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] flex items-center justify-center flex-shrink-0">
                        <svg className="w-[10px] h-[10px]" fill="none" stroke="white" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-600 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
               <div
                className="absolute flex items-center justify-center rounded-full shadow-xl"
                style={{
                  width: '80px', height: '80px',
                  background: 'linear-gradient(135deg, #52B4DA, #1E3E85)',
                  top: '100px', right: '-30px',
                  zIndex: 20,
                  animation: 'f1FadeUp 0.5s ease 0.1s both',
                }}
              >
                <img
                  src="/r-badge.png"
                  alt="RemoteRecruit badge"
                  className="w-[60%] h-[60%] rounded-full"
                />
              </div>

                <div className="border-t border-gray-100 pt-16 flex items-center justify-between">
                   <div
                      className="absolute"
                      style={{ bottom: '14px', left: '-50px', zIndex: 30 }}
                    >
                      <ProfileCard
                        tag="Upcoming Payment in..."
                        name="14 Days - $79.99"
                        avatar="R"
                        delay={0.25}
                      />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
