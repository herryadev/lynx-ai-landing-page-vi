// Server Component — SSR + SEO
import Image from "next/image";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo" style={{ marginBottom: "18px" }}>
              <Image
                src="/img/logo.png"
                alt="LYNX AI SOLUTION"
                width={140}
                height={38}
                style={{ height: "38px", width: "auto", display: "block", filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p>Giải pháp phần mềm và AI tiên tiến, đồng hành cùng doanh nghiệp Việt trên hành trình chuyển đổi số.</p>
          </div>
          <div className="footer-col">
            <h5>Dịch vụ</h5>
            <ul>
              <li><a href="#services">Phát triển phần mềm</a></li>
              <li><a href="#services">Giải pháp AI/ML</a></li>
              <li><a href="#services">Cloud &amp; DevOps</a></li>
              <li><a href="#services">Data Analytics</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Công ty</h5>
            <ul>
              <li><a href="#overview">Giới thiệu</a></li>
              <li><a href="#team">Đội ngũ</a></li>
              <li><a href="#projects">Dự án</a></li>
              <li><a href="#certifications">Chứng nhận</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Liên hệ</h5>
            <ul>
              <li><a href="mailto:info@lynxsolution.vn">info@lynxsolution.vn</a></li>
              <li><a href="tel:+84929862699">+84 929 862 699</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} CTCP LYNX AI SOLUTION · MST 0111115574</p>
          <p>Chính sách bảo mật · Điều khoản sử dụng</p>
        </div>
      </div>
    </footer>
  );
}
