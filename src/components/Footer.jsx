export default function Footer() {
  const links = [
    { label: 'GitHub', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'Email', href: 'mailto:alex@example.com' },
  ];

  return (
    <footer className="bg-surface border-t border-border px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
      <p className="font-mono text-xs text-muted tracking-wider">
        © 2025 <span className="text-accent">dev.portfolio</span> — Built with React + Vite + Tailwind ☕
      </p>
      <ul className="flex gap-6">
        {links.map(l => (
          <li key={l.label}>
            <a href={l.href} className="font-mono text-xs text-muted hover:text-accent transition-colors tracking-wider">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
