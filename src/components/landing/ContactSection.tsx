"use client";

import { useRef } from "react";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn anh/chị! Chúng tôi sẽ liên hệ lại trong 24h.");
    formRef.current?.reset();
  };

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="header-row fade-up">
          <div className="left">
            <span className="eyebrow">Liên hệ</span>
            <h2 style={{ marginTop: "12px", marginBottom: "14px" }}>Kết nối với LYNX AI.</h2>
            <p className="lede">Có dự án cần triển khai? Có câu hỏi về AI cho doanh nghiệp? Để lại thông tin — chúng tôi phản hồi trong 24h.</p>
          </div>
        </div>
        <div className="contact-grid fade-up">
          <div className="contact-list">
            <div className="contact-row">
              <div className="icon-pill" style={{ background: "rgba(231,138,83,0.14)", color: "var(--orange-deep)" }}>🌐</div>
              <div>
                <div className="lbl">Website</div>
                <div className="val"><a href="https://www.lynxsolution.vn/" target="_blank" rel="noopener noreferrer">www.lynxsolution.vn</a></div>
              </div>
            </div>
            <div className="contact-row">
              <div className="icon-pill" style={{ background: "rgba(67,193,107,0.14)", color: "#2c8c4e" }}>✉️</div>
              <div>
                <div className="lbl">Email</div>
                <div className="val"><a href="mailto:info@lynxsolution.vn">info@lynxsolution.vn</a></div>
              </div>
            </div>
            <div className="contact-row">
              <div className="icon-pill" style={{ background: "rgba(90,63,46,0.10)", color: "var(--ink)" }}>📞</div>
              <div>
                <div className="lbl">Điện thoại</div>
                <div className="val"><a href="tel:+84929862699">+84 929 862 699</a></div>
              </div>
            </div>
            <div className="contact-row">
              <div className="icon-pill" style={{ background: "rgba(231,138,83,0.10)", color: "var(--orange-deep)" }}>📍</div>
              <div>
                <div className="lbl">Trụ sở</div>
                <div className="val" style={{ fontSize: "14px", lineHeight: 1.5 }}>Số 26, Ngõ 364 Đường Minh Khai,<br />Phường Vĩnh Tuy, Hai Bà Trưng, Hà Nội</div>
              </div>
            </div>
          </div>
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-row-2">
              <div className="field">
                <label>Họ và tên *</label>
                <input type="text" required placeholder="Nguyễn Văn A" />
              </div>
              <div className="field">
                <label>Email *</label>
                <input type="email" required placeholder="ban@congty.vn" />
              </div>
            </div>
            <div className="form-row-2">
              <div className="field">
                <label>Công ty</label>
                <input type="text" placeholder="Tên doanh nghiệp" />
              </div>
              <div className="field">
                <label>Số điện thoại</label>
                <input type="tel" placeholder="+84 ..." />
              </div>
            </div>
            <div className="field">
              <label>Loại dự án quan tâm</label>
              <input type="text" placeholder="VD: Triển khai chatbot AI cho CSKH" />
            </div>
            <div className="field">
              <label>Mô tả yêu cầu</label>
              <textarea placeholder="Hãy chia sẻ bài toán của bạn..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", height: "52px" }}>
              Gửi yêu cầu →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
