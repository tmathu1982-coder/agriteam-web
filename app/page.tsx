import Image from "next/image";
import { Phone, MapPin, Leaf } from "lucide-react"; 

export default function Home() {
  const hotline = "0902590480";
  const hotlineDisplay = "0902.590.480";

  // Danh mục sản phẩm đã được chuẩn hóa
  const products = [
    {
      id: 1,
      name: "Phân Bón Lá",
      category: "Dinh dưỡng cây trồng",
      description: "Kích rễ, đẻ nhánh Canxi-Bo-Kẽm, siêu vô gạo. Tối ưu cho lúa và cây công nghiệp.",
      image: "/products/phan-bon.png", 
      icon: "🌾",
    },
    {
      id: 2,
      name: "Đặc Trị Nấm Bệnh",
      category: "Bảo vệ thực vật",
      description: "Ngăn ngừa nấm Phytophthora, Agrifosss ngừa bệnh hiệu quả cao.",
      image: "/products/tri-benh.png", 
      icon: "🛡️",
    },
    {
      id: 3,
      name: "Men Vi Sinh",
      category: "Chế phẩm sinh học",
      description: "Men vi sinh Trichoderma, Chế phẩm EM1 & EM2 phục vụ nông nghiệp sạch.",
      image: "/products/men-vi-sinh.png", 
      icon: "🔬",
    },
    {
      id: 4,
      name: "Mật Rỉ Đường",
      category: "Phụ gia & Ủ men",
      description: "Mật rỉ 75% Brix cho thủy sản và 73% Brix chuyên dùng ủ men vi sinh.",
      image: "/products/mat-ri.png", 
      icon: "🍯",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* HEADER - LOGO LỚN, KHÔNG CÒN CHỮ */}
      <header className="bg-[#0A4D34] text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          
          <div className="flex items-center">
            <div className="bg-white px-5 py-2 rounded-xl shadow-sm hover:shadow-md transition">
              <Image 
                src="/logo-agriteam.png" 
                alt="Agriteam Logo" 
                width={180} 
                height={70} 
                className="object-contain"
              />
            </div>
          </div>

          <nav className="hidden md:flex gap-6 font-medium text-green-100">
            <a href="#ve-chung-toi" className="hover:text-white transition">Về Chúng Tôi</a>
            <a href="#san-pham" className="hover:text-white transition">Sản Phẩm</a>
            <a href="#lien-he" className="hover:text-white transition">Liên Hệ</a>
          </nav>
          
          <a href={`tel:${hotline}`} className="hidden sm:flex items-center gap-2 bg-white text-[#0A4D34] px-6 py-2.5 rounded-full font-bold hover:bg-green-100 transition shadow-sm">
            <Phone size={18} />
            {hotlineDisplay}
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="ve-chung-toi" className="bg-gradient-to-br from-white via-green-50 to-[#E6F3EF] py-28 border-b-8 border-[#20B2AA]">
        <div className="max-w-5xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 bg-green-100 text-[#0A4D34] px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide">
            <Leaf size={16} />
            <span>Nông Nghiệp Công Nghệ Cao</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Công ty TNHH Đầu tư Nông nghiệp & <br/>
            <span className="text-[#0A4D34]">Công nghệ <span className="text-[#20B2AA]">Agriteam</span></span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
            Tiên phong cung cấp các giải pháp phân bón, chế phẩm sinh học và mật rỉ đường chất lượng hàng đầu, 
            hướng tới nền nông nghiệp xanh, sạch và tối ưu hóa lợi nhuận.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#san-pham" className="bg-[#0A4D34] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#073a27] hover:shadow-lg transition-all">
              Danh Mục Sản Phẩm
            </a>
          </div>
        </div>
      </section>

      {/* SẢN PHẨM SECTION */}
      <section id="san-pham" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16 border-b-2 border-gray-100 pb-6">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">Sản phẩm Nổi bật</h3>
            <p className="text-gray-600 mt-2">Chất lượng vượt trội - Hiệu quả tối đa</p>
          </div>
          <div className="w-32 h-1.5 bg-[#20B2AA] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-full h-56 bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl flex items-center justify-center mb-6 border border-gray-200 relative p-4 overflow-hidden">
                <span className="absolute top-3 left-3 text-3xl opacity-30">{product.icon}</span>
                <div className="text-7xl opacity-10">{product.icon}</div>
                {/* Khi có ảnh sản phẩm đã xóa nền, bỏ dấu comment (//) ở dòng dưới và xóa dòng icon ở trên đi */}
                {/* <Image src={product.image} alt={product.name} fill className="object-contain p-4 hover:scale-105 transition-transform" /> */}
              </div>
              
              <div className="flex-grow">
                <span className="text-xs font-bold text-[#20B2AA] bg-cyan-50 border border-cyan-100 px-3 py-1.5 rounded-full">
                  {product.category}
                </span>
                <h4 className="text-xl font-black text-gray-900 mt-4 mb-2 leading-snug">
                  {product.name}
                </h4>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              <a href={`tel:${hotline}`} className="block text-center bg-gray-50 text-[#0A4D34] py-3.5 rounded-xl font-bold hover:bg-[#0A4D34] hover:text-white transition border border-gray-200 hover:border-[#0A4D34]">
                Liên hệ báo giá
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="lien-he" className="bg-gray-900 text-gray-300 py-12 border-t-8 border-[#0A4D34]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-10 text-sm">
          
          <div className="md:w-1/2 space-y-4">
            <div className="bg-white p-2 rounded-xl inline-block mb-2">
              <Image src="/logo-agriteam.png" alt="Agriteam Logo" width={140} height={50} className="object-contain"/>
            </div>
            <p className="text-gray-400 text-base">Công ty TNHH Đầu tư Nông nghiệp & Công nghệ Agriteam.</p>
            <p className="text-base text-white"><strong>MST:</strong> 0313671366</p>
          </div>

          <div className="md:w-1/2 flex flex-col sm:flex-row gap-8 justify-end">
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 text-center flex flex-col items-center justify-center min-w-[250px] hover:bg-gray-700 transition">
              <p className="text-gray-400 mb-3 font-medium uppercase tracking-wider text-xs">Hotline tư vấn 24/7</p>
              <a href={`tel:${hotline}`} className="text-3xl font-black text-[#20B2AA] hover:text-white transition flex items-center gap-3">
                <Phone size={28}/>
                {hotlineDisplay}
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Agriteam. All rights reserved. Giải pháp Nông nghiệp Công nghệ cao.</p>
        </div>
      </footer>
    </main>
  );
}