// Server Component — SSR + SEO
export function OverviewSection() {
  return (
    <section id="overview" className="section">
      <div className="wrap">
        <div className="overview-grid">
          <div className="fade-up">
            <span className="eyebrow">Giới thiệu công ty</span>
            <h2 style={{ marginTop: "12px", marginBottom: "16px" }}>Chúng tôi là LYNX AI SOLUTION.</h2>
            <p className="lede">
              Công ty Cổ phần LYNX AI SOLUTION là đơn vị công nghệ chuyên cung cấp giải pháp phần mềm và trí tuệ nhân tạo cho doanh nghiệp Việt Nam. Chúng tôi tin rằng AI nên là một công cụ thiết thực — giải quyết được bài toán cụ thể, đo được bằng ROI, không chỉ là khẩu hiệu.
            </p>
            <div className="vm-stack">
              <div className="vm-row">
                <div className="icon-pill" style={{ background: "rgba(231,138,83,0.14)", color: "var(--orange-deep)" }}>◎</div>
                <div>
                  <div className="label">Tầm nhìn</div>
                  <div className="body">Trở thành đối tác AI hàng đầu cho doanh nghiệp Việt, đưa công nghệ tiên tiến đến gần hơn với mọi quy mô tổ chức.</div>
                </div>
              </div>
              <div className="vm-row">
                <div className="icon-pill" style={{ background: "rgba(67,193,107,0.14)", color: "#2c8c4e" }}>↗</div>
                <div>
                  <div className="label">Sứ mệnh</div>
                  <div className="body">Giúp doanh nghiệp tăng hiệu quả vận hành và tạo lợi thế cạnh tranh thông qua phần mềm tùy chỉnh và giải pháp AI thực tế.</div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "24px" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: "10px" }}>Giá trị cốt lõi</div>
              <div className="values-row">
                <span className="value-chip"><span className="dot" style={{ background: "#e78a53" }}></span>Khách hàng làm trung tâm</span>
                <span className="value-chip"><span className="dot" style={{ background: "#43c16b" }}></span>Chính trực &amp; minh bạch</span>
                <span className="value-chip"><span className="dot" style={{ background: "#5a3f2e" }}></span>Đổi mới liên tục</span>
                <span className="value-chip"><span className="dot" style={{ background: "#d4733b" }}></span>Chất lượng cam kết</span>
                <span className="value-chip"><span className="dot" style={{ background: "#2a1810" }}></span>Hợp tác bền vững</span>
              </div>
            </div>
          </div>

          <div className="fade-up" style={{ transitionDelay: "0.1s" }}>
            <div className="info-stack">
              <div className="info-row">
                <div>
                  <div className="lbl">Tên doanh nghiệp</div>
                  <div style={{ fontSize: "15px", fontWeight: 700, marginTop: "2px" }}>CTCP LYNX AI SOLUTION</div>
                </div>
                <div className="icon-pill" style={{ background: "rgba(231,138,83,0.14)", color: "var(--orange-deep)" }}>🏢</div>
              </div>
              <div className="info-row">
                <div>
                  <div className="lbl">Mã số thuế</div>
                  <div style={{ fontSize: "15px", fontWeight: 700, marginTop: "2px", fontVariantNumeric: "tabular-nums" }}>0111115574</div>
                </div>
                <div className="icon-pill" style={{ background: "rgba(67,193,107,0.14)", color: "#2c8c4e" }}>📑</div>
              </div>
              <div className="info-row">
                <div>
                  <div className="lbl">Trụ sở</div>
                  <div style={{ fontSize: "14px", fontWeight: 600, marginTop: "2px", lineHeight: 1.45 }}>Số 26, Ngõ 364 Đường Minh Khai,<br />Phường Vĩnh Tuy, Hai Bà Trưng, Hà Nội</div>
                </div>
                <div className="icon-pill" style={{ background: "rgba(90,63,46,0.10)", color: "var(--ink)" }}>📍</div>
              </div>
              <div className="info-row">
                <div>
                  <div className="lbl">Quy mô</div>
                  <div style={{ fontSize: "15px", fontWeight: 700, marginTop: "2px" }}>40+ chuyên gia công nghệ</div>
                </div>
                <div className="icon-pill" style={{ background: "rgba(231,138,83,0.10)", color: "var(--orange-deep)" }}>👥</div>
              </div>
              <div className="info-row">
                <div>
                  <div className="lbl">Cơ quan thuế</div>
                  <div style={{ fontSize: "14px", fontWeight: 600, marginTop: "2px" }}>Thuế cơ sở 3 TP Hà Nội</div>
                </div>
                <div className="icon-pill" style={{ background: "rgba(67,193,107,0.10)", color: "#2c8c4e" }}>✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
