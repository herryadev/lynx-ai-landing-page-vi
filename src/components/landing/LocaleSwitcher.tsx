'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {Button} from './Button';

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 rounded-full border border-zinc-200 bg-white p-1">
      <Button
        type="button"
        variant={locale === 'vi' ? 'primary' : 'ghost'}
        className="h-9 px-3 text-xs"
        onClick={() => router.replace(pathname, {locale: 'vi'})}
      >
        VI
      </Button>
      <Button
        type="button"
        variant={locale === 'en' ? 'primary' : 'ghost'}
        className="h-9 px-3 text-xs"
        onClick={() => router.replace(pathname, {locale: 'en'})}
      >
        EN
      </Button>
    </div>
  );
}

