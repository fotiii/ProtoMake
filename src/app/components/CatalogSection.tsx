import { ImageWithFallback } from './figma/ImageWithFallback';

export function CatalogSection() {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1625465329054-dde00a74a072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZXQlMjBhdXRvbW90aXZlJTIwcGFydHMlMjBjYXIlMjBkZXRhaWxzfGVufDF8fHx8MTc3MDc5MzQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Салон",
      title: "Детали салона",
      price: "от 35₽"
    },
    {
      image: "https://images.unsplash.com/photo-1736667117808-d8e33a51cd7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZXIlMjBwcmludGluZyUyMG9iamVjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwNzkzNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Кузов",
      title: "Усиление кузова",
      price: "от 65₽"
    },
    {
      image: "https://images.unsplash.com/photo-1626932710390-0ac853964d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMHBsYXN0aWMlMjBjbGlwcyUyMGZhc3RlbmVyc3xlbnwxfHx8fDE3NzA3OTM0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Усиления",
      title: "Бытовые ремкомплекты",
      price: "от 150₽"
    },
    {
      image: "https://images.unsplash.com/photo-1769151174211-a1b2d41117bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwM0QlMjBwcmludGluZyUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzcwNzkzNDgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Заказы",
      title: "Индивидуальные заказы и сканирование",
      price: "от 180₽"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#f5f5f5] to-[#1e1e1e] py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="mb-12 relative bg-white/40 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/60 before:to-white/20 before:-z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e1e1e] mb-4 relative z-10">
            Направления, с которыми к нам обращаются чаще всего
          </h2>
          <p className="text-gray-600 text-lg relative z-10">
            Это не интернет-магазин со складом, а ориентир по типовым задачам и стартовым ценам
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-[#f8cd02] text-[#1e1e1e] px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-[#1e1e1e] mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-3">Цена: {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
