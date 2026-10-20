import { useEffect, useState } from 'react';
import { Logo } from './ui';

const links = [
  { href: '#features', label: 'Продукт' },
  { href: '#use-cases', label: 'Сценарии' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#testimonials', label: 'Отзывы' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <a
          href="#top"
          aria-label="Agentive — на главную">
          <Logo />
        </a>
        <nav
          aria-label="Основная навигация"
          className="hidden md:block">
          <ul className="flex gap-8 text-sm text-ink/70">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  className="rounded hover:text-ink"
                  href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#pricing"
            className="text-sm text-ink/70 hover:text-ink">
            Войти
          </a>
          <a
            href="#pricing"
            className="btn min-h-[36px] bg-ink px-4 text-white hover:bg-black">
            Начать бесплатно →
          </a>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setOpen((v) => !v)}>
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M10 17h10" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Мобильная навигация"
          className="border-t border-line bg-white md:hidden">
          <ul className="container-x flex flex-col py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base"
                  href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                onClick={() => setOpen(false)}
                href="#pricing"
                className="btn-primary w-full">
                Начать бесплатно →
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
