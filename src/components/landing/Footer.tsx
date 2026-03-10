import {useTranslations} from 'next-intl';
import {Container} from './Container';

export function Footer() {
  const t = useTranslations();

  return (
    <footer id="contact" className="border-t border-zinc-200 bg-white">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <div className="flex items-center gap-2 font-semibold text-zinc-950">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-zinc-950 text-white">
              L
            </span>
            <span>Lynx Solution</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-zinc-950">
            {t('footer.whoWeAre')}
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            {[0, 1, 2].map((i) => (
              <li key={i}>
                <a href="#" className="hover:text-zinc-950 hover:underline">
                  {t(`footer.whoLinks.${i}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-zinc-950">
            {t('footer.whatWeDo')}
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            {[0, 1, 2].map((i) => (
              <li key={i}>
                <a href="#" className="hover:text-zinc-950 hover:underline">
                  {t(`footer.whatLinks.${i}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-zinc-950">
            {t('footer.newsUpdate')}
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            {[0, 1, 2].map((i) => (
              <li key={i}>
                <a href="#" className="hover:text-zinc-950 hover:underline">
                  {t(`footer.newsLinks.${i}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-zinc-950">
            {t('footer.contactTitle')}
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            <li>{t('footer.phone')}: 84-24-0000-0000</li>
            <li>{t('footer.email')}: contact@lynxsolution.vn</li>
          </ul>
          <h3 className="mt-6 text-sm font-semibold text-zinc-950">
            {t('footer.offices')}
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            {[0, 1, 2].map((i) => (
              <li key={i}>{t(`footer.officesList.${i}`)}</li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-zinc-200">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-center text-xs text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Lynx Solution. {t('footer.copyright')}</p>
          <a
            href="#careers"
            className="font-semibold text-[var(--color-primary)] hover:underline"
          >
            {t('footer.joinUs')}
          </a>
        </Container>
      </div>
    </footer>
  );
}
