// Server Component — SSR + SEO
export function HeroSection() {
  return (
    <section id="hero">
      <div className="hero-blob blob-1"></div>
      <div className="hero-blob blob-2"></div>
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-left fade-up">
            <div className="hero-eyebrow">
              <span className="pill">MỚI</span>
              <span>Đối tác chuyển đổi số · AI-first 2026</span>
            </div>
            <h1 className="hero-title">
              Giải pháp <span className="accent">Phần mềm &amp; AI</span> cho doanh nghiệp Việt.
            </h1>
            <p className="hero-desc">
              LYNX AI SOLUTION đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số — từ tư vấn chiến lược, thiết kế sản phẩm đến triển khai AI thực tế, đo được bằng kết quả kinh doanh.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Bắt đầu dự án →</a>
              <a href="#projects" className="btn btn-ghost">Xem dự án tiêu biểu</a>
            </div>
            <div className="hero-trust">
              <div className="avatar-stack">
                <div>NL</div><div>HM</div><div>TQ</div><div>+</div>
              </div>
              <div>
                <div style={{ color: "var(--ink)", fontWeight: 600 }}>Tin tưởng bởi 30+ doanh nghiệp</div>
                <div>Tài chính · Y tế · Bán lẻ · Logistics</div>
              </div>
            </div>
          </div>

          <div className="hero-right fade-up" style={{ transitionDelay: "0.1s" }}>
            <div className="hero-visual">
              {/* Top-right KPI card */}
              <div className="ios-card ios-card-sm top">
                <div className="stat-mini">DOANH THU AI</div>
                <div className="stat-big">2.4 tỷ</div>
                <div className="stat-trend">↑ 38% vs Q3</div>
                <div className="spark">
                  <svg viewBox="0 0 220 32" preserveAspectRatio="none">
                    <path d="M0,28 L20,22 L40,24 L60,18 L80,20 L100,12 L120,14 L140,8 L160,10 L180,5 L200,7 L220,2" fill="none" stroke="#e78a53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0,28 L20,22 L40,24 L60,18 L80,20 L100,12 L120,14 L140,8 L160,10 L180,5 L200,7 L220,2 L220,32 L0,32 Z" fill="rgba(231,138,83,0.12)" />
                  </svg>
                </div>
              </div>

              {/* Main dashboard card */}
              <div className="ios-card ios-card-main">
                <div className="head">
                  <div className="title">LYNX · Dashboard</div>
                  <span className="badge-dot">Live</span>
                </div>
                <div className="ios-row">
                  <div className="left">
                    <div className="ico" style={{ background: "rgba(231,138,83,0.14)", color: "var(--orange-deep)" }}>🤖</div>
                    <div>
                      <div className="lbl">AI Solutions</div>
                      <div className="sub">12 dự án đang triển khai</div>
                    </div>
                  </div>
                  <div className="val">↗ 96%</div>
                </div>
                <div className="ios-row">
                  <div className="left">
                    <div className="ico" style={{ background: "rgba(67,193,107,0.14)", color: "#2c8c4e" }}>⚡</div>
                    <div>
                      <div className="lbl">Phần mềm doanh nghiệp</div>
                      <div className="sub">ERP · CRM · Workflow</div>
                    </div>
                  </div>
                  <div className="val" style={{ color: "#2c8c4e" }}>+24</div>
                </div>
                <div className="ios-row">
                  <div className="left">
                    <div className="ico" style={{ background: "rgba(90,63,46,0.10)", color: "var(--ink)" }}>☁️</div>
                    <div>
                      <div className="lbl">Cloud &amp; DevOps</div>
                      <div className="sub">Multi-cloud · CI/CD</div>
                    </div>
                  </div>
                  <div className="val" style={{ color: "var(--ink)" }}>99.9%</div>
                </div>
                <div className="ios-row">
                  <div className="left">
                    <div className="ico" style={{ background: "rgba(231,138,83,0.10)", color: "var(--orange-deep)" }}>📊</div>
                    <div>
                      <div className="lbl">Data &amp; Analytics</div>
                      <div className="sub">Pipeline · BI · Insight</div>
                    </div>
                  </div>
                  <div className="val">8 dự án</div>
                </div>
              </div>

              {/* Bottom-left status card */}
              <div className="ios-card ios-card-sm bot">
                <div className="stat-mini">DỰ ÁN ĐANG CHẠY</div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "8px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg, var(--orange), var(--orange-deep))", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "22px" }}>⚙</div>
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: 800 }}>24</div>
                    <div style={{ fontSize: "11px", color: "var(--ink-3)", fontWeight: 500 }}>Trên 8 ngành</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "4px", marginTop: "10px" }}>
                  <div style={{ flex: 3, height: "6px", borderRadius: "3px", background: "var(--orange)" }}></div>
                  <div style={{ flex: 2, height: "6px", borderRadius: "3px", background: "var(--orange-soft)" }}></div>
                  <div style={{ flex: 1, height: "6px", borderRadius: "3px", background: "var(--cream-3)" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-stats fade-up" style={{ transitionDelay: "0.2s" }}>
          <div>
            <div className="hs-num">30<span className="plus">+</span></div>
            <div className="hs-lbl">Dự án hoàn thành</div>
          </div>
          <div>
            <div className="hs-num">25<span className="plus">+</span></div>
            <div className="hs-lbl">Khách hàng hài lòng</div>
          </div>
          <div>
            <div className="hs-num">40<span className="plus">+</span></div>
            <div className="hs-lbl">Chuyên gia công nghệ</div>
          </div>
          <div>
            <div className="hs-num">5<span className="plus">+</span></div>
            <div className="hs-lbl">Năm kinh nghiệm</div>
          </div>
        </div>
      </div>
    </section>
  );
}
