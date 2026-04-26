// Server Component — SSR + SEO
export function ProcessSection() {
  return (
    <section id="process" className="section">
      <div className="wrap">
        <div className="header-row fade-up">
          <div className="left">
            <span className="eyebrow">Quy trình</span>
            <h2 style={{ marginTop: "12px", marginBottom: "14px" }}>Từ ý tưởng đến sản phẩm.</h2>
            <p className="lede">Quy trình Agile chuẩn hóa, minh bạch ở mọi giai đoạn — đảm bảo chất lượng và đúng tiến độ.</p>
          </div>
        </div>
        <div className="process-track fade-up">
          <div className="step-card">
            <div className="step-num">01</div>
            <h4>Thu thập yêu cầu</h4>
            <p>Phân tích nhu cầu, xác định phạm vi, mục tiêu kinh doanh</p>
          </div>
          <div className="step-card">
            <div className="step-num">02</div>
            <h4>Thiết kế</h4>
            <p>Wireframe, UI/UX, kiến trúc hệ thống và lập kế hoạch</p>
          </div>
          <div className="step-card">
            <div className="step-num">03</div>
            <h4>Phát triển</h4>
            <p>Sprint 2 tuần, daily standup, code review liên tục</p>
          </div>
          <div className="step-card">
            <div className="step-num">04</div>
            <h4>Kiểm thử</h4>
            <p>Unit · Integration · UAT · Performance · Security</p>
          </div>
          <div className="step-card">
            <div className="step-num">05</div>
            <h4>Triển khai</h4>
            <p>CI/CD pipeline, monitoring, hỗ trợ go-live và bảo trì</p>
          </div>
        </div>
        <div className="qa-row fade-up">
          <div className="qa-pill"><span className="check">✓</span><span>Code Review tự động</span></div>
          <div className="qa-pill"><span className="check">✓</span><span>Unit &amp; Integration Testing</span></div>
          <div className="qa-pill"><span className="check">✓</span><span>Security Scanning</span></div>
          <div className="qa-pill"><span className="check">✓</span><span>Performance Monitoring</span></div>
        </div>
      </div>
    </section>
  );
}
