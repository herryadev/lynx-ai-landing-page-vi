# Cấu hình DNS cho lynxsolution.vn

Thêm các bản ghi sau tại nhà đăng ký domain (nơi quản lý DNS của **lynxsolution.vn**). Thay **YOUR_SERVER_IP** bằng IP public của VPS (ví dụ: `123.45.67.89`).

---

## Bản ghi cần thêm

| Loại | Tên / Host | Giá trị / Value | TTL (tùy chọn) |
|------|------------|-----------------|----------------|
| **A** | `@` | **YOUR_SERVER_IP** | 300 hoặc 3600 |
| **A** | `www` | **YOUR_SERVER_IP** | 300 hoặc 3600 |

- **`@`** = domain gốc **lynxsolution.vn**
- **`www`** = **www.lynxsolution.vn**

---

## Ví dụ (khi IP VPS là 203.0.113.10)

| Loại | Tên / Host | Giá trị |
|------|------------|--------|
| A | @ | 203.0.113.10 |
| A | www | 203.0.113.10 |

---

## Lưu ý

1. **Xóa bản ghi cũ** trùng tên (ví dụ A record cũ của `@` hoặc `www`) nếu đang trỏ đi nơi khác.
2. **Chờ DNS cập nhật**: thường 5–30 phút, có thể tới 24–48h. Kiểm tra:
   ```bash
   dig lynxsolution.vn +short
   dig www.lynxsolution.vn +short
   ```
   Cả hai phải trả về đúng IP VPS.
3. Sau khi DNS trỏ đúng, chạy Certbot để bật HTTPS:
   ```bash
   sudo certbot --nginx -d lynxsolution.vn -d www.lynxsolution.vn
   ```

---

## Lấy IP public của VPS (nếu chưa biết)

Trên chính VPS:

```bash
curl -s ifconfig.me
# hoặc
curl -s icanhazip.com
```

Dùng IP in ra thay cho **YOUR_SERVER_IP** trong bảng trên.
