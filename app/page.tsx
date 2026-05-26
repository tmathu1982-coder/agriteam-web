import Image from "next/image";
import { Phone, MapPin, Mail, Leaf, Info } from "lucide-react"; 

export default function Home() {
  const hotline = "0902590480";
  const hotlineDisplay = "0902.590.480";

  // Dữ liệu 2 sản phẩm Mật rỉ đường
  const products = [
    {
      id: 1,
      name: "Mật Rỉ Đường Brix 73%",
      subName: "(Đường 48%)",
      category: "Nuôi cấy vi sinh-Xử Lý Nước",
      weight: "5 lít / Can",
      image: "/products/matritrang.png", 
      ingredients: "Đường (30-40% sucrose), Khoáng chất (K, Mg, Ca, Fe, Mn), Vitamin nhóm B (B1,B5,B6),Sucrose, glucose, fructose. Chất khô ~75% carbohydrate, Nước ~22%.",
      usage: [
        "Xử lý kỵ khí: Bổ sung cacbon cho vi sinh vật yếm khí phân hủy chất hữu cơ.",
        "Bổ sung dinh dưỡng: Cung cấp dưỡng chất thiếu hụt trong nước thải để nâng cao hiệu quả xử lý.",
        "Pha loãng với nước (tỷ lệ 1:10 hoặc 1:20).Đóng vai trò là nguồn dinh dưỡng carbon thiết yếu để vi sinh vật (EM1, phân hữu cơ) phát triển mạnh mẽ.",
        
      ]
    },
    {
      id: 2,
      name: "Gạo Swarna Ấn Độ",
      subName: "(5% tấm)",
      category: "Gạo nhập khẩu",
      weight: "20kg / bao",
      image: "/products/gao-swarna.jpg", 
      ingredients: "Moisture = 14% ,Broken = 05%, Damage/Discolour:3% ,Chalky= 5% FM: 0.5% ,Avg length = 5.35-5.40 MM,Smell = No of odour ,Mill Degree = well Milled ,Well Cleaned , Free from live/Death weevils ,Silky  & Sortex cargo",
      usage: [
        "Gạo Swarna hay còn biết đến với tên gọi gạo Mansuri là một trong những loại gạo Ấn Độ ngon, tốt nhất cho sức khỏe, đặc biệt là những người bị bệnh tiểu đường.",
        ]
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* HEADER - CHỈ GIỮ LOGO NGUYÊN BẢN, BỎ CHỮ AGRI TEAM */}
      <header className="bg-white text-[#0A4D34] sticky top-0 z-50 shadow-sm border-b-4 border-[#0A4D34]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          
          {/* Khu vực Logo góc trái trên cùng */}
          <div className="flex items-center">
            <Image 
              src="/logo-agriteam.png" // Trò lưu ý kiểm tra chính xác đuôi file .png hoặc .jpg trong thư mục public nhé
              alt="Agriteam Logo" 
              width={160} 
              height={60} 
              className="object-contain"
              priority
            />
          </div>

          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#ve-chung-toi" className="hover:text-[#20B2AA] transition">Về Chúng Tôi</a>
            <a href="#san-pham" className="hover:text-[#20B2AA] transition">Sản Phẩm</a>
            <a href="#lien-he" className="hover:text-[#20B2AA] transition">Liên Hệ</a>
          </nav>
          
          <a href={`tel:${hotline}`} className="flex items-center gap-2 bg-[#0A4D34] text-white px-5 py-2.5 rounded-full font-bold hover:bg-[#073a27] transition shadow-sm">
            <Phone size={18} />
            {hotlineDisplay}
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="ve-chung-toi" className="bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-green-50 py-24 border-b-8 border-[#20B2AA]">
        <div className="max-w-6xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white text-[#0A4D34] border border-[#0A4D34] px-5 py-2 rounded-full text-sm font-bold mb-8 shadow-sm">
            <Leaf size={16} />
            <span>Nông Nghiệp Sạch - Nông Nghiệp Hữu Cơ</span>
          </div>
          
          <h2 className="text-xl md:text-3xl font-bold text-gray-600 mb-2 uppercase tracking-wide">
            Công Ty Cổ Phần Xuất Nhập Khẩu Thương Mại
          </h2>
          <h1 className="text-7xl md:text-9xl font-black text-[#0A4D34] mb-8 tracking-tighter drop-shadow-md">
            AGRI TEAM
          </h1>
          
          <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-4xl mx-auto font-medium">
            Tiền thân là công ty chuyên xuất nhập khẩu và dịch vụ, nay nắm bắt nhu cầu thị trường, 
            <strong className="text-[#0A4D34]"> AGRI TEAM</strong> đẩy mạnh cung cấp các dòng sản phẩm chất lượng cao, 
            đặc biệt là Mật Rỉ Đường phục vụ hiệu quả cho nông nghiệp bền vững và xử lý môi trường.
          </p>
          <a href="#san-pham" className="inline-block bg-[#20B2AA] text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-[#188c86] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            Khám Phá Sản Phẩm Chuyên Dụng
          </a>
        </div>
      </section>

      {/* SẢN PHẨM SECTION - HIỆU ỨNG HOVER */}
      <section id="san-pham" className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black text-gray-900 mb-4">Mật Rỉ Đường Chuyên Dụng</h3>
          <p className="text-lg text-gray-600">Rê chuột vào sản phẩm để xem thông tin chi tiết và công dụng.</p>
          <div className="w-24 h-1.5 bg-[#20B2AA] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group relative w-full h-[500px] bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden cursor-pointer">
              
              {/* MẶT TRƯỚC */}
              <div className="absolute inset-0 p-8 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0 bg-white z-10">
                {/* Khung chứa ảnh sản phẩm thật - NÂNG CẤP KÍCH THƯỚC VÀ BO GÓC */}
  <div className="relative w-72 h-72 mb-6 flex items-center justify-center overflow-hidden bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
    <Image 
      src={product.image} 
      alt={product.name} 
      fill
      className="object-contain p-4 transition-transform duration-300 group-hover:scale-110 rounded-3xl"
    />
  </div>
  
  {/* ... Các phần hiển thị tên và quy cách giữ nguyên ... */}
                <h4 className="text-3xl font-black text-[#0A4D34] text-center">{product.name}</h4>
                <p className="text-lg font-bold text-amber-600 mt-2 mb-4">{product.subName}</p>
                <span className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Quy cách: {product.weight}</span>
                <span className="text-[#20B2AA] font-bold text-xl text-center uppercase tracking-wider">{product.category}</span>
                
                <div className="mt-auto flex items-center gap-2 text-gray-400 text-sm animate-pulse">
                  <Info size={16}/> Xem chi tiết
                </div>
              </div>

              {/* MẶT SAU (Trượt lên khi hover) */}
              <div className="absolute inset-0 bg-[#0A4D34] text-white p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-20 flex flex-col justify-center">
                <h4 className="text-2xl font-black text-amber-400 mb-2">{product.name} {product.subName}</h4>
                <p className="text-green-100 mb-6 font-medium italic border-b border-green-700 pb-4">Dùng cho: {product.category}</p>
                
                <div className="mb-6">
                  <h5 className="font-bold text-lg text-white flex items-center gap-2 mb-2">
                    <span className="bg-white text-[#0A4D34] w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span> 
                    Thành phần chính:
                  </h5>
                  <p className="text-green-50 leading-relaxed text-sm pl-8">{product.ingredients}</p>
                </div>

                <div>
                  <h5 className="font-bold text-lg text-white flex items-center gap-2 mb-3">
                     <span className="bg-white text-[#0A4D34] w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span> 
                     Công dụng & Cách dùng:
                  </h5>
                  <ul className="space-y-3 text-green-50 text-sm pl-8">
                    {product.usage.map((use, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#20B2AA] mt-1">✔</span>
                        <span className="leading-relaxed">{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="lien-he" className="bg-gray-900 text-gray-300 py-16 border-t-8 border-[#0A4D34]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="space-y-6">
            <div className="bg-white p-2 rounded-xl inline-block">
              <Image src="/logo-agriteam.png" alt="Agriteam Logo" width={140} height={50} className="object-contain"/>
            </div>
            <div>
              <p className="text-gray-400 font-bold uppercase mb-1">Công Ty Cổ Phần Xuất Nhập Khẩu Thương Mại Agri Team</p>
              <p className="text-white bg-gray-800 inline-block px-3 py-1 rounded font-mono text-sm border border-gray-700">MST: 0313671366</p>
            </div>
          </div>

          <div className="space-y-6 md:pl-10">
            <h4 className="text-xl font-bold text-white border-b border-gray-700 pb-3">Thông Tin Liên Hệ</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#20B2AA] mt-1 flex-shrink-0" size={20}/>
                <p>Số 36, Đường D10, Khu Phố 6, Phường Phước Long, Thành phố Hồ Chí Minh, Việt Nam</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#20B2AA] flex-shrink-0" size={20}/>
                <p>info@agriteam.com.vn</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#20B2AA] flex-shrink-0" size={20}/>
                <p className="text-xl font-bold text-white">{hotlineDisplay}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AGRI TEAM. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}