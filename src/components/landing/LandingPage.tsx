'use client';

import {useTranslations} from 'next-intl';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {Container} from './Container';
import {Header} from './Header';
import {Footer} from './Footer';
import {Button} from './Button';

export function LandingPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <a id="top" />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-zinc-200 bg-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(231,138,83,0.15),_transparent_70%)] blur-3xl" />
          </div>
          <Container className="relative py-16 sm:py-20">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
              <motion.div
                className="text-center lg:text-left"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
              >
                <p className="text-base font-semibold uppercase tracking-wider text-zinc-500">
                  {t('hero.kicker')}
                </p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                  {t('hero.headline')}
                </h1>
                <p className="mt-4 text-base leading-7 text-zinc-600">
                  {t('hero.description')}
                </p>
                <div className="mt-6 flex justify-center lg:justify-start">
                  <a href="https://zalo.me/091220001" target="_blank" rel="noopener noreferrer">
                    <Button>{t('hero.cta')}</Button>
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 lg:h-96"
                initial={{opacity: 0, x: 20}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.5, delay: 0.2}}
              >
                <Image
                  src="/img/img1.jpg"
                  alt="Modern office workspace"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </Container>
        </section>

        {/* About */}
        <section id="about" className="border-b border-zinc-200 bg-white">
          <Container className="py-12 sm:py-16">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
              <motion.div
                className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 lg:order-1 order-2 lg:h-96"
                initial={{opacity: 0, x: -20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
              >
                <Image
                  src="/img/img2.jpg"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                className="lg:order-2 order-1"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
              >
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {t('about.title')}
                </h2>
                <p className="mt-4 text-base leading-7 text-zinc-600">
                  {t('about.body1')}
                </p>
                <p className="mt-2 text-base leading-7 text-zinc-600">
                  {t('about.body2')}
                </p>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Services */}
        <section id="services" className="border-b border-zinc-200 bg-zinc-50/50">
          <Container className="py-12 sm:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {t('services.title')}
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                {t('services.description')}
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {['ai', 'crm', 'web', 'blockchain', 'outsourcing'].map((key) => (
                <motion.article
                  key={key}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 text-left"
                  initial={{opacity: 0, y: 16}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                >
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
                    {t(`services.items.${key}.title`)}
                  </h3>
                  <p className="mt-3 text-base leading-6 text-zinc-600">
                    {t(`services.items.${key}.desc`)}
                  </p>
                </motion.article>
              ))}
            </div>
          </Container>
        </section>

        {/* Why choose us */}
        <section id="why" className="border-b border-zinc-200 bg-white">
          <Container className="py-12 sm:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {t('why.title')}
              </h2>
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
              <div className="mx-auto max-w-3xl space-y-4 text-base leading-6 text-zinc-600 lg:max-w-none">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="flex gap-3 text-left"
                    initial={{opacity: 0, y: 12}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                  >
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-primary)]" />
                    <p>{t(`why.points.${i}`)}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 lg:h-96"
                initial={{opacity: 0, x: 20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
              >
                <Image
                  src="/img/img3.jpg"
                  alt="Modern office environment"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section id="contact" className="border-b border-zinc-200 bg-[var(--color-primary-soft)]/60">
          <Container className="py-14 sm:py-20">
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t('cta.title')}
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-700">
                {t('cta.description')}
              </p>
              <div className="mt-8 flex justify-center">
                <a href="https://zalo.me/091220001" target="_blank" rel="noopener noreferrer">
                  <Button>{t('cta.button')}</Button>
                </a>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
