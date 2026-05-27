import Reveal from './Reveal';
import { projects } from '../data/portfolio';

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 60}>
      <div className="group relative bg-bg p-6 overflow-hidden transition-colors duration-300 hover:bg-card h-full flex flex-col ">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        <div className="font-mono text-xs tracking-widest text-border group-hover:text-accent transition-colors duration-300 mb-4">
          {project.num}
        </div>
        <div className="text-4xl mb-4 select-none">{project.icon}</div>
        <h3 className="text-lg font-bold tracking-tight mb-2">{project.name}</h3>
        <p className="text-muted text-sm leading-[1.75] mb-4 flex-1">{project.desc}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map(t => (
            <span key={t} className="font-mono text-[10px] text-muted bg-surface px-2 py-0.5 tracking-wide">
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.href}
          className="font-mono text-xs text-accent tracking-widest flex items-center gap-2 group/link"
        >
          <span>View Project</span>
          <span className="transition-transform duration-200 group-hover/link:translate-x-1.5">→</span>
        </a>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-8 py-24 bg-surface border-t border-border max-w-7xl mx-auto">
      <Reveal>
        <div className="mb-14">
          <div className="flex items-center gap-3 font-mono text-xs text-accent tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-px bg-accent" />My Work
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Selected{' '}
            <span style={{ WebkitTextStroke: '1.5px #d4d4e8', color: 'transparent' }}>Projects</span>
          </h2>
        </div>
      </Reveal>

      <div
        className="grid md:grid-cols-3 gap-px"
        style={{ background: '#1c1c2e' }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
