import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Container } from './Container';
import { Button } from './Button';

const navItems = [
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'why', href: '#why' }
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
            src="/img/logo.png"
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
          <a href="https://zalo.me/0912205001" target="_blank" rel="noopener noreferrer">
            <Button>{t('nav.contact')}</Button>
          </a>
        </nav>

      </Container>
    </header>
  );
}

