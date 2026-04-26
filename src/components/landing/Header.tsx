"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="top"
        style={scrolled ? { boxShadow: "0 8px 32px rgba(42,24,16,0.1)" } : undefined}
      >
        <a href="#hero" className="logo">
          <Image
            src="/img/logo.png"
            alt="LYNX AI SOLUTION"
            width={140}
            height={34}
            style={{ height: "34px", width: "auto", display: "block" }}
            priority
          />
        </a>
        <div className="nav-links" style={{ display: menuOpen ? "none" : undefined }}>
          <a href="#overview">Giới thiệu</a>
          <a href="#services">Dịch vụ</a>
          <a href="#competencies">Năng lực</a>
          <a href="#projects">Dự án</a>
          <a href="#team">Đội ngũ</a>
        </div>
        <a href="#contact" className="nav-cta">
          Liên hệ <span style={{ fontSize: "11px" }}>→</span>
        </a>
      </nav>
    </>
  );
}
