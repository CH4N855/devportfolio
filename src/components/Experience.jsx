import Reveal from './Reveal';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen px-8 py-24 border-t border-border max-w-7xl mx-auto">
      <Reveal>
        <div className="mb-14">
          <div className="flex items-center gap-3 font-mono text-xs text-accent tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-px bg-accent" />Work History
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            My{' '}
            <span style={{ WebkitTextStroke: '1.5px #d4d4e8', color: 'transparent' }}>Experience</span>
          </h2>
        </div>
      </Reveal>

      <div className="relative pl-6 timeline-line">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 100}>
            <div className="relative grid md:grid-cols-[180px_1fr] gap-6 pb-14">
              {/* dot */}
              <div
                className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full"
                style={{ background: '#00e5ff', boxShadow: '0 0 14px rgba(0,229,255,0.6)' }}
              />

              <div className="font-mono text-xs text-accent tracking-wider pt-1">{exp.date}</div>

              <div>
                <div className="font-mono text-[11px] text-accent2 tracking-[0.12em] uppercase mb-1">{exp.company}</div>
                <h3 className="text-xl font-bold tracking-tight mb-3">{exp.role}</h3>
                <p className="text-muted text-sm leading-[1.8] mb-4">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wider border px-2.5 py-1"
                      style={{ color: '#a78bfa', borderColor: '#a78bfa66' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
