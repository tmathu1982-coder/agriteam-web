import Image from "next/image";
import { Phone, Mail, MapPin, Target, Leaf } from "lucide-react"; // Cần cài: npm install lucide-react

export default function Home() {
  const hotline = "0902590480";
  const hotlineDisplay = "0902.590.480";

  // Dữ liệu sản phẩm (Giả định dựa trên ảnh và ngành nghề)
  const products = [
    {
      id: 1,
      name: "Men Vi Sinh Agri-EM",
      category: "Chế phẩm sinh học",
      description: "Phân hủy phụ phẩm, ủ phân hữu cơ, xử lý nước.",
      image: "/products/agri-em.png", // Thay bằng ảnh đã xử lý nền
      icon: "🔬",
    },
    {
      id: 2,
      name: "Agriteam-Humic Khoáng",
      category: "Phân bón rễ",
      description: "Kích rễ mạnh, cải tạo đất, tăng hấp thu dinh dưỡng.",
      image: "/products/humic.png", // Thay bằng ảnh đã xử lý nền
      icon: "🌱",
    },
    {
      id: 3,
      name: "Agri-Shield (Trị Nấm)",
      category: "Bảo vệ thực vật",
      description: "Ngừa và trị nấm bệnh Phytophthora, Fusarium.",
      image: "/products/agri-shield.png", // Thay bằng ảnh đã xử lý nền
      icon: "🛡️",
    },
    {
      id: 4,
      name: "Phân Bón Lá Agri-Nitro",
      category: "Dinh dưỡng lá",
      description: "Vỗ béo trái, xanh cây, mập đẻ nhánh.",
      image: "/products/agri-nitro.png", // Thay bằng ảnh đã xử lý nền
      icon: "🌿",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* HEADER - ĐỒNG BỘ MÀU LOGO (ĐẬM) */}
      <header className="bg-[#0A4D34] text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Khối nền trắng bo góc cho logo nổi bật */}
            <div className="bg-white p-1 rounded-lg">
              <Image 
                src="/logo-agriteam.png" // Nhớ bỏ file logo vào public nhé
                alt="Agriteam Logo" 
                width={50} 
                height={50} 
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold tracking-tight">AGRITEAM</h1>
              <span className="text-xs text-green-200">Nông nghiệp & Công nghệ</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 font-medium text-green-100">
            <a href="#ve-chung-toi" className="hover:text-white transition">Về Chúng Tôi</a>
            <a href="#san-pham" className="hover:text-white transition">Sản Phẩm</a>
            <a href="#lien-he" className="hover:text-white transition">Liên Hệ</a>
          </nav>
          <a href={`tel:${hotline}`} className="flex items-center gap-2 bg-white text-[#0A4D34] px-4 py-2 rounded-full font-bold hover:bg-green-100 transition shadow">
            <Phone size={18} />
            {hotlineDisplay}
          </a>
        </div>
      </header>

      {/* HERO SECTION - TÔNG MÀU SÁNG & CÔNG NGHỆ */}
      <section id="ve-chung-toi" className="bg-gradient-to-br from-white via-green-50 to-[#E6F3EF] py-28 border-b-8 border-[#20B2AA]">
        <div className="max-w-5xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 bg-green-100 text-[#0A4D34] px-4 py-1 rounded-full text-sm font-semibold mb-6">
            <Leaf size={16} />
            <span>Giải pháp Nông nghiệp Bền vững</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Công ty TNHH Đầu tư Nông nghiệp & <br/>
            <span className="text-[#0A4D34]">Công nghệ <span className="text-[#20B2AA]">Agriteam</span></span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
            Chúng tôi tiên phong ứng dụng khoa học công nghệ cao vào sản xuất nông nghiệp, 
            cung cấp các chế phẩm sinh học, phân bón hữu cơ khoáng chất lượng hàng đầu, 
            hướng tới nền nông nghiệp xanh, sạch và hiệu quả kinh tế cao.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#san-pham" className="bg-[#0A4D34] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#073a27] hover:shadow-lg transition-all">
              Xem Danh Mục Sản Phẩm
            </a>
            <a href={`tel:${hotline}`} className="bg-white text-[#0A4D34] px-8 py-4 rounded-full font-bold text-lg border border-green-200 hover:border-[#0A4D34] transition-all flex items-center gap-2">
                <Phone size={20}/>
                Tư vấn ngay
            </a>
          </div>
        </div>
      </section>

      {/* SẢN PHẨM SECTION - BỐ CỤC KHỐI CHUYÊN NGHIỆP */}
      <section id="san-pham" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16 border-b-2 border-gray-100 pb-6">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">Sản phẩm Nổi bật</h3>
            <p className="text-gray-600 mt-2">Công nghệ cao - Chất lượng vượt trội</p>
          </div>
          <div className="w-32 h-1 bg-[#20B2AA] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300 grouping">
              {/* Vùng chứa ảnh - Trò cần xử lý remove nền để ảnh hiện đẹp nhất */}
              <div className="w-full h-56 bg-gray-50 rounded-xl flex items-center justify-center mb-6 overflow-hidden border border-gray-100 relative p-4">
                <span className="absolute top-2 left-2 text-3xl opacity-20">{product.icon}</span>
                {/* Fallback nếu chưa có ảnh: hiện icon */}
                <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-10">🍂</div>
                
                {/* Khi có ảnh thật, xóa fallback ở trên và uncomment dòng dưới: */}
                {/* <Image src={product.image} alt={product.name} fill className="object-contain p-4 grouping-hover:scale-105 transition-transform" /> */}
              </div>
              
              <div className="flex-grow">
                <span className="text-xs font-medium text-[#20B2AA] bg-cyan-50 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <h4 className="text-lg font-bold text-gray-900 mt-3 mb-2 leading-snug h-14 line-clamp-2">
                  {product.name}
                </h4>
                <p className="text-sm text-gray-600 mb-5 line-clamp-3">
                  {product.description}
                </p>
              </div>
              
              <a href={`tel:${hotline}`} className="block text-center bg-gray-50 text-[#0A4D34] py-3 rounded-lg font-semibold hover:bg-[#0A4D34] hover:text-white transition group-hover:bg-[#0A4D34] group-hover:text-white">
                Liên hệ báo giá
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* LIÊN HỆ SECTION & FOOTER THU GỌN */}
      <footer id="lien-he" className="bg-gray-900 text-gray-300 py-12 border-t-8 border-[#0A4D34]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-10 text-sm">
          
          <div className="md:w-1/2 space-y-4">
            <div className="flex items-center gap-3">
               <div className="bg-white p-1 rounded-lg">
                <Image src="/logo-agriteam.png" alt="Agriteam Logo" width={40} height={40} className="object-contain"/>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">AGRITEAM</h2>
            </div>
            <p className="text-gray-400">Công ty TNHH Đầu tư Nông nghiệp & Công nghệ Agriteam.</p>
            <p><strong>MST:</strong> (Cập nhật từ file Word)</p>
          </div>

          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-bold text-white mb-3">Văn phòng</h4>
              <div className="flex gap-2 items-start"> <MapPin size={18} className="text-[#20B2AA] mt-1 flex-shrink-0"/> <p>(Địa chỉ từ file Word)</p></div>
              <div className="flex gap-2 items-center"> <Mail size={16} className="text-[#20B2AA]"/> <p>contact@agriteam.com.vn</p></div>
            </div>
            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 text-center flex flex-col items-center justify-center">
              <p className="text-gray-400 mb-2">Hotline tư vấn 24/7</p>
              <a href={`tel:${hotline}`} className="text-2xl font-black text-[#20B2AA] hover:text-white transition flex items-center gap-2">
                <Phone />
                {hotlineDisplay}
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Agriteam. All rights reserved. Nông nghiệp công nghệ cao.</p>
        </div>
      </footer>
    </main>
  );
}