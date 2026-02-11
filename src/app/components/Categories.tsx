import { ImageWithFallback } from './figma/ImageWithFallback';

export function Categories() {
  const brands = [
    {
      name: 'Renault',
      displayName: 'Renault',
      count: '120+ деталей',
      image: 'https://images.unsplash.com/photo-1687198794232-6453a1d9d948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5hdWx0JTIwbG9nbyUyMGNhcnxlbnwxfHx8fDE3NjY0ODg5MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Lada',
      displayName: 'Lada (ВАЗ)',
      count: '180+ деталей',
      image: 'https://images.unsplash.com/photo-1569960155442-1528cfbbebbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWRhJTIwdmF6JTIwY2FyfGVufDF8fHx8MTc2NjQ4ODkwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'UAZ',
      displayName: 'УАЗ',
      count: '95+ деталей',
      image: 'https://images.unsplash.com/photo-1613743146922-6634a6706684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1YXolMjBjYXIlMjBydXNzaWFufGVufDF8fHx8MTc2NjQ4ODkwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Peugeot',
      displayName: 'Peugeot',
      count: '110+ деталей',
      image: 'https://images.unsplash.com/photo-1742811969430-dcce2d894691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXVnZW90JTIwbG9nbyUyMGNhcnxlbnwxfHx8fDE3NjY0ODg5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Suzuki',
      displayName: 'Suzuki',
      count: '85+ деталей',
      image: 'https://images.unsplash.com/photo-1694928938628-5be5454d3302?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXp1a2klMjBjYXIlMjBsb2dvfGVufDF8fHx8MTc2NjQ4ODkwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Nissan',
      displayName: 'Nissan',
      count: '140+ деталей',
      image: 'https://images.unsplash.com/photo-1687730594701-88cdea1ef5ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaXNzYW4lMjBjYXIlMjBsb2dvfGVufDF8fHx8MTc2NjQ4ODkwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section className="bg-[rgb(255,255,255)] py-6 border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-extrabold text-[#1e1e1e]">Подборки по брендам</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <button
              key={brand.name}
              className="group bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#f8cd02] hover:shadow-lg transition-all text-left"
            >
              <div className="relative h-24 bg-gray-100 overflow-hidden">
                <ImageWithFallback 
                  src={brand.image} 
                  alt={brand.displayName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-3">
                <h3 className="font-bold text-[#1e1e1e]">{brand.displayName}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}