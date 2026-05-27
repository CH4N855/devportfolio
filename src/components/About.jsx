import Reveal from './Reveal';
import { skills, info } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto min-h-screen px-8 py-24 bg-surface border-t border-border">
      <Reveal>
        <div className="mb-14">
          <div className="flex items-center gap-3 font-mono text-xs text-accent tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-px bg-accent" />Who I Am
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            About{' '}
            <span style={{ WebkitTextStroke: '1.5px #d4d4e8', color: 'transparent' }}>Me</span>
          </h2>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">
        {/* Image */}
        <Reveal>
          <div className="relative w-full pb-[110%] bg-card border border-border overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-8xl"
              style={{ background: 'linear-gradient(160deg, #0f0f1a, #080810)' }}>
              👨‍💻
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(90deg, #00e5ff, #7c3aed)' }} />
          </div>
        </Reveal>

        {/* Content */}
        <div>
          <Reveal>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {info.map(item => (
                <div key={item.label}>
                  <div className="font-mono text-[10px] text-accent tracking-widest uppercase mb-1">{item.label}</div>
                  <div className={`text-sm ${item.accent ? 'text-accent' : 'text-light'}`}>{item.value}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="text-muted leading-[1.9] mb-5 text-sm">
              I'm a passionate web developer with{' '}
              <strong className="text-light font-bold">4+ years of experience</strong> crafting modern
              web applications. I specialize in the full JavaScript stack — from reactive frontends
              with <strong className="text-light font-bold">React and Vue</strong>, to scalable backends
              with <strong className="text-light font-bold">Node.js and PostgreSQL</strong>.
            </p>
            <p className="text-muted leading-[1.9] mb-8 text-sm">
              I care deeply about <strong className="text-light font-bold">developer experience,
              accessibility, and performance</strong>. Whether it's a pixel-perfect UI or a robust API,
              I bring the same craftsmanship to every layer of the stack.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {skills.map(skill => (
                <div
                  key={skill}
                  className=" text-[12px] text-white border border-border bg-card px-2 py-2 text-center tracking-wider hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
