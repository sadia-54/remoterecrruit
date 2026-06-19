import React from 'react';

const Footer = () => {
  const socials = [
    {
      label: 'Facebook',
      href: 'https://facebook.com',
      path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com',
      path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com',
      path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z',
    },
    {
      label: 'YouTube',
      href: 'https://youtube.com',
      path: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z',
    },
  ];

  return (
    <footer className="bg-[#1E3E85] border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex flex-col leading-none">
          <img src="/logo.png" alt="RemoteRecruit" className="w-24 h-auto" />
        </div>

        <p className="text-white/40 text-sm text-center">
          &copy; {new Date().getFullYear()} RemoteRecruit. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socials.map(function(social) {
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#52B4DA] transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={social.path} />
                </svg>
              </a>
            );
          })}
        </div>

      </div>
    </footer>
  );
};

export default Footer;