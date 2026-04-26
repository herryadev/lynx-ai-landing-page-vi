"use client";

import { useEffect } from "react";

/**
 * Client Component nhỏ — chỉ chạy IntersectionObserver để trigger .fade-up animations.
 * Không render UI, chỉ xử lý scroll.
 */
export function FadeUpObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
