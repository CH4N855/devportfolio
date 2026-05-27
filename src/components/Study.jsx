import Reveal from './Reveal';
import { education, certifications } from '../data/portfolio';

export default function Study() {
  return (
    <section id="study" className="min-h-screen px-8 py-24 border-t border-border max-w-7xl mx-auto">
      <Reveal>
        <div className="mb-14">
          <div className="flex items-center gap-3 font-mono text-xs text-accent tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-px bg-accent" />Education
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            My{' '}
            <span style={{ WebkitTextStroke: '1.5px #d4d4e8', color: 'transparent' }}>Study</span>
          </h2>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-xs text-accent tracking-[0.15em] uppercase mb-6">
              Formal Education
              <span className="flex-1 h-px bg-border" />
            </div>
          </Reveal>

          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 100}>
              <div className="border border-border bg-card p-6 mb-4 hover:border-accent transition-colors duration-200">
                <div className="font-mono text-[10px] text-accent tracking-widest mb-2">{edu.year}</div>
                <h3 className="text-lg font-bold tracking-tight mb-1">{edu.degree}</h3>
                <p className="text-sm font-mono text-muted mb-3">{edu.school}</p>
                <p className="text-sm text-muted leading-[1.7]">{edu.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-xs text-accent tracking-[0.15em] uppercase mb-6">
              Certifications
              <span className="flex-1 h-px bg-border" />
            </div>
          </Reveal>

          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 80}>
              <div className="border border-border bg-card p-4 mb-3 flex items-center gap-4 hover:border-accent/50 transition-colors duration-200 group">
                <div className="w-11 h-11 bg-surface border border-border flex items-center justify-center text-xl flex-shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold mb-0.5 group-hover:text-accent transition-colors duration-200">
                    {cert.name}
                  </div>
                  <div className="font-mono text-[10px] tracking-wider" style={{ color: '#a78bfa' }}>
                    {cert.issuer}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
