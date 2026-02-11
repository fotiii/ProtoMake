import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="bg-[#f5f5f5] py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/30 backdrop-blur-xl rounded-full text-sm text-[#1e1e1e] border border-white/40 shadow-lg">
              <svg className="w-4 h-4 text-[#f8cd02] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span className="font-medium">г. Барнаул ул. Власихинская 59/28Г</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1e1e1e] leading-tight">
              Профессиональная 3D печать
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Производство высококачественных дталей для автомобилей: клипсы, крепления, крючки и другие элементы салона. Изготовление ремкомплектов для бытовых вещей и индивидуальные заказы любой сложности. Быстро, надежно, точно.
            </p>
            
            <a 
              href="tel:+79237496588"
              className="inline-flex items-center gap-4 bg-white/40 backdrop-blur-xl px-8 py-5 rounded-3xl hover:bg-white/50 transition-all text-lg font-medium shadow-lg border border-white/60 group"
            >
              <div className="w-14 h-14 bg-[#f8cd02] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-[#1e1e1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm text-gray-700">Звоните</span>
                <span className="text-xl font-bold text-[#1e1e1e]">+7 923 749-65-88</span>
              </div>
            </a>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="bg-white p-4 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1736667117808-d8e33a51cd7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZXIlMjBwcmludGluZyUyMG9iamVjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwNzkzNDgxfDA&ixlib=rb-4.1.0&q=80&w=200" 
                      alt="Точность"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#1e1e1e]">50<span className="text-[#f8cd02]">+</span></div>
                <div className="text-sm text-gray-600">Видов деталей в производстве</div>
              </div>
              
              <div className="bg-white p-4 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1625465329054-dde00a74a072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZWQlMjBhdXRvbW90aXZlJTIwcGFydHMlMjBjYXIlMjBkZXRhaWxzfGVufDF8fHx8MTc3MDc5MzQ4Mnww&ixlib=rb-4.1.0&q=80&w=200" 
                      alt="Скорость"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#1e1e1e]">24<span className="text-[#f8cd02]">ч</span></div>
                <div className="text-sm text-gray-600">Минимальный срок производства</div>
              </div>
              
              <div className="bg-white p-4 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1769151174211-a1b2d41117bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwM0QlMjBwcmludGluZyUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzcwNzkzNDgyfDA&ixlib=rb-4.1.0&q=80&w=200" 
                      alt="Качество"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#1e1e1e]">0.1<span className="text-[#f8cd02]">см</span></div>
                <div className="text-sm text-gray-600">Точность печати деталей</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1736667117808-d8e33a51cd7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZXIlMjBwcmludGluZyUyMG9iamVjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwNzkzNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="3D печать"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}