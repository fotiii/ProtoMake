import { ShoppingCart, Search, User, Heart, Phone, Mail } from 'lucide-react';
import Group89 from '../../imports/Group89-96-161';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      {/* Top bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-wrap items-center justify-between py-2 text-xs md:text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+79237496588" className="flex items-center gap-1 text-gray-600 hover:text-[#1e1e1e] transition-colors">
                <Phone className="w-4 h-4" />
                <span>+7 923 749-65-88</span>
              </a>
              <a href="mailto:info@protomake.ru" className="flex items-center gap-1 text-gray-600 hover:text-[#1e1e1e] transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@protomake.ru</span>
              </a>
            </div>
            <div className="text-gray-600">
              Бесплатная доставка от 5000₽
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="h-12 w-10">
                <Group89 />
              </div>
              <span className="text-2xl font-bold text-[#1e1e1e]">PROTOMAKE</span>
            </div>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Поиск запчастей..."
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#f8cd02] transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#f8cd02] p-2 rounded-lg hover:bg-[#e0bd02] transition-colors">
                  <Search className="w-5 h-5 text-[#1e1e1e]" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="hidden md:flex items-center gap-2 text-gray-600 hover:text-[#1e1e1e] transition-colors">
                <Heart className="w-5 h-5" />
                <span className="text-sm">Избранное</span>
              </button>
              <button className="hidden md:flex items-center gap-2 text-gray-600 hover:text-[#1e1e1e] transition-colors">
                <User className="w-5 h-5" />
                <span className="text-sm">Войти</span>
              </button>
              <button className="flex items-center gap-2 bg-[#f8cd02] px-4 py-2 rounded-lg hover:bg-[#e0bd02] transition-colors">
                <ShoppingCart className="w-5 h-5 text-[#1e1e1e]" />
                <span className="font-bold text-[#1e1e1e]">0</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}