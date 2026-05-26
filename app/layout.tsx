import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// CẤU HÌNH METADATA CHUẨN SEO NÂNG CAO CHO AGRI TEAM
export const metadata: Metadata = {
  title: "Agri Team | Mật Rỉ Đường Chuyên Dụng & Gạo Swarna Ấn Độ",
  
  // Chỉ có 1 dòng description duy nhất, gộp cả 2 sản phẩm
  description: "CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU THƯƠNG MẠI AGRI TEAM. Chuyên cung cấp sỉ và lẻ Mật Rỉ Đường Brix 73% xử lý nước/nuôi cấy vi sinh và Gạo Swarna Ấn Độ (5% tấm) chất lượng cao.",
  
  keywords: [
    "Agri Team",
    "Agriteam",
    "mật rỉ đường",
    "mật rỉ đường brix 73",
    "gạo swarna",
    "gạo swarna ấn độ",
    "gạo làm bún",
    "mật rỉ đường xử lý nước thải",
    "công ty agri team",
    "phụ gia ủ men vi sinh"
  ],

  authors: [{ name: "Agri Team" }],

  openGraph: {
    title: "Agri Team | Mật Rỉ Đường & Gạo Swarna Nhập Khẩu",
    description: "Giải pháp toàn diện cho xử lý nước công nghiệp, nuôi cấy vi sinh và cung cấp gạo Swarna chất lượng cao cho suất ăn công nghiệp.",
    url: "https://agriteam.com.vn",
    siteName: "Agri Team",
    images: [
      {
        url: "/logo-agriteam.png", 
        width: 1200,
        height: 630,
        alt: "Logo Agri Team",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },

  icons: {
    icon: "/logo-agriteam.png",
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