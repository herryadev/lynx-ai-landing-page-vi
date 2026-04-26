// Server Component — SSR + SEO
export function AdvantagesSection() {
  return (
    <section id="advantages" className="section" style={{ paddingTop: "48px" }}>
      <div className="wrap">
        <div className="header-row fade-up">
          <div className="left">
            <span className="eyebrow">Lợi thế cạnh tranh</span>
            <h2 style={{ marginTop: "12px", marginBottom: "14px" }}>Tại sao chọn LYNX AI?</h2>
          </div>
        </div>
        <div className="adv-grid fade-up">
          <div className="adv-card">
            <div className="adv-num">01</div>
            <div className="icon-pill" style={{ background: "rgba(231,138,83,0.14)", color: "var(--orange-deep)" }}>⚡</div>
            <h3>AI-first &amp; thực dụng</h3>
            <p>Không phải mọi bài toán đều cần AI. Chúng tôi tư vấn thẳng thắn — chọn đúng giải pháp cho đúng nhu cầu, đo được bằng ROI.</p>
          </div>
          <div className="adv-card">
            <div className="adv-num">02</div>
            <div className="icon-pill" style={{ background: "rgba(67,193,107,0.14)", color: "#2c8c4e" }}>🎯</div>
            <h3>Đội ngũ Senior-heavy</h3>
            <p>70% đội ngũ là Senior+ với 5+ năm kinh nghiệm. Bạn làm việc với người ra quyết định, không phải qua nhiều lớp trung gian.</p>
          </div>
          <div className="adv-card">
            <div className="adv-num">03</div>
            <div className="icon-pill" style={{ background: "rgba(90,63,46,0.10)", color: "var(--ink)" }}>🔒</div>
            <h3>Tuân thủ &amp; bảo mật</h3>
            <p>Thiết kế theo chuẩn ISO 27001, GDPR-ready. Phù hợp cho tài chính, y tế và doanh nghiệp có yêu cầu compliance cao.</p>
          </div>
          <div className="adv-card">
            <div className="adv-num">04</div>
            <div className="icon-pill" style={{ background: "rgba(231,138,83,0.10)", color: "var(--orange-deep)" }}>🌱</div>
            <h3>Đối tác dài hạn</h3>
            <p>85% khách hàng ký mới sau dự án đầu. Chúng tôi không chỉ build &amp; bay — chúng tôi đồng hành để sản phẩm phát triển.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Server Component — SSR + SEO
export function CertificationsSection() {
  return (
    <section id="certifications" className="section">
      <div className="wrap">
        <div className="header-row fade-up">
          <div className="left">
            <span className="eyebrow">Chứng nhận</span>
            <h2 style={{ marginTop: "12px", marginBottom: "14px" }}>Tiêu chuẩn quốc tế.</h2>
          </div>
        </div>
        <div className="cert-grid fade-up">
          <div className="cert-card">
            <div className="cert-badge">🏆</div>
            <div><h4>ISO/IEC 27001</h4><p>Information Security · 2024</p></div>
          </div>
          <div className="cert-card">
            <div className="cert-badge">⭐</div>
            <div><h4>AWS Partner</h4><p>Select Tier · 2025</p></div>
          </div>
          <div className="cert-card">
            <div className="cert-badge">✓</div>
            <div><h4>CMMI Level 3</h4><p>Process Maturity · 2024</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Server Component — SSR + SEO
export function CtaSection() {
  return (
    <section id="cta" className="section" style={{ paddingTop: "32px" }}>
      <div className="wrap">
        <div className="cta-card fade-up">
          <h2>Sẵn sàng bắt đầu dự án?</h2>
          <p>Đặt lịch tư vấn miễn phí 30 phút — chúng tôi sẽ giúp bạn xác định bài toán và phác thảo giải pháp phù hợp.</p>
          <div className="btn-row">
            <a href="#contact" className="btn btn-primary">Liên hệ tư vấn miễn phí →</a>
            <a href="mailto:info@lynxsolution.vn" className="btn btn-ghost">Gửi email ngay</a>
          </div>
        </div>
      </div>
    </section>
  );
}
