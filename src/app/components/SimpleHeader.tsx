import Group89 from '../../imports/Group89-96-161';

export function SimpleHeader() {
  return (
    <header className="bg-[#1e1e1e] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-12 w-10">
              <Group89 />
            </div>
            <span className="text-2xl font-bold text-white">PROTOMAKE</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-gray-300 hover:text-[#f8cd02] transition-colors">
              Главная
            </a>
            <a href="#technology" className="text-gray-300 hover:text-[#f8cd02] transition-colors">
              Технологии
            </a>
            <a href="#catalog" className="text-gray-300 hover:text-[#f8cd02] transition-colors">
              Каталог
            </a>
            <a href="#payment" className="text-gray-300 hover:text-[#f8cd02] transition-colors">
              Оплата
            </a>
            <a href="#process" className="text-gray-300 hover:text-[#f8cd02] transition-colors">
              Процесс
            </a>
          </nav>
          
          {/* Contact Button */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:+79237496588" 
              className="flex items-center gap-2 bg-[#f8cd02] text-[#1e1e1e] px-6 py-2 rounded-full font-medium hover:bg-[#e0ba02] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">+7 923 749-65-88</span>
              <span className="sm:hidden">Позвонить</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}