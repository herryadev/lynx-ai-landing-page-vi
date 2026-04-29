import { routing, type Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import "../new2.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = t("title");
  const description = t("description");
  const siteUrl = "https://lynxsolution.vn";
  const localePath = locale === routing.defaultLocale ? "" : `/${locale}`;
  const canonicalUrl = `${siteUrl}${localePath || "/"}`;
  const ogImage = `${siteUrl}/thumbnail1.webp?v=20260429`;

  return {
    metadataBase: new URL(siteUrl),
    applicationName: "Lynx Solution",
    title,
    description,
    keywords:
      locale === "vi"
        ? [
            "AI doanh nghiệp",
            "chăm sóc khách hàng AI",
            "sales tự động",
            "marketing AI",
            "Zalo automation",
            "quản lý tồn kho AI",
            "báo cáo thu chi tự động",
            "Lynx Solution",
          ]
        : [
            "business AI",
            "AI customer care",
            "sales automation",
            "AI marketing",
            "Zalo automation",
            "inventory management AI",
            "automated reporting",
            "Lynx Solution",
          ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        vi: `${siteUrl}/`,
        en: `${siteUrl}/en`,
        "x-default": `${siteUrl}/`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Lynx Solution",
      locale: locale === "vi" ? "vi_VN" : "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: ogImage, alt: title }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: { url: "/favicon.ico", sizes: "any" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  const messages = await getMessages();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Lynx Solution",
      url: "https://lynxsolution.vn",
      logo: "https://lynxsolution.vn/thumbnail1.webp",
      sameAs: ["https://zalo.me/lynxsolution"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["Vietnamese", "English"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Lynx Solution",
      url: "https://lynxsolution.vn",
    },
  ];

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--cream)] text-[var(--ink)] selection:bg-[var(--orange)] selection:text-white`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
