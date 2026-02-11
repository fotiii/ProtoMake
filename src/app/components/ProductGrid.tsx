import { ShoppingCart, Heart, Eye } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  stock: number;
  category: string;
  badge?: string;
  inStock: boolean;
}

export function ProductGrid() {
  const products: Product[] = [
    {
      id: 1,
      name: 'Клипса заглушка облицовки внутренней ручки дверки на УАЗ Патриот 5шт',
      price: 159,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwcGFydHN8ZW58MXx8fHwxNzY2MzExNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stock: 5,
      category: 'УАЗ',
      badge: 'Популярное',
      inStock: true
    },
    {
      id: 2,
      name: 'Крючки для вещей на ручку салона 4 шт Renault Lada Nissan Datsun',
      price: 193,
      originalPrice: 479,
      discount: 56,
      image: 'https://images.unsplash.com/photo-1761319386454-7d54d5e4a89b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMHRyaW18ZW58MXx8fHwxNzY2NDAxMDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stock: 17,
      category: 'RENAULT',
      badge: 'Распродажа',
      inStock: true
    },
    {
      id: 3,
      name: 'Крепление для держателя телефона и беспроводной зарядки Lada Granta',
      price: 179,
      originalPrice: 560,
      discount: 67,
      image: 'https://images.unsplash.com/photo-1692764449235-6c46b86ec252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGhvbGRlciUyMG1vdW50fGVufDF8fHx8MTc2NjQwMTAyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stock: 17,
      category: 'LADA',
      badge: 'Распродажа',
      inStock: true
    },
    {
      id: 4,
      name: 'Крепление для держателя телефона и беспроводной зарядки Renault Logan',
      price: 179,
      originalPrice: 560,
      discount: 67,
      image: 'https://images.unsplash.com/photo-1692764449235-6c46b86ec252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGhvbGRlciUyMG1vdW50fGVufDF8fHx8MTc2NjQwMTAyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stock: 25,
      category: 'RENAULT',
      inStock: true
    },
    {
      id: 5,
      name: 'Заслонка рециркуляции (отопителя) УАЗ Патриот, УАЗ 469 нижняя и средняя',
      price: 774,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwcGFydHN8ZW58MXx8fHwxNzY2MzExNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stock: 28,
      category: 'УАЗ',
      inStock: true
    },
    {
      id: 6,
      name: 'Направляющие сушилки для белья Nika, Ремком комплект, 2 шт (Прочный пластик)',
      price: 244,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwcGFydHN8ZW58MXx8fHwxNzY2MzExNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stock: 6,
      category: 'NIKA',
      badge: 'Новинка',
      inStock: true
    },
    {
      id: 7,
      name: 'Фиксатор поворотников для рычагов Peugeot 407 Ремкомплект Улучшенная версия',
      price: 207,
      originalPrice: 726.8,
      discount: 71,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwcGFydHN8ZW58MXx8fHwxNzY2MzExNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stock: 28,
      category: 'PEUGEOT',
      inStock: true
    },
    {
      id: 8,
      name: 'Втулка рычага кулисы переключения передач Lada Granta FL, Kalina 2',
      price: 159,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwcGFydHN8ZW58MXx8fHwxNzY2MzExNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stock: 7,
      category: 'LADA',
      inStock: true
    },
  ];

  return (
    <section className="bg-white py-16 border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-[#1e1e1e] mb-2">Хиты продаж</h2>
            <p className="text-gray-600">Популярные запчасти для вашего автомобиля</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#1e1e1e] font-bold hover:gap-3 transition-all">
            Смотреть все
            <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all group border border-gray-200"
            >
              {/* Image container */}
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                {/* Badges */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                  {product.inStock && (
                    <span className="bg-[#f8cd02] text-[#1e1e1e] px-3 py-1 rounded-full font-bold text-xs">
                      В наличии
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-[#1e1e1e] text-white px-3 py-1 rounded-full font-bold text-xs">
                      -{product.discount}%
                    </span>
                  )}
                  {product.badge && !product.discount && (
                    <span className="bg-[#f8cd02] text-[#1e1e1e] px-3 py-1 rounded-full font-bold text-xs">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white rounded-full p-2 hover:bg-[#f8cd02] transition-colors shadow-md">
                    <Heart className="w-5 h-5 text-[#1e1e1e]" />
                  </button>
                  <button className="bg-white rounded-full p-2 hover:bg-[#f8cd02] transition-colors shadow-md">
                    <Eye className="w-5 h-5 text-[#1e1e1e]" />
                  </button>
                </div>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">
                  {product.category}
                </div>
                
                <h3 className="font-bold text-[#1e1e1e] mb-3 line-clamp-2 min-h-[3rem] leading-snug">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-2xl font-extrabold text-[#1e1e1e]">{product.price}₽</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through mb-1">
                      {product.originalPrice}₽
                    </span>
                  )}
                </div>

                {/* Stock info */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <span className="text-sm text-gray-500">Остаток:</span>
                  <span className="font-bold text-[#1e1e1e]">{product.stock} шт</span>
                </div>

                {/* Buy button */}
                <button className="w-full bg-[#1e1e1e] text-white py-3 rounded-lg font-bold hover:bg-[#f8cd02] hover:text-[#1e1e1e] transition-all flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Купить
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        <div className="mt-12 text-center">
          <button className="bg-white text-[#1e1e1e] border-2 border-gray-200 px-8 py-4 rounded-lg font-bold hover:border-[#f8cd02] hover:shadow-lg transition-all">
            Показать ещё товары
          </button>
        </div>
      </div>
    </section>
  );
}