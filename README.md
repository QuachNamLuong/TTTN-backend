## Cách chạy project

### Sử dụng Docker Compose

1. Cấu hình môi trường:
   Mở file `.env` và chỉnh sửa:

   ```env
   MYSQL_HOST=mysql
   ```

2. Chạy lệnh:
   ```bash
   docker compose up --build
   ```

---

### Chạy bằng command line (không dùng Docker)

1. Cài đặt dependencies:

   ```bash
   npm install
   ```

2. Cấu hình môi trường:
   Mở file `.env` và chỉnh sửa các giá trị cho phù hợp, ví dụ:

   ```env
   MYSQL_HOST=localhost
   MYSQL_ROOT_PASSWORD=your_password
   MYSQL_DATABASE=your_db
   ```

3. Khởi tạo Prisma:

   ```bash
   npx prisma generate
   ```
4. Chạy project:
   ```bash
   node src/server.js
   ```