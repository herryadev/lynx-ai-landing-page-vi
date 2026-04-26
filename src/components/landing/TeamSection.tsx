// Server Component — SSR + SEO
export function TeamSection() {
  return (
    <section id="team" className="section">
      <div className="wrap">
        <div className="header-row fade-up">
          <div className="left">
            <span className="eyebrow">Đội ngũ</span>
            <h2 style={{ marginTop: "12px", marginBottom: "14px" }}>Con người tạo nên sự khác biệt.</h2>
            <p className="lede">Đội ngũ kỹ sư giàu kinh nghiệm, đam mê công nghệ và luôn lấy kết quả của khách hàng làm thước đo.</p>
          </div>
        </div>
        <div className="team-stats fade-up">
          <div className="team-stat-card">
            <div className="big">40<span className="plus">+</span></div>
            <div className="lbl">Thành viên</div>
          </div>
          <div className="team-stat-card">
            <div className="big">6<span className="plus">+</span></div>
            <div className="lbl">Năm kinh nghiệm TB</div>
          </div>
          <div className="team-stat-card">
            <div className="big">15<span className="plus">+</span></div>
            <div className="lbl">Chứng chỉ quốc tế</div>
          </div>
          <div className="team-stat-card">
            <div className="big">3</div>
            <div className="lbl">Quốc gia làm việc</div>
          </div>
        </div>
        <div className="roles-grid fade-up">
          <div className="role-card">
            <div className="icon-pill" style={{ background: "rgba(231,138,83,0.14)", color: "var(--orange-deep)" }}>👨‍💻</div>
            <div><h4>Software Engineers</h4><p>Frontend · Backend · Fullstack</p></div>
          </div>
          <div className="role-card">
            <div className="icon-pill" style={{ background: "rgba(67,193,107,0.14)", color: "#2c8c4e" }}>🤖</div>
            <div><h4>AI / ML Engineers</h4><p>ML · Deep Learning · LLM</p></div>
          </div>
          <div className="role-card">
            <div className="icon-pill" style={{ background: "rgba(90,63,46,0.10)", color: "var(--ink)" }}>🎨</div>
            <div><h4>UI/UX Designers</h4><p>Product Design · Research</p></div>
          </div>
          <div className="role-card">
            <div className="icon-pill" style={{ background: "rgba(231,138,83,0.10)", color: "var(--orange-deep)" }}>☁️</div>
            <div><h4>DevOps · Cloud</h4><p>Infrastructure · CI/CD · Security</p></div>
          </div>
          <div className="role-card">
            <div className="icon-pill" style={{ background: "rgba(67,193,107,0.10)", color: "#2c8c4e" }}>📊</div>
            <div><h4>Data Engineers</h4><p>Pipeline · Analytics · BI</p></div>
          </div>
          <div className="role-card">
            <div className="icon-pill" style={{ background: "rgba(90,63,46,0.08)", color: "var(--ink)" }}>🔍</div>
            <div><h4>QA Engineers</h4><p>Manual · Automation · Performance</p></div>
          </div>
        </div>

        <div className="leader-head fade-up">
          <h3>Đội ngũ lãnh đạo</h3>
          <p>4 thành viên nòng cốt phụ trách chiến lược, công nghệ, tài chính và tăng trưởng.</p>
        </div>
        <div className="leaders-grid fade-up">
          <article className="leader-card">
            <div className="leader-avatar"><img src="/img/team/ceo2.jpeg" alt="Tạ Duy Đạt" loading="lazy" /></div>
            <div className="role">CEO</div>
            <h4>Tạ Duy Đạt</h4>
            <p>Định hướng chiến lược tổng thể và phát triển doanh nghiệp.</p>
          </article>
          <article className="leader-card">
            <div className="leader-avatar"><img src="/img/team/cco2.jpeg" alt="Nguyễn Cảnh Nguyên" loading="lazy" /></div>
            <div className="role">CCO</div>
            <h4>Nguyễn Cảnh Nguyên</h4>
            <p>Hoạch định chiến lược, quản lý hoạt động bán hàng và phát triển thị trường để tăng doanh thu.</p>
          </article>
          <article className="leader-card">
            <div className="leader-avatar"><img src="/img/team/cto2.jpeg" alt="Lê Văn Mong" loading="lazy" /></div>
            <div className="role">CTO</div>
            <h4>Lê Văn Mong</h4>
            <p>Phụ trách kiến trúc sản phẩm, AI và hạ tầng công nghệ.</p>
          </article>
          <article className="leader-card">
            <div className="leader-avatar"><img src="/img/team/cmo2.png" alt="Phan Hà Duy" loading="lazy" /></div>
            <div className="role">CMO</div>
            <h4>Phan Hà Duy</h4>
            <p>Dẫn dắt marketing, thương hiệu và chiến lược tăng trưởng.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
