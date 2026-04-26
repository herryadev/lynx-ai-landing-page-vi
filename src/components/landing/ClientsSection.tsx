// Server Component — SSR + SEO
export function ClientsSection() {
  return (
    <section id="clients" className="section" style={{ paddingTop: "48px" }}>
      <div className="wrap">
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="eyebrow">Khách hàng &amp; Đối tác</span>
          <h2 style={{ marginTop: "12px" }}>Tin tưởng bởi các doanh nghiệp hàng đầu.</h2>
        </div>
        <div className="clients-grid fade-up">
          <a className="client-tile" href="https://owen.vn/" target="_blank" rel="noopener noreferrer">
            <img src="/img/logo-owen.png" alt="OWEN" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
            <div>
              <div className="client-name">OWEN</div>
              <div className="client-domain">owen.vn</div>
            </div>
          </a>
          <a className="client-tile" href="https://aschool.edu.vn/" target="_blank" rel="noopener noreferrer">
            <img src="https://archimedes.nguyenminhanh.com.vn/wp-content/uploads/2026/01/LOGO-ARCHIMEDES--150x150.png" alt="Archimedes" />
            <div>
              <div className="client-name">Archimedes School</div>
              <div className="client-domain">aschool.edu.vn</div>
            </div>
          </a>
          <a className="client-tile" href="https://nemshop.vn/" target="_blank" rel="noopener noreferrer">
            <img src="http://theme.hstatic.net/200000182297/1000887316/14/favicon.png?v=3091" alt="NEM" />
            <div>
              <div className="client-name">NEM</div>
              <div className="client-domain">nemshop.vn</div>
            </div>
          </a>
        </div>
        <div className="fade-up" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: "18px" }}>Lĩnh vực phục vụ</div>
          <div className="industry-row">
            <span className="industry-pill"><span style={{ fontSize: "14px" }}>🏦</span> Tài chính · Ngân hàng</span>
            <span className="industry-pill"><span style={{ fontSize: "14px" }}>🏥</span> Y tế &amp; Sức khỏe</span>
            <span className="industry-pill"><span style={{ fontSize: "14px" }}>🛍️</span> Bán lẻ · Thương mại</span>
            <span className="industry-pill"><span style={{ fontSize: "14px" }}>📦</span> Logistics</span>
            <span className="industry-pill"><span style={{ fontSize: "14px" }}>🎓</span> Giáo dục</span>
            <span className="industry-pill"><span style={{ fontSize: "14px" }}>🏭</span> Sản xuất</span>
          </div>
        </div>
      </div>
    </section>
  );
}
