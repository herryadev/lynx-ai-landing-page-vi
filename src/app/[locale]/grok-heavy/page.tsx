"use client";

import { Button } from "@/components/landing/Button";
import { Container } from "@/components/landing/Container";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { GROK_HEAVY_YEAR } from "@/lib/grok-heavy/product";

const ZALO_URL = "https://zalo.me/0912205001";

const fmt = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0,
});

function pctOff(price: number, compare: number): number {
  if (compare <= price) return 0;
  return Math.round((1 - price / compare) * 100);
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({
    behavior: reduced ? "instant" : "smooth",
    block: "start",
  });
}

function Hero() {
  const off = pctOff(GROK_HEAVY_YEAR.priceVnd, GROK_HEAVY_YEAR.compareAtVnd);
  return (
    <section className="relative overflow-hidden border-b border-zinc-200">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[--color-primary]/10 blur-xl" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-zinc-100 blur-lg" />
      </div>
      <Container className="py-20 sm:py-28">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-600">
          Gói năm
          {off > 0 ? ` · Giảm ${off}%` : ""}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
          SuperGrok Heavy
          <span className="block text-zinc-500">Một năm đầy đủ quyền lợi</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-600">
          Truy cập Grok 4 Heavy cho tác vụ nặng, Grok 3 cho công việc hằng ngày
          — thanh toán VNĐ, kích hoạt nhanh.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#san-pham"
            className="inline-flex items-center justify-center rounded-xl bg-[#e78a53] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#d97840]"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("san-pham");
            }}
          >
            Xem gói 12 tháng
          </a>
          <a
            href="#dang-nhap-dung"
            className="inline-flex items-center justify-center rounded-xl border border-amber-300 bg-amber-50 px-6 py-3 text-sm font-semibold text-amber-900 transition hover:bg-amber-100"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("dang-nhap-dung");
            }}
          >
            Lưu ý đăng nhập
          </a>
        </div>
      </Container>
    </section>
  );
}

function DirectLoginCallout() {
  return (
    <div
      id="dang-nhap-dung"
      className="scroll-mt-24 mt-8 rounded-2xl border-2 border-amber-400/80 bg-linear-to-br from-amber-50 to-white p-6 shadow-md shadow-amber-900/10 sm:p-8"
      role="note"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-200/80 text-lg font-bold text-amber-900"
          aria-hidden
        >
          !
        </span>
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-amber-950 sm:text-xl">
            Nhấn mạnh: không dùng tài khoản thứ ba
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-amber-950/90 sm:text-base">
            Bạn chỉ đăng nhập{" "}
            <strong className="font-semibold text-zinc-950">trực tiếp</strong>{" "}
            bằng{" "}
            <strong className="font-semibold text-zinc-950">
              tài khoản Google
            </strong>{" "}
            của mình — dùng đúng{" "}
            <strong className="font-semibold text-zinc-950">
              email Google và mật khẩu Google
            </strong>
            , hoặc nút{" "}
            <strong className="font-semibold text-zinc-950">
              Đăng nhập Google
            </strong>{" "}
            trên trang chính thức của dịch vụ.{" "}
            <span className="text-amber-800">Không</span> đăng nhập qua app,
            trang lạ hay bên thứ ba yêu cầu nhập mật khẩu vào hệ thống không
            phải Google/xAI.
          </p>
          <p className="mt-3 text-xs text-amber-800/80 sm:text-sm">
            Mục đích: tránh lộ mật khẩu và mất quyền truy cập. Nếu có hướng dẫn
            từ shop, vẫn phải thao tác trên cổng đăng nhập chính thức.
          </p>
        </div>
      </div>
    </div>
  );
}

function ProductSection() {
  const p = GROK_HEAVY_YEAR;
  const off = pctOff(p.priceVnd, p.compareAtVnd);
  return (
    <section
      id="san-pham"
      className="scroll-mt-24 border-b border-zinc-200 py-20"
    >
      <Container>
        <h2 className="text-2xl font-bold text-zinc-950 sm:text-3xl">
          Sản phẩm
        </h2>
        <p className="mt-2 max-w-2xl text-zinc-600">
          Gói 12 tháng. Liên hệ Lynx Solution để được tư vấn, báo giá và hỗ trợ
          đăng ký — phù hợp cá nhân hoặc team.
        </p>

        <DirectLoginCallout />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-[--color-primary]/30 bg-linear-to-br from-zinc-50 to-white p-8 shadow-xl">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-zinc-950 sm:text-2xl">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-600">{p.durationLabel}</p>
              </div>
              <span className="rounded-lg bg-[--color-primary]/15 px-2 py-1 text-xs font-semibold text-[--color-primary]">
                Bán chạy
              </span>
            </div>
            <p className="mt-4 text-zinc-700">{p.subtitle}</p>
            <ul className="mt-6 space-y-3 text-sm text-zinc-600">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span
                    className="mt-0.5 shrink-0 text-[--color-primary]"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-end gap-4 border-t border-zinc-200 pt-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Giá gói năm
                </p>
                <p className="text-3xl font-bold text-zinc-950">
                  {fmt.format(p.priceVnd)}
                </p>
                {off > 0 ? (
                  <p className="text-sm text-zinc-500 line-through">
                    {fmt.format(p.compareAtVnd)}
                  </p>
                ) : null}
              </div>
              {off > 0 ? (
                <div className="rounded-lg bg-[--color-primary]/10 px-3 py-2 text-sm font-semibold text-[--color-primary]">
                  Giảm {off}% · từ {fmt.format(p.compareAtVnd)} còn{" "}
                  {fmt.format(p.priceVnd)}
                </div>
              ) : null}
            </div>
            <p className="mt-6 text-sm text-zinc-600">
              Để mua gói hoặc hỏi thêm chi tiết, vui lòng liên hệ trực tiếp —
              chúng tôi hỗ trợ nhanh qua Zalo.
            </p>
            <div className="mt-4">
              <a href={ZALO_URL} target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto sm:px-10">
                  Liên hệ ngay
                </Button>
              </a>
            </div>
          </div>

          <div
            id="gioi-han"
            className="scroll-mt-24 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-8"
          >
            <h3 className="text-lg font-semibold text-zinc-950">
              Giới hạn sử dụng (theo tháng)
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Con số tham khảo theo mô tả gói phân phối; có thể thay đổi theo
              chính sách nhà cung cấp.
            </p>
            <dl className="mt-6 space-y-4">
              {p.limits.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 border-b border-zinc-200 pb-4 last:border-0 last:pb-0"
                >
                  <dt className="text-zinc-600">{row.label}</dt>
                  <dd className="text-right font-medium text-zinc-950">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  const qa = [
    {
      q: "Sau khi thanh toán tôi nhận gì?",
      a: "Bạn nhận hướng dẫn đăng nhập / kích hoạt qua email. Thời gian xử lý mục tiêu trong 24 giờ làm việc.",
    },
    {
      q: "Có hoàn tiền không?",
      a: "Theo chính sách cửa hàng: trong 7 ngày nếu chưa kích hoạt, có thể hoàn theo điều khoản bạn công bố trên trang chính sách.",
    },
    {
      q: "Đây có phải đăng ký trực tiếp từ xAI không?",
      a: "Đây là mô hình phân phối / gói gộp. Bạn nên mô tả rõ trên production để khách hiểu nguồn gốc tài khoản.",
    },
    {
      q: "Tại sao không được dùng “tài khoản thứ ba”?",
      a: "Để bảo vệ mật khẩu và quyền sở hữu tài khoản: chỉ đăng nhập trực tiếp với Google (email/mật khẩu Google hoặc OAuth Google) trên trang chính thức. Không nhập mật khẩu vào app hay website trung gian không đáng tin cậy.",
    },
  ];
  return (
    <section id="faq" className="scroll-mt-24 py-20">
      <Container>
        <h2 className="text-2xl font-bold text-zinc-950 sm:text-3xl">
          Câu hỏi thường gặp
        </h2>
        <div className="mt-10 space-y-6">
          {qa.map((item) => (
            <div
              key={item.q}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-medium text-zinc-950">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <a id="top" />
      <Header />
      <main>
        <Hero />
        <ProductSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
