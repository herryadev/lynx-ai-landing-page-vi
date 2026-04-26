// Server Component — SSR + SEO
export function ServicesSection() {
  return (
    <section id="services" className="section" style={{ paddingTop: "48px" }}>
      <div className="wrap">
        <div className="header-row fade-up">
          <div className="left">
            <span className="eyebrow">Dịch vụ &amp; Sản phẩm</span>
            <h2 style={{ marginTop: "12px", marginBottom: "14px" }}>Giải pháp toàn diện cho doanh nghiệp.</h2>
            <p className="lede">Bốn nhóm dịch vụ cốt lõi — bao quát từ tư vấn chiến lược, thiết kế sản phẩm đến triển khai và vận hành dài hạn.</p>
          </div>
          <a href="#contact" className="btn-link">Xem tất cả dịch vụ →</a>
        </div>
        <div className="services-grid fade-up">
          <div className="service-card">
            <div className="icon-pill" style={{ background: "rgba(231,138,83,0.16)", color: "var(--orange-deep)" }}>⌬</div>
            <h3>Phát triển phần mềm theo yêu cầu</h3>
            <p>Web application, hệ thống ERP/CRM, ứng dụng nội bộ — thiết kế và phát triển theo bài toán riêng của doanh nghiệp, đảm bảo tích hợp với hệ thống hiện có.</p>
            <div className="tag-row">
              <span className="tag">React · Next.js</span>
              <span className="tag">Node.js · .NET</span>
              <span className="tag">PostgreSQL</span>
            </div>
          </div>
          <div className="service-card">
            <div className="icon-pill" style={{ background: "rgba(67,193,107,0.14)", color: "#2c8c4e" }}>◊</div>
            <h3>Giải pháp AI &amp; Machine Learning</h3>
            <p>Triển khai AI thực tế: chatbot, OCR, computer vision, recommendation, dự báo — tích hợp LLM vào quy trình nghiệp vụ để tăng tự động hóa.</p>
            <div className="tag-row">
              <span className="tag">LLM Integration</span>
              <span className="tag">Computer Vision</span>
              <span className="tag">RAG</span>
            </div>
          </div>
          <div className="service-card">
            <div className="icon-pill" style={{ background: "rgba(90,63,46,0.10)", color: "var(--ink)" }}>☁</div>
            <h3>Cloud &amp; DevOps</h3>
            <p>Tư vấn kiến trúc cloud, triển khai hạ tầng tự động, CI/CD pipeline, monitoring và security audit cho hệ thống production.</p>
            <div className="tag-row">
              <span className="tag">AWS · GCP · Azure</span>
              <span className="tag">Kubernetes</span>
              <span className="tag">Terraform</span>
            </div>
          </div>
          <div className="service-card">
            <div className="icon-pill" style={{ background: "rgba(231,138,83,0.10)", color: "var(--orange-deep)" }}>▲</div>
            <h3>Data Engineering &amp; Analytics</h3>
            <p>Xây dựng data pipeline, data warehouse, BI dashboard. Biến dữ liệu rời rạc thành báo cáo theo thời gian thực, hỗ trợ ra quyết định.</p>
            <div className="tag-row">
              <span className="tag">Airflow · Spark</span>
              <span className="tag">Snowflake</span>
              <span className="tag">Power BI · Looker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
