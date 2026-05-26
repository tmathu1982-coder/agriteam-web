import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// CẤU HÌNH METADATA CHUẨN SEO NÂNG CAO CHO AGRI TEAM
export const metadata: Metadata = {
  // 1. Tiêu đề xuất hiện trên Google và Tab trình duyệt (Chứa từ khóa chính)
  title: "Agri Team | Mật Rỉ Đường Chất Lượng Cao Brix 73% - Gạo swarna",
  
  // 2. Đoạn mô tả ngắn hiển thị dưới link tìm kiếm (Tối ưu tỷ lệ click)
  description: "CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU THƯƠNG MẠI AGRI TEAM. Chuyên cung cấp sỉ và lẻ Mật Rỉ Đường Brix 70% (Đường 45%) xử lý nước thải công nghiệp và Brix 75% (Đường 48%) chuyên dụng nuôi cấy vi sinh.",
description:"CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU THƯƠNG MẠI AGRI TEAM.Chuyên cung cấp sỉ lẻ Gạo ấn Swarna.",
  // 3. Bộ từ khóa ngách giúp Google dễ dàng phân loại ngành nghề
  keywords: [
    "Agri Team",
    "Agriteam",
    "mật rỉ đường",
    "mật rỉ đường brix 73",
    "mật rỉ đường brix 75",
    "mật rỉ đường giá rẻ",
    "mật rỉ đường nuôi vi sinh",
    "mật rỉ đường xử lý nước thải",
    "công ty agri team",
    "nông nghiệp hữu cơ",
    "phụ gia ủ men vi sinh",
    "gạo ấn độ swarna"
  ],

  // 4. Khai báo chủ sở hữu website
  authors: [{ name: "Agri Team" }],

  // 5. Thẻ Open Graph giúp hiển thị đẹp mắt, uy tín khi share link lên Zalo, Facebook
  openGraph: {
    title: "Agri Team | Cung Cấp Mật Rỉ Đường Chuyên Dụng-Gạo Swarna",
    description: "Giải pháp toàn diện cho xử lý nước công nghiệp và nuôi cấy vi sinh. Sản phẩm mật rỉ đường đạt chuẩn Brix 70% và 75%.",
    url: "https://agriteam.com.vn", // Tên miền chính thức của trò
    siteName: "Agri Team",
    images: [
      {
        url: "/logo-agriteam.png", // Ảnh hiển thị khi share link
        width: 1200,
        height: 630,
        alt: "Logo Agri Team",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },

  // 6. THAY FAVICON - ĐỔI LOGO MẶC ĐỊNH THÀNH LOGO CÔNG TY
  icons: {
    icon: "/logo-agriteam.png", // Đường dẫn gọi trực tiếp logo từ thư mục public
    shortcut: "/logo-agriteam.png",
    apple: "/logo-agriteam.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}