// Server Component — SSR + SEO
export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="header-row fade-up">
          <div className="left">
            <span className="eyebrow">Dự án tiêu biểu</span>
            <h2 style={{ marginTop: "12px", marginBottom: "14px" }}>Những gì chúng tôi đã làm.</h2>
            <p className="lede">Một vài dự án thực tế thể hiện năng lực triển khai end-to-end của đội ngũ.</p>
          </div>
          <a href="#contact" className="btn-link">Yêu cầu portfolio đầy đủ →</a>
        </div>
        <div className="projects-grid fade-up">
          <div className="project-card">
            <div className="project-thumb">
              <img src="/img/project-erp.png" alt="Phần mềm quản lý doanh nghiệp ERP" loading="lazy" />
            </div>
            <div className="project-body">
              <h3>Phần mềm quản lý doanh nghiệp</h3>
              <p className="desc">Nền tảng ERP đặt may theo đặc thù từng doanh nghiệp — quản lý nhân sự, tài chính, kho vận, quy trình nội bộ trên một hệ thống thống nhất.</p>
              <div className="project-tags">
                <span className="tag">ERP</span>
                <span className="tag">Microservices</span>
                <span className="tag">Cloud</span>
              </div>
              <div className="outcome">
                <span className="check">✓</span>
                <span>Chuẩn hóa quy trình · tăng minh bạch vận hành</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-thumb">
              <img src="/img/project-crm.jpg" alt="Hệ thống quản lý khách hàng CRM" loading="lazy" />
            </div>
            <div className="project-body">
              <h3>Hệ thống quản lý khách hàng (CRM)</h3>
              <p className="desc">CRM 360° tập trung dữ liệu khách hàng đa kênh, phân khúc tự động, theo dõi pipeline bán hàng và đo lường hiệu quả chiến dịch real-time.</p>
              <div className="project-tags">
                <span className="tag">CRM</span>
                <span className="tag">Customer 360</span>
                <span className="tag">Analytics</span>
              </div>
              <div className="outcome">
                <span className="check">✓</span>
                <span>Tăng tỷ lệ chuyển đổi · giữ chân khách hàng</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-thumb">
              <img src="/img/project-zalo.png" alt="Quản lý Data Zalo Sale" loading="lazy" />
            </div>
            <div className="project-body">
              <h3>Quản lý Data Zalo Sale</h3>
              <p className="desc">Nền tảng đồng bộ và quản lý toàn bộ dữ liệu hội thoại Zalo OA — phân công sale, tự động nhắc lịch, tracking đơn hàng và đo lường KPI từng nhân viên.</p>
              <div className="project-tags">
                <span className="tag">Zalo OA API</span>
                <span className="tag">Sales Pipeline</span>
                <span className="tag">Realtime</span>
              </div>
              <div className="outcome">
                <span className="check">✓</span>
                <span>Không bỏ sót lead · tối ưu tỉ lệ chốt đơn</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-thumb">
              <img src="/img/project-ai.jpg" alt="Trợ lý ảo AI chăm sóc khách hàng" loading="lazy" />
            </div>
            <div className="project-body">
              <h3>Trợ lý ảo AI chăm sóc khách hàng</h3>
              <p className="desc">Trí tuệ nhân tạo thông minh đóng vai trợ lý ảo CSKH, huấn luyện riêng theo nghiệp vụ và tông giọng từng doanh nghiệp — deploy đa kênh Web, Zalo, Facebook.</p>
              <div className="project-tags">
                <span className="tag">LLM · RAG</span>
                <span className="tag">LangChain</span>
                <span className="tag">Multi-channel</span>
              </div>
              <div className="outcome">
                <span className="check">✓</span>
                <span>Tự động xử lý phần lớn câu hỏi · giảm chi phí CSKH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
