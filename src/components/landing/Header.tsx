import {useTranslations} from 'next-intl';
import {Container} from './Container';

const navItems = [
  {key: 'home', href: '#top'},
  {key: 'about', href: '#business'},
  {key: 'projects', href: '#projects'},
  {key: 'careers', href: '#careers'},
  {key: 'environment', href: '#environment'},
  {key: 'news', href: '#news'}
] as const;

export function Header() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 font-semibold tracking-tight text-zinc-950"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-zinc-950 text-white">
            L
          </span>
          <span className="hidden sm:block">Lynx Solution</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#d97840]"
          >
            {t('nav.contact')}
          </a>
        </nav>

        <div className="flex items-center gap-3" />
      </Container>
    </header>
  );
}

