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
        <p className="text-[9px] font-semibold text-[#3BB5E8] uppercase tracking-widest mb-0.5 truncate">
          {tag}
        </p>
      )}
      <p className="font-bold text-gray-900 text-sm leading-tight truncate">{name}</p>
      <p className="text-gray-400 text-xs truncate">{role}</p>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   Main section
───────────────────────────────────────────── */
const Feature1 = () => {
  const textRef = useScrollReveal('left');
  const imgRef  = useScrollReveal('right');

  return (
    <section id="home" className="py-12 md:py-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 xl:px-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">

          {/* ══════════════  LEFT — text  ══════════════ */}
          <div ref={textRef} className="flex-1 w-full max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
            <span className="inline-block bg-[#C2EEFF] text-black text-[11px] font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
              Global Reach
            </span>

            <h2 className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2rem] xl:text-[2.5rem] font-semibold text-gray-900 leading-[1.12] mb-5">
              The First Fully Global Job Board, Anywhere, Ever
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-8 mt-8 max-w-md mx-auto lg:mx-0">
              RemoteRecruit connects candidates with opportunities around the world. With today's
              remote-first workforce, you need to be able to find the best jobs and the best people
              for them, wherever they may be.
            </p>

          </div>

          {/* ══════════════  RIGHT — visual  ══════════════ */}
          <div ref={imgRef} className="flex-1 w-full flex justify-center lg:justify-end">
            {/*
                Canvas: tall enough for phone card + two floating cards.
                On mobile we shrink the canvas so nothing clips outside the viewport.
            */}
            <div className="relative mx-auto" style={{ width: '380px', height: '420px' }}>

              {/* ── Decorative teal blob (top-right) ── */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: '130px', height: '130px',
                  background: 'radial-gradient(circle, #52B4DA33 0%, transparent 70%)',
                  top: '-15px', right: '-15px',
                  zIndex: 0,
                }}
              />

              {/* ── Decorative pink blob (bottom-left) ── */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: '90px', height: '90px',
                  background: 'radial-gradient(circle, #FF4F8B22 0%, transparent 70%)',
                  bottom: '0px', left: '10px',
                  zIndex: 0,
                }}
              />

              
              <div
                className="absolute flex items-center justify-center rounded-full shadow-xl"
                style={{
                  width: '68px', height: '68px',
                  background: 'linear-gradient(135deg, #52B4DA, #1E3E85)',
                  top: '16px', right: '-8px',
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

              {/* ── Main phone mockup ── */}
              <div
                className="absolute bg-white rounded-[28px] shadow-2xl border border-gray-100 overflow-hidden"
                style={{
                  width: '230px',
                  top: '20px',
                  left: '20px',
                  zIndex: 10,
                  animation: 'f1FadeUp 0.6s ease 0s both',
                }}
              >
                {/* Traffic-light bar */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="ml-auto text-[9px] text-gray-400 font-medium">RemoteRecruit</span>
                </div>

                {/* Greeting */}
                <div className="px-4 pt-4 pb-1">
                  <p className="text-[9px] text-gray-400">Welcome Back</p>
                  <p className="text-sm font-bold text-gray-800 mt-0.5">Let's Find Work</p>
                </div>

                {/* Search skeleton */}
                <div className="px-4 pb-3">
                  <div className="h-7 bg-gray-100 rounded-full w-full mt-2" />
                </div>

                {/* Content skeletons */}
                <div className="px-4 space-y-2 pb-3">
                  <div className="h-3 bg-gray-100 rounded-full w-4/5" />
                  <div className="h-3 bg-[#E8F8FF] rounded-full w-3/5" />
                </div>

                {/* Skill tags */}
                <div className="px-4 pb-4">
                  <div className="flex gap-2 flex-wrap">
                    {['React', 'Node.js', 'Python'].map(t => (
                      <span
                        key={t}
                        className="text-[9px] bg-[#1E3E85]/10 text-[#1E3E85] rounded-full py-1 px-2.5 font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider + status */}
                <div className="px-4 pb-4">
                  <div className="h-px bg-gray-100 mb-2" />
                  <div className="flex justify-between text-[9px] text-gray-400">
                    <span>42 applicants</span>
                    <span className="text-green-500 font-semibold">● Active</span>
                  </div>
                </div>
              </div>

              {/* ── Floating card 1 — "Web Developer / Telonious Gru" ── */}
              <div
                className="absolute"
                style={{ right: '-10px', top: '120px', zIndex: 30 }}
              >
                <ProfileCard
                  tag="Web Developer"
                  name="Telonious Gru"
                  role="Developer"
                  avatar="TG"
                  delay={0.25}
                />
              </div>

              {/* ── Floating card 2 — "Front End Wizard / Mel Muselphiem" ── */}
              <div
                className="absolute"
                style={{ right: '-10px', bottom: '20px', zIndex: 30 }}
              >
                <ProfileCard
                  tag="Front End Wizard"
                  name="Mel Muselphiem"
                  role="Front End Wizard"
                  avatar="MM"
                  delay={0.45}
                />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ── Responsive overrides ── */}
      <style>{`
        @keyframes f1FadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0);   }
        }

        /* Shrink the canvas on small screens so cards don't overflow */
        @media (max-width: 480px) {
          #f1-canvas {
            transform: scale(0.82);
            transform-origin: top center;
          }
        }
      `}</style>
    </section>
  );
};

export default Feature1;