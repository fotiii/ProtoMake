import svgPaths from "../../imports/svg-dtizfrogr8";
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white mt-16">
      {/* Newsletter */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-12 max-w-[1200px]">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-extrabold mb-3">Получайте лучшие предложения</h3>
            <p className="text-gray-400 mb-6">Подпишитесь на рассылку и получите скидку 10% на первый заказ</p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Введите ваш email"
                className="flex-1 px-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:outline-none focus:border-[#f8cd02] text-white placeholder-gray-500"
              />
              <button className="bg-[#f8cd02] text-[#1e1e1e] px-6 py-3 rounded-lg font-bold hover:bg-white transition-colors flex items-center gap-2">
                <Send className="w-5 h-5" />
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-12 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[50px] h-[60px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 251.461 294">
                  <g>
                    <path d={svgPaths.p9a60f00} fill="#F8CD02" />
                    <g>
                      <path clipRule="evenodd" d={svgPaths.p1a783a00} fill="white" fillRule="evenodd" />
                      <path d={svgPaths.p604d780} fill="#F0F0F0" />
                    </g>
                  </g>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-extrabold">PROTOMAKE</h3>
                <p className="text-[#f8cd02] text-xs font-bold tracking-widest">ЦИФРОВОЕ ПРОИЗВОДСТВО</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Производство качественных продуктов на современных 3D-принтерах. 
              Индивидуальный подход к каждому клиенту.
            </p>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#f8cd02]" />
                <a href="tel:+78001234567" className="hover:text-white transition-colors">
                  8 (800) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#f8cd02]" />
                <a href="mailto:info@protomake.ru" className="hover:text-white transition-colors">
                  info@protomake.ru
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#f8cd02] flex-shrink-0 mt-0.5" />
                <span>Москва, ул. Примерная, д. 123</span>
              </div>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h4 className="font-bold text-lg mb-4">Каталог</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-[#f8cd02] transition-colors">Салон</a></li>
              <li><a href="#" className="hover:text-[#f8cd02] transition-colors">Кузов</a></li>
              <li><a href="#" className="hover:text-[#f8cd02] transition-colors">Двигатель</a></li>
              <li><a href="#" className="hover:text-[#f8cd02] transition-colors">Тюнинг</a></li>
              <li><a href="#" className="hover:text-[#f8cd02] transition-colors">Аксессуары</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-bold text-lg mb-4">Информация</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-[#f8cd02] transition-colors">О компании</a></li>
              <li><a href="#" className="hover:text-[#f8cd02] transition-colors">Доставка и оплата</a></li>
              <li><a href="#" className="hover:text-[#f8cd02] transition-colors">Гарантия</a></li>
              <li><a href="#" className="hover:text-[#f8cd02] transition-colors">Возврат товара</a></li>
              <li><a href="#" className="hover:text-[#f8cd02] transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-bold text-lg mb-4">Помощь</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-[#f8cd02] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#f8cd02] transition-colors">Индивидуальный заказ</a></li>
              <li><a href="#" className="hover:text-[#f8cd02] transition-colors">Как оформить</a></li>
              <li><a href="#" className="hover:text-[#f8cd02] transition-colors">Статус заказа</a></li>
              <li><a href="#" className="hover:text-[#f8cd02] transition-colors">Поддержка</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-400">© 2024 PROTOMAKE. Все права защищены</p>
          <div className="flex flex-wrap gap-6 text-gray-400">
            <a href="#" className="hover:text-[#f8cd02] transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-[#f8cd02] transition-colors">Условия использования</a>
            <a href="#" className="hover:text-[#f8cd02] transition-colors">Публичная оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}