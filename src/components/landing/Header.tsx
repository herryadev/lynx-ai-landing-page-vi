import {useTranslations} from 'next-intl';
import Image from 'next/image';
import {Container} from './Container';

const navItems = [
  {key: 'about', href: '#about'},
  {key: 'services', href: '#services'},
  {key: 'why', href: '#why'}
] as const;

export function Header() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 font-semibold tracking-tight text-zinc-950 "
        >
          <Image
            src="/img/logo.jpg"
            alt="Lynx Solution logo"
            width={120}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-base font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#d97840]"
          >
            {t('nav.contact')}
          </a>
        </nav>

      </Container>
    </header>
  );
}

