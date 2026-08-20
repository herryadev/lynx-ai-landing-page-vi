import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {Geist, Geist_Mono} from 'next/font/google';
import '../globals.css';
import {routing, type Locale} from '@/i18n/routing';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

const SITE_URL = 'https://lynxsolution.vn';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: Locale}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta'});
  const path = locale === routing.defaultLocale ? '/' : `/${locale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: path,
      languages: {
        vi: '/',
        en: '/en',
        'x-default': '/'
      }
    },
    openGraph: {
      type: 'website',
      siteName: 'Lynx AI Solution',
      locale: locale === 'en' ? 'en_US' : 'vi_VN',
      url: path,
      title: t('title'),
      description: t('description')
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/favicon.ico'
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          // Phạm vi kinh doanh cho crawler và bộ phận thẩm định của nền tảng:
          // dịch vụ phần mềm/AI, kèm thương hiệu bán lẻ TikTok Shop của chính công ty.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Lynx AI Solution',
              url: SITE_URL,
              description:
                'Vietnamese software & AI company delivering AI operations, customer care, sales automation and e-commerce/retail analytics. Owns and operates its own TikTok Shop retail brand, Chom Chom Studio.',
              knowsAbout: [
                'AI for business operations',
                'Customer service automation',
                'Sales automation',
                'E-commerce analytics',
                'TikTok Shop operations',
                'Retail business intelligence'
              ],
              brand: {
                '@type': 'Brand',
                name: 'Chom Chom Studio',
                url: 'https://chomchom.com.vn',
                description:
                  "Women's fashion retail brand owned and operated by Lynx AI Solution on TikTok Shop."
              }
            })
          }}
        />
      </body>
    </html>
  );
}

