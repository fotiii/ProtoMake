import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const slides = [
    {
      title: '3D продукты',
      subtitle: 'для вашего автомобиля',
      description: 'Качественные детали, напечатанные по современной технологии. Точное соответствие оригиналу.',
      image: 'https://images.unsplash.com/photo-1740625940423-a59a65c753c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50aW5nJTIwYXV0b21vdGl2ZSUyMHBhcnRzfGVufDF8fHx8MTc2NjQ4OTc3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Специальное предложение',
      subtitle: 'на все клипсы',
      description: 'Скидка 30% на весь ассортимент клипс и креплений до конца месяца!',
      image: 'https://images.unsplash.com/photo-1620655084623-bdb490b57981?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBjbGlwcyUyMGZhc3RlbmVyc3xlbnwxfHx8fDE3NjY0ODk3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Индивидуальный заказ',
      subtitle: 'любой сложности',
      description: 'Создадим уникальную деталь по вашим чертежам или образцу. Быстро и качественно.',
      image: 'https://images.unsplash.com/photo-1752614672115-adcf3e2596af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZXIlMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc2NjQ2NTczNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    beforeChange: (current: number, next: number) => setCurrentSlide(next)
  };

  return (
    <div className="relative bg-[#1e1e1e] rounded-lg overflow-hidden">
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="relative h-64 md:h-72">
              {/* Background Image */}
              <ImageWithFallback
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e1e1e]/95 via-[#1e1e1e]/80 to-[#1e1e1e]/40"></div>
              
              {/* Content */}
              <div className="absolute inset-0 px-16 py-8 flex flex-col justify-center">
                <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2">
                  {slide.title}
                </h1>
                
                <h2 className="text-xl md:text-2xl font-extrabold text-[#f8cd02] leading-tight mb-3">
                  {slide.subtitle}
                </h2>
                
                <p className="text-sm text-gray-300 mb-4 max-w-lg">
                  {slide.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <button className="bg-[#f8cd02] text-[#1e1e1e] px-4 py-2 rounded-lg font-bold hover:bg-white transition-all text-sm">
                    Смотреть каталог
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom navigation buttons */}
      <button 
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all backdrop-blur-sm z-10"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button 
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all backdrop-blur-sm z-10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}