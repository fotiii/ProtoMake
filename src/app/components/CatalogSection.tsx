import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { catalogItems } from '../data/catalog';

type CatalogSectionProps = {
  onOpenQuote: (defaults?: { productName?: string; carBrand?: string; quantity?: string }) => void;
};

export function CatalogSection({ onOpenQuote }: CatalogSectionProps) {
  const previewItems = catalogItems.slice(0, 4);

  return (
    <section className="bg-gradient-to-b from-[#f5f5f5] to-[#1e1e1e] py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="relative mb-12 rounded-3xl border border-white/60 bg-white/40 p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] backdrop-blur-xl before:absolute before:inset-0 before:-z-10 before:rounded-3xl before:bg-gradient-to-br before:from-white/60 before:to-white/20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="relative z-10 mb-4 text-3xl font-bold text-[#1e1e1e] lg:text-4xl">
                Каталог теперь ведёт на отдельную страницу-маркет
              </h2>
              <p className="relative z-10 max-w-2xl text-lg text-gray-600">
                На главной мы показываем витрину сценариев, а полная версия открывается как отдельный маркетплейс с поиском, фильтрами и карточками под расчёт.
              </p>
            </div>
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Открыть каталог-маркет
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {previewItems.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-[#f8cd02] px-3 py-1 text-sm font-medium text-[#1e1e1e]">
                  {product.category}
                </div>
              </div>
              <div className="space-y-4 p-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#8d8066]">{product.brand}</p>
                  <h3 className="mt-2 text-lg font-bold text-[#1e1e1e]">{product.name}</h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#8d8066]">{product.stockLabel}</p>
                    <p className="text-xl font-bold text-[#1e1e1e]">от {product.price}₽</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenQuote({ productName: product.name, carBrand: product.brand, quantity: '1' })}
                    className="rounded-full border border-[#1e1e1e]/10 px-4 py-2 text-sm font-semibold text-[#1e1e1e] transition-colors hover:border-[#f8cd02] hover:bg-[#f8cd02]"
                  >
                    Рассчитать
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
