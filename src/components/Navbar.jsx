import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#1E3E85] shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col leading-none">
          <img src="/logo.png" alt="RemoteRecruit" className="w-24 h-auto" />
        </div>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-white text-sm font-medium px-4 py-2 rounded-full  hover:text-[#4DA8CC] transition-colors duration-200">
            Sign In
          </button>
          <button className="bg-[#4DA8CC] text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-[#4DA8CCE3] transition-colors duration-200 shadow-lg">
            Sign Up
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#1E3E85] border-t border-white/10 px-6 pb-4">
  
          <div className="flex gap-3 pt-4">
            <button className="flex-1 text-white text-sm font-medium px-5 py-2 rounded-full">Sign In</button>
            <button className="flex-1 bg-[#4DA8CC] text-white text-sm font-medium px-5 py-2 rounded-full">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
