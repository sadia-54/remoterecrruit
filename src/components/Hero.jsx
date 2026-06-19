import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.classList.add('opacity-0', 'translate-y-4');
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      el.classList.remove('opacity-0', 'translate-y-4');
    });
  }, []);

  return (
    <section
      id="features"
      className="relative bg-[#1E3E85] pt-40 pb-[250px] overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #1E3E85 0%, #2a52a8 50%, #1a5a8a 100%)',
      }}
    >
      {/* Decorative circles */}
      {/* Top Left Circle */}
      <div className="absolute -top-[280px] -left-[120px] w-[400px] h-[400px] rounded-full bg-white/[0.03]" />

      {/* Bottom Circle */}
      <div className="absolute bottom-[-300px] left-1/2 -translate-x-1/2 w-[400px] h-[600px] rounded-full bg-white/[0.04]" />

      <div ref={heroRef} className="relative max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
          RemoteRecruit's Difference
        </h1>
        <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
          RemoteRecruit is connecting the world with an easy-to-use platform that lets
          full-time, part-time, and freelance workers showcase their talents to businesses
          that need them. With no paywalls, no fees, and no barriers, there's nothing but
          you, your talents, and the next step in your career.
        </p>
      </div>

      {/* White wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      className="w-full h-56 fill-white"
    >
      <path
        d="
          M0,120
          C300,180 500,170 700,70
          C900,-20 1200,20 1440,90
          L1440,200
          L0,200
          Z
        "
      />
    </svg>
      </div>
    </section>
  );
};

export default Hero;
