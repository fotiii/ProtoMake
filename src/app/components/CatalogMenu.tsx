import { ChevronRight } from 'lucide-react';

interface SubCategory {
  name: string;
  count?: number;
}

interface Category {
  name: string;
  subcategories?: SubCategory[];
}

export function CatalogMenu() {
  const categories: Category[] = [
    {
      name: 'Салон',
      subcategories: [
        { name: 'Клипсы и крепления', count: 45 },
        { name: 'Крючки для вещей', count: 28 },
        { name: 'Держатели телефона', count: 15 },
        { name: 'Органайзеры', count: 22 },
        { name: 'Коврики и накладки', count: 18 }
      ]
    },
    {
      name: 'Кузов',
      subcategories: [
        { name: 'Бамперы и молдинги', count: 35 },
        { name: 'Заглушки', count: 42 },
        { name: 'Решетки радиатора', count: 24 },
        { name: 'Накладки на пороги', count: 16 }
      ]
    },
    {
      name: 'Двигатель',
      subcategories: [
        { name: 'Заслонки', count: 12 },
        { name: 'Крепления', count: 28 },
        { name: 'Кронштейны', count: 19 },
        { name: 'Патрубки', count: 15 }
      ]
    },
    {
      name: 'Тюнинг',
      subcategories: [
        { name: 'Аэродинамические обвесы', count: 8 },
        { name: 'Декоративные элементы', count: 34 },
        { name: 'Спортивные детали', count: 16 }
      ]
    },
    {
      name: 'Аксессуары',
      subcategories: [
        { name: 'Брелоки', count: 12 },
        { name: 'Номерные рамки', count: 8 },
        { name: 'Прочее', count: 25 }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 sticky top-24">
      {/* Header */}
      <div className="bg-[#1e1e1e] text-white p-4 rounded-t-lg">
        <h3 className="font-bold">Каталог товаров</h3>
      </div>

      {/* Categories */}
      <nav className="p-3">
        {categories.map((category) => (
          <div key={category.name} className="mb-1 group">
            <a
              href="#"
              className="flex items-center justify-between px-3 py-2 hover:bg-[#f8cd02] rounded-lg transition-all font-medium text-[#1e1e1e] text-sm"
            >
              <span>{category.name}</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </nav>

      {/* Bottom Action */}
      <div className="p-3 border-t border-gray-200">
        <a
          href="#"
          className="block w-full bg-[#f8cd02] text-[#1e1e1e] px-4 py-2 rounded-lg font-bold text-center hover:bg-[#e0bd02] transition-all text-sm mb-2"
        >
          Все товары
        </a>
        <a
          href="#"
          className="block w-full bg-white text-[#1e1e1e] border-2 border-[#1e1e1e] px-4 py-2 rounded-lg font-bold text-center hover:bg-[#1e1e1e] hover:text-white transition-all text-sm"
        >
          Индивидуальный заказ
        </a>
      </div>
    </div>
  );
}