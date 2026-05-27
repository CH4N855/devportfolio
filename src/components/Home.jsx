import { stats } from '../data/portfolio';

const badges = ['React.js', 'Node.js', 'UI/UX Design'];

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen grid md:grid-cols-2 items-center gap-12 px-8 pt-28 pb-16 relative overflow-hidden max-w-7xl mx-auto"
    >
      {/* Glowing orb bg */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,61,113,0.06) 0%, transparent 70%)' }} />

      {/* Text */}
      <div className="max-w-xl z-10">
        <div className="flex items-center gap-3 font-mono text-xs text-accent tracking-[0.2em] uppercase mb-6">
          <span className="w-8 h-px bg-accent inline-block" />
          Available for work
        </div>

        <h1 className="text-4xl md:text-5xl font-black leading-none tracking-tight mb-6 overflow-hidden">
          <span className="block overflow-hidden">
            <span className="block animate-slide-up">Building</span>
          </span>
          <span className="block overflow-hidden" style={{ animationDelay: '0.1s' }}>
            <span className="block animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Digital{' '}
              <span className="text-stroke" style={{ WebkitTextStroke: '1.5px #00e5ff', color: 'transparent' }}>
                Worlds
              </span>
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="block animate-slide-up" style={{ animationDelay: '0.2s' }}>with Code.</span>
          </span>
        </h1>

        <p className="text-muted leading-relaxed mb-8 max-w-md animate-fade-in" style={{ animationDelay: '0.4s' }}>
          I'm a <strong className="text-light font-bold">Full-Stack Web Developer</strong> who turns complex ideas into clean,
          fast, and beautiful digital experiences. Passionate about performance, design systems,
          and writing code that lasts.
        </p>

        <div className="flex gap-4 items-center animate-fade-in" style={{ animationDelay: '0.55s' }}>
          <a href="#projects"
            className="font-mono text-xs text-bg bg-accent px-7 py-3.5 tracking-widest uppercase clip-skew hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,229,255,0.3)] transition-all duration-200">
            View Projects
          </a>
          <a href="#about"
            className="font-mono text-xs text-light border border-border px-7 py-3.5 tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-200">
            About Me
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-10 mt-10 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.7s' }}>
          {stats.map(s => (
            <div key={s.label}>
              <div className="text-3xl font-black text-accent leading-none mb-1">{s.num}</div>
              <div className="font-mono text-[10px] text-muted tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual */}
      <div className="hidden md:flex items-center justify-center z-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="relative w-80 h-96">
          {/* bg shape */}
          <div className="absolute inset-0 opacity-10 rounded-sm"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #00e5ff)', clipPath: 'polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)' }} />
          {/* border */}
          <div className="absolute inset-2 opacity-30 animate-pulse-slow"
            style={{ border: '1px solid #00e5ff', clipPath: 'polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)' }} />
          {/* Inner */}
          <div className="absolute inset-6 bg-surface flex items-center justify-center"
            style={{ clipPath: 'polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)' }}>
            <span className="text-8xl select-none">👨‍💻</span>
          </div>

          {/* Floating badges */}
          {badges.map((b, i) => (
            <div
              key={b}
              className="absolute bg-card border border-border font-mono text-[10px] text-accent tracking-wider px-3 py-2 animate-float"
              style={{
                animationDelay: `${i * 0.7}s`,
                ...(i === 0 && { top: '8%', right: '-8%' }),
                ...(i === 1 && { bottom: '22%', left: '-10%' }),
                ...(i === 2 && { bottom: '4%', right: '-2%', color: '#ffe066', borderColor: '#ffe066' }),
              }}
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
