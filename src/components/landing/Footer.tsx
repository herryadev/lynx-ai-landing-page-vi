import {useTranslations} from 'next-intl';
import Image from 'next/image';
import {Container} from './Container';

const navItems = [
  {key: 'about', href: '#about'},
  {key: 'services', href: '#services'},
  {key: 'why', href: '#why'},
  {key: 'contact', href: '#contact'}
] as const;

export function Footer() {
  const t = useTranslations();

  return (
    <footer id="contact" className="border-t border-zinc-200 bg-white">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/img/logo.jpg"
                alt="Lynx Solution logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-base font-semibold text-zinc-950">Liên kết</h3>
            <ul className="mt-3 space-y-2 text-base text-zinc-600">
              {navItems.map((item) => (
                <li key={item.key}>
                  <a href={item.href} className="hover:text-zinc-950 hover:underline">
                    {t(`nav.${item.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold text-zinc-950">
              {t('footer.contactTitle')}
            </h3>
            <ul className="mt-3 space-y-2 text-base text-zinc-600">
              <li>
                {t('footer.phone')}: <a href="https://zalo.me/0912205001" className="hover:text-zinc-950 hover:underline">0912205001</a>
              </li>
              <li>
                {t('footer.email')}: <a href="mailto:info@lynxsolution.vn" className="hover:text-zinc-950 hover:underline">info@lynxsolution.vn</a>
              </li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="text-base font-semibold text-zinc-950">
              {t('footer.offices')}
            </h3>
            <ul className="mt-3 space-y-2 text-base text-zinc-600">
              {[0].map((i) => (
                <li key={i}>{t(`footer.officesList.${i}`)}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <div className="border-t border-zinc-200">
        <Container className="py-6 text-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Lynx Solution. {t('footer.copyright')}</p>
        </Container>
      </div>
    </footer>
  );
}
