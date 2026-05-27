import { useState, useEffect } from 'react';
import { navLinks } from '../data/portfolio';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 140) setActive(s.id);
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'py-4'
        } bg-bg/90 backdrop-blur-xl border-b border-border`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-sm text-accent tracking-widest shrink-0 hover:opacity-80 transition-opacity"
          >
            dev.portfolio
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`font-mono text-[12px] tracking-widest uppercase relative group transition-colors duration-200 ${
                    active === link.href.slice(1)
                      ? 'text-accent'
                      : 'text-white hover:text-accent'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                      active === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="reactjs35@gmail.com"
            className="hidden md:block font-mono text-[12px] text-bg bg-accent px-4 lg:px-5 py-2.5 tracking-widest uppercase clip-skew hover:opacity-80 active:scale-95 transition-all duration-150 shrink-0"
          >
            Hire Me
          </a>

          {/* Mobile: right side */}
          <div className="md:hidden flex items-center gap-3">
            {/* Small hire me pill on mobile */}
            <a
              href="mailto:reactjs35@gmail.com"
              className="font-mono text-[10px] text-bg bg-accent px-3 py-1.5 tracking-widest uppercase clip-skew-sm hover:opacity-80 transition-opacity"
            >
              Hire Me
            </a>

            {/* Hamburger button */}
            <button
              onClick={() => setOpen(!open)}
              className="flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded border border-border bg-card hover:border-accent transition-colors duration-200 shrink-0"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span
                className={`block w-4 h-px bg-light origin-center transition-all duration-300 ${
                  open ? 'rotate-45 translate-y-[3px]' : ''
                }`}
              />
              <span
                className={`block w-4 h-px bg-light transition-all duration-300 ${
                  open ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block w-4 h-px bg-light origin-center transition-all duration-300 ${
                  open ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(8,8,16,0.6)', backdropFilter: 'blur(4px)' }}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer panel */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[85vw] bg-surface border-l border-border flex flex-col transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <span className="font-mono text-xs text-accent tracking-widest">dev.portfolio</span>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 flex items-center justify-center border border-border bg-card hover:border-accent transition-colors duration-200 text-muted hover:text-accent font-mono text-sm"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Nav links */}
        <ul className="flex flex-col px-6 py-8 gap-1 flex-1">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 font-mono text-sm tracking-widest uppercase py-2 px-2 border-l-2 transition-all duration-200 ${
                  active === link.href.slice(1)
                    ? 'border-accent text-accent bg-accent/5'
                    : 'border-transparent text-muted hover:text-accent hover:border-accent hover:bg-accent/5'
                }`}
                style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
              >
                <span className="font-mono text-[10px] text-muted/50 w-5">0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Drawer footer */}
        <div className="px-6 py-6 border-t border-border">
          <a
            href="mailto:reactjs35@gmail.com"
            className="block w-full text-center font-mono text-xs text-bg bg-accent py-3 tracking-widest uppercase clip-skew hover:opacity-80 transition-opacity"
          >
            Hire Me
          </a>
          <p className="font-mono text-[10px] text-muted text-center mt-4 tracking-wider">
            © 2025 dev.portfolio
          </p>
        </div>
      </div>
    </>
  );
}
