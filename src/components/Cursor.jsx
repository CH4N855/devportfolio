import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px';
        dot.current.style.top = e.clientY + 'px';
      }
      setTimeout(() => {
        if (ring.current) {
          ring.current.style.left = e.clientX + 'px';
          ring.current.style.top = e.clientY + 'px';
        }
      }, 60);
    };

    const onEnter = () => {
      dot.current?.classList.add('!w-5', '!h-5');
    };
    const onLeave = () => {
      dot.current?.classList.remove('!w-5', '!h-5');
    };

    document.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="fixed top-0 left-0 w-3 h-3 bg-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-150 mix-blend-difference"
        style={{ background: '#00e5ff' }}
      />
      <div
        ref={ring}
        className="fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-100 opacity-40"
        style={{ border: '1.5px solid #00e5ff' }}
      />
    </>
  );
}
