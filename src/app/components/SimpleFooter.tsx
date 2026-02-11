import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import Group89 from '../../imports/Group89-96-161';

export function SimpleFooter() {
  return (
    <footer className="bg-[#1e1e1e] text-white py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col items-center text-center space-y-4 mb-6">
          {/* Logo and Company */}
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl font-bold">PROTOMAKE</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Профессиональная 3D печать продуктов с 2020 года
            </p>
          </div>
          
          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#hero" className="text-gray-400 hover:text-[#f8cd02] transition-colors">
              Главная
            </a>
            <a href="#technology" className="text-gray-400 hover:text-[#f8cd02] transition-colors">
              Технологии
            </a>
            <a href="#catalog" className="text-gray-400 hover:text-[#f8cd02] transition-colors">
              Каталог
            </a>
            <a href="#payment" className="text-gray-400 hover:text-[#f8cd02] transition-colors">
              Оплата
            </a>
            <a href="#process" className="text-gray-400 hover:text-[#f8cd02] transition-colors">
              Процесс
            </a>
          </nav>
          
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-[#f8cd02] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-4 text-center">
          <p className="text-gray-400 text-xs">
            © 2025 PROTOMAKE. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}