export type Product = {
  id: string;
  name: string;
  subtitle: string;
  durationLabel: string;
  priceVnd: number;
  compareAtVnd: number;
  bullets: string[];
  limits: { label: string; value: string }[];
};

export const GROK_HEAVY_YEAR: Product = {
  id: "supergrok-heavy-12m",
  name: "SuperGrok Heavy",
  subtitle:
    "Gói 12 tháng — Grok 4 Heavy & Grok 3 trong một tài khoản phân phối.",
  durationLabel: "12 tháng",
  priceVnd: 4_880_000,
  compareAtVnd: 80_000_000,
  bullets: [
    "Không dùng tài khoản thứ ba: chỉ đăng nhập trực tiếp bằng Google (email & mật khẩu Google / Đăng nhập Google) đúng trang chính thức",
    "Kích hoạt qua email trong vòng 24h sau khi thanh toán",
    "Hỗ trợ tiếng Việt & hướng dẫn cài đặt nhanh",
    "Thanh toán VNĐ: chuyển khoản, VietQR, ví điện tử (theo hướng dẫn khi liên hệ)",
  ],
  limits: [
    { label: "Tổng yêu cầu / tháng", value: "18.000 requests" },
    { label: "Grok 3 (tác vụ thường)", value: "12.000 requests / tháng" },
    { label: "Grok 4 Heavy", value: "6.000 requests / tháng" },
    {
      label: "Thiết bị đồng thời",
      value: "Tối đa 3 thiết bị dùng cùng lúc",
    },
  ],
};
