'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {ArrowRight} from 'lucide-react';
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
        {/* Hero - compact, brand only */}
        <section className="relative overflow-hidden border-b border-zinc-200 bg-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(231,138,83,0.15),_transparent_70%)] blur-3xl" />
          </div>
          <Container className="relative py-12 sm:py-16">
            <motion.div
              className="text-center"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5}}
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                {t('hero.kicker')}
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {t('hero.brand')}
              </h1>
            </motion.div>
          </Container>
        </section>

        {/* Lĩnh vực kinh doanh - 2 blocks like Sun* */}
        <section id="business" className="border-b border-zinc-200 bg-white">
          <Container className="py-12 sm:py-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t('business.title')}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600">
              {t('business.intro')}
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <motion.a
                href="#projects"
                className="group block rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 transition-all hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-primary-soft)]/30 hover:shadow-md"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  {t('business.creative.label')}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">
                  {t('business.creative.title')}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {t('business.creative.desc')}
                </p>
                <span className="mt-6 inline-flex items-center text-sm font-semibold text-[var(--color-primary)] group-hover:underline">
                  {t('business.creative.cta')}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </motion.a>
              <motion.a
                href="#careers"
                className="group block rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 transition-all hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-primary-soft)]/30 hover:shadow-md"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  {t('business.talent.label')}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950">
                  {t('business.talent.title')}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {t('business.talent.desc')}
                </p>
                <span className="mt-6 inline-flex items-center text-sm font-semibold text-[var(--color-primary)] group-hover:underline">
                  {t('business.talent.cta')}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </motion.a>
            </div>
          </Container>
        </section>

        {/* Dự án của chúng tôi - stats + 3 cards */}
        <section id="projects" className="border-b border-zinc-200 bg-zinc-50/50">
          <Container className="py-12 sm:py-16">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="flex gap-10">
                <div>
                  <p className="text-4xl font-bold tracking-tight text-zinc-950">200</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-zinc-500">++</p>
                  <p className="mt-1 text-sm text-zinc-600">{t('projects.statsPartners')}</p>
                </div>
                <div>
                  <p className="text-4xl font-bold tracking-tight text-zinc-950">300</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-zinc-500">++</p>
                  <p className="mt-1 text-sm text-zinc-600">{t('projects.statsServices')}</p>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                {t('common.viewAllProjects')}
              </a>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <motion.article
                  key={i}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md"
                  initial={{opacity: 0, y: 16}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {t('projects.cardLabel')}
                  </p>
                  <p className="mt-2 text-sm font-medium text-zinc-700">
                    {t(`projects.items.${i}.client`)}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">
                    {t(`projects.items.${i}.name`)}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {t(`projects.items.${i}.desc`)}
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--color-primary)] hover:underline"
                  >
                    {t('common.viewDetail')}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </motion.article>
              ))}
            </div>
          </Container>
        </section>

        {/* Cơ hội nghề nghiệp - banner */}
        <section id="careers" className="border-b border-zinc-200 bg-[var(--color-primary-soft)]/50">
          <Container className="py-14 sm:py-20">
            <motion.div
              className="text-center"
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-zinc-600">
                {t('careers.title')}
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl">
                {t('careers.headline')}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-600">
                {t('careers.desc')}
              </p>
              <div className="mt-8">
                <a href="#">
                  <Button>{t('common.joinUs')}</Button>
                </a>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Môi trường làm việc - 3 hashtags */}
        <section id="environment" className="border-b border-zinc-200 bg-white">
          <Container className="py-12 sm:py-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t('environment.title')}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {(['activeChallenge', 'activeLearn', 'activeJoy'] as const).map((key) => (
                <motion.div
                  key={key}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6"
                  initial={{opacity: 0, y: 12}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                >
                  <p className="text-sm font-bold text-[var(--color-primary)]">
                    {t(`environment.${key}.tag`)}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {t(`environment.${key}.desc`)}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                {t('environment.cta')}
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </Container>
        </section>

        {/* Văn hóa - Sự kiện */}
        <section id="news" className="border-b border-zinc-200 bg-zinc-50/50">
          <Container className="py-12 sm:py-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t('culture.title')}
            </h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <motion.article
                  key={i}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md"
                  initial={{opacity: 0, y: 16}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {t(`culture.items.${i}.tag`)}
                  </p>
                  <h3 className="mt-3 text-base font-semibold tracking-tight">
                    {t(`culture.items.${i}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 line-clamp-3">
                    {t(`culture.items.${i}.excerpt`)}
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--color-primary)] hover:underline"
                  >
                    {t('common.viewDetail')}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </motion.article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-semibold text-zinc-700 hover:text-[var(--color-primary)]"
              >
                {t('common.viewMoreNews')}
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
