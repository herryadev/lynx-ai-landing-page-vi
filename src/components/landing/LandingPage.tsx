"use client";

import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { Footer } from "./Footer";
import { Header } from "./Header";

const SERVICE_KEYS = ["report", "sales", "customerCare", "content"] as const;
const TEAM_KEYS = ["ceo", "cco", "cto", "cmo"] as const;
const TEAM_IMAGE_SRC_BY_KEY: Record<(typeof TEAM_KEYS)[number], string> = {
  ceo: "/img/team/ceo2.jpeg",
  cco: "/img/team/cco2.jpeg",
  cto: "/img/team/cto2.jpeg",
  cmo: "/img/team/cmo2.png",
};

/** Video demo từng dịch vụ — sửa trực tiếp đường dẫn file tại đây. */
const DEMO_VIDEO_SRC_BY_SERVICE: Record<(typeof SERVICE_KEYS)[number], string> =
  {
    report: "/video/aireport.mp4",
    sales: "/video/aisales.mp4",
    customerCare: "/video/aicustomer.mp4",
    content: "/video/aicontent.mp4",
  };

const POPUP_VIDEO_SRC = "/video/tvc.mp4";

export function LandingPage() {
  const t = useTranslations();
  const [videoOpen, setVideoOpen] = useState(false);
  const [hoveredServiceKey, setHoveredServiceKey] = useState<
    (typeof SERVICE_KEYS)[number] | null
  >(null);
  const serviceVideoRefs = useRef<
    Partial<Record<(typeof SERVICE_KEYS)[number], HTMLVideoElement | null>>
  >({});

  useEffect(() => {
    SERVICE_KEYS.forEach((key) => {
      const el = serviceVideoRefs.current[key];
      if (!el) return;
      if (hoveredServiceKey === key) {
        void el.play().catch(() => {});
      } else {
        el.pause();
      }
    });
  }, [hoveredServiceKey]);

  const closeVideo = useCallback(() => {
    setVideoOpen(false);
  }, []);

  const openVideo = useCallback(() => {
    setVideoOpen(true);
  }, []);

  useEffect(() => {
    if (!videoOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [videoOpen]);

  useEffect(() => {
    if (!videoOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeVideo();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [videoOpen, closeVideo]);

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <a id="top" />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-zinc-200 bg-white">
          <Container className="relative z-10 py-16 sm:py-20">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-base font-semibold uppercase tracking-wider text-zinc-500">
                  {t("hero.kicker")}
                </p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                  {t("hero.headline")}
                </h2>
                <p className="mt-4 text-base leading-7 text-zinc-600">
                  {t("hero.description")}
                </p>
                <div className="mt-6 flex justify-center lg:justify-start">
                  <a
                    href="https://zalo.me/0912205001"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>{t("hero.cta")}</Button>
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="relative h-64 w-full overflow-hidden rounded-2xl border border-zinc-200/90 shadow-sm ring-1 ring-zinc-950/4 sm:h-80 lg:h-96"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="/img/img1.jpg"
                  alt={t("hero.imageAlt")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </div>
          </Container>

          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(231,138,83,0.15),transparent_70%)] blur-3xl" />
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="relative scroll-mt-20 overflow-hidden border-b border-zinc-200/90 bg-linear-to-b from-(--color-primary-soft)/90 via-white to-zinc-50/80"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(231,138,83,0.22),transparent_68%)] blur-3xl" />
            <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle_at_center,rgba(231,138,83,0.12),transparent_70%)] blur-3xl" />
          </div>
          <div className="relative w-full px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-(--color-primary)">
                {t("services.kicker")}
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                {t("services.headline")}
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl sm:leading-9">
                {t("services.description")}
              </p>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-4 xl:gap-6 lg:mt-16">
              {SERVICE_KEYS.map((key, index) => {
                const bullets = t.raw(
                  `services.items.${key}.bullets`,
                ) as string[];
                const n = String(index + 1).padStart(2, "0");
                return (
                  <motion.article
                    key={key}
                    className="group flex flex-col overflow-hidden rounded-2xl border-2 border-zinc-200/90 bg-white/95 text-left shadow-[0_20px_50px_-20px_rgba(24,24,27,0.25)] ring-1 ring-zinc-950/5 transition-[border-color,box-shadow,transform] duration-300 hover:border-(--color-primary)/40"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="flex items-start justify-between gap-4 border-b border-zinc-100 bg-zinc-50/80 px-6 py-5">
                      <div>
                        <h3 className="text-lg font-bold tracking-tight text-zinc-950 sm:text-2xl lg:text-xl">
                          {t(`services.items.${key}.title`)}
                        </h3>
                      </div>
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--color-primary) text-xs font-bold text-white shadow-sm ring-2 ring-(--color-primary)/20"
                        aria-hidden
                      >
                        {n}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6 pt-5">
                      <div className="">
                        <div
                          className="relative aspect-9/16 w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 shadow-inner ring-1 ring-zinc-950/20"
                          onMouseEnter={() => setHoveredServiceKey(key)}
                          onMouseLeave={() => setHoveredServiceKey(null)}
                        >
                          <video
                            ref={(el) => {
                              serviceVideoRefs.current[key] = el;
                            }}
                            className="h-full w-full object-contain"
                            src={DEMO_VIDEO_SRC_BY_SERVICE[key]}
                            playsInline
                            loop
                            preload="metadata"
                            aria-label={t(`services.items.${key}.videoLabel`)}
                          />
                        </div>
                      </div>
                      {/* <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                        {t(`services.items.${key}.videoLabel`)}
                      </p> */}
                      <ul className="space-y-2.5 text-base leading-6 text-zinc-600 pt-6 mt-6 border-t border-zinc-100">
                        {bullets.map((line, i) => (
                          <li key={i} className="flex gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-primary)" />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* EDUVIBE */}
        <section className="border-b border-zinc-200 bg-white">
          <Container className="py-12 sm:py-16">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
              <motion.div
                className="order-2 lg:order-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-(--color-primary)">
                  EDUVIBE
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Nền tảng học online dành cho người muốn học thật, làm thật
                </h2>
                <p className="mt-4 text-base leading-7 text-zinc-600">
                  Khám phá khoá học thực chiến với lộ trình rõ ràng, dễ bắt đầu
                  và có thể ứng dụng ngay vào công việc.
                </p>
                <div className="mt-6">
                  <a
                    href="https://edu.lynxsolution.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Khám phá khóa học</Button>
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="relative order-1 h-64 w-full overflow-hidden border-zinc-200/90 sm:h-80 lg:order-2 lg:h-96 rounded-2xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/img/edu.png"
                  alt="EDUVIBE nền tảng học online"
                  fill
                  className="object-contain rounded-2xl"
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
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {t("about.title")}
                </h2>
                <p className="mt-4 text-base leading-7 text-zinc-600">
                  {t("about.body1")}
                </p>
                <p className="mt-2 text-base leading-7 text-zinc-600">
                  {t("about.body2")}
                </p>
              </motion.div>
            </div>
            <div className="mt-8 sm:mt-10">
              <div className="mx-auto max-w-2xl text-center">
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                  {t("about.teamTitle")}
                </h3>
                <p className="mt-2 text-xs leading-5 text-zinc-600 sm:text-sm">
                  {t("about.teamDescription")}
                </p>
              </div>
              <div className="mx-auto mt-6 grid max-w-5xl grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-x-6">
                {TEAM_KEYS.map((key, index) => (
                  <motion.article
                    key={key}
                    className="text-center"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 shadow-sm sm:h-28 sm:w-28 lg:h-32 lg:w-32">
                      <Image
                        src={TEAM_IMAGE_SRC_BY_KEY[key]}
                        alt={t(`about.members.${key}.name`)}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
                      />
                    </div>
                    <div className="mt-3">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-(--color-primary)">
                        {t(`about.members.${key}.role`)}
                      </p>
                      <h4 className="mt-1 text-sm font-semibold tracking-tight text-zinc-950">
                        {t(`about.members.${key}.name`)}
                      </h4>
                      <p className="mx-auto mt-1 max-w-68 text-xs leading-5 text-zinc-600 line-clamp-2">
                        {t(`about.members.${key}.bio`)}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Why choose us */}
        <section id="why" className="border-b border-zinc-200 bg-white">
          <Container className="py-12 sm:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {t("why.title")}
              </h2>
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
              <div className="mx-auto max-w-3xl space-y-4 text-base leading-6 text-zinc-600 lg:max-w-none">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="flex gap-3 text-left"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-(--color-primary)" />
                    <p>{t(`why.points.${i}`)}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 lg:h-96"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
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
        <section
          id="contact"
          className="border-b border-zinc-200 bg-(--color-primary-soft)/60"
        >
          <Container className="py-14 sm:py-20">
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t("cta.title")}
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-700">
                {t("cta.description")}
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href="https://zalo.me/0912205001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>{t("cta.button")}</Button>
                </a>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>

      <Footer />

      <button
        type="button"
        onClick={openVideo}
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-50 flex max-w-[min(18rem,calc(100vw-2rem))] items-center gap-2.5 rounded-2xl border border-zinc-200/90 bg-white p-1.5 shadow-lg ring-1 ring-zinc-950/5 transition hover:border-zinc-300 hover:shadow-xl sm:bottom-6 sm:right-6 sm:gap-3 sm:p-2"
        aria-label={t("hero.watchVideo")}
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-(--color-primary) text-white shadow-md ring-2 ring-(--color-primary)/20 sm:h-12 sm:w-12">
          <Play
            className="ml-0.5 h-5 w-5 sm:h-6 sm:w-6"
            fill="currentColor"
            aria-hidden
          />
        </span>
        <span className="pr-2 text-left text-sm font-semibold text-zinc-800 sm:pr-3">
          {t("hero.watchVideo")}
        </span>
      </button>

      {videoOpen ? (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            className="absolute inset-0 bg-zinc-950/65 backdrop-blur-[2px]"
            aria-label={t("hero.closeVideo")}
            onClick={closeVideo}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={t("hero.videoAriaLabel")}
            className="relative z-10 w-full max-w-[min(100%,min(90rem,calc(90vh*16/9)))] overflow-hidden rounded-2xl border border-zinc-700 bg-black shadow-2xl ring-1 ring-white/10"
          >
            <button
              type="button"
              className="absolute right-2 top-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950/85 text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-zinc-800 sm:right-3 sm:top-3"
              onClick={closeVideo}
              aria-label={t("hero.closeVideo")}
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>
            <div className="aspect-video w-full bg-black">
              <video
                className="h-full w-full object-contain"
                src={POPUP_VIDEO_SRC}
                autoPlay
                loop
                playsInline
                preload="auto"
                aria-label={t("hero.videoAriaLabel")}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
