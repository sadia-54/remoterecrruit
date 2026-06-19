import { useEffect, useRef } from 'react';

const useScrollReveal = (direction = 'up') => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translate(0,0)';
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    el.style.opacity = '0';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    if (direction === 'left') el.style.transform = 'translateX(-50px)';
    else if (direction === 'right') el.style.transform = 'translateX(50px)';
    else el.style.transform = 'translateY(40px)';

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction]);

  return ref;
};

export default useScrollReveal;
