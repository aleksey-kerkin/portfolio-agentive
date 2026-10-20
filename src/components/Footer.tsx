import { Logo } from './ui';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a12] pb-8 text-white/50">
      <div className="container-x flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm md:flex-row">
        <Logo light />
        <p>© 2026 Agentive. Проект для портфолио.</p>
      </div>
    </footer>
  );
}
