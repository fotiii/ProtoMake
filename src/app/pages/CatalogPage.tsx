import { useDeferredValue, useState } from 'react';
import { ArrowRight, Search, SlidersHorizontal, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { catalogCategories, catalogItems } from '../data/catalog';

type CatalogPageProps = {
  onOpenQuote: (defaults?: { productName?: string; carBrand?: string; quantity?: string }) => void;
};

export function CatalogPage({ onOpenQuote }: CatalogPageProps) {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [search, setSearch] = useState('');
  const deferredSearch = useDeferredValue(search);

  const normalizedSearch = deferredSearch.trim().toLowerCase();
  const filteredItems = catalogItems.filter((item) => {
    const matchesCategory = activeCategory === 'Все' || item.category === activeCategory;
    const haystack = `${item.name} ${item.brand} ${item.category} ${item.description}`.toLowerCase();
    const matchesSearch = normalizedSearch.length === 0 || haystack.includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#f4f0e7]">
      <section className="border-b border-[#1e1e1e]/8 bg-[#111111] py-16 text-white">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#f8cd02]">Каталог PROTOMAKE</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.02] lg:text-6xl">
              Каталог оформлен как маркетплейс, но здесь всё заточено под подбор и расчёт, а не под бездумную корзину.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-gray-300">
              Выбирайте типовую позицию как точку входа, а дальше уже адаптируем деталь под конкретную машину, задачу или бытовой кейс.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#f8cd02]">Быстрый сценарий</p>
            <p className="mt-3 text-xl font-semibold">Нужна нестандартная деталь?</p>
            <p className="mt-2 text-sm text-gray-300">Открывайте форму расчёта сразу из карточки. Мы используем каталог как витрину типовых решений, а не как жёсткий складской список.</p>
            <button
              type="button"
              onClick={() => onOpenQuote()}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#f8cd02] px-5 py-3 font-semibold text-[#111111]"
            >
              Открыть форму расчёта
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="mb-8 grid gap-4 rounded-[2rem] bg-white p-5 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
            <label className="flex items-center gap-3 rounded-full border border-[#1e1e1e]/10 bg-[#faf7f2] px-5 py-3">
              <Search className="h-4 w-4 text-[#857760]" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-full bg-transparent outline-none"
                placeholder="Поиск по детали, бренду или задаче"
              />
            </label>
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1e1e1e]/10 px-4 py-3 text-sm text-[#5d5547]">
                <SlidersHorizontal className="h-4 w-4" />
                Фильтры
              </div>
              {catalogCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-full px-4 py-3 text-sm transition-colors ${activeCategory === category ? 'bg-[#111111] text-white' : 'border border-[#1e1e1e]/10 bg-white text-[#5d5547]'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[#8d8066]">Результаты</p>
              <h2 className="text-2xl font-bold text-[#111111]">{filteredItems.length} позиций для подбора и расчёта</h2>
            </div>
            <Link to="/" className="hidden text-sm font-semibold text-[#111111] md:inline-flex">
              Вернуться на главную
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredItems.map((item) => (
                <article key={item.id} className="overflow-hidden rounded-[2rem] bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative">
                    <img src={item.image} alt={item.name} className="h-64 w-full object-cover" />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      {item.badges.map((badge) => (
                        <span key={badge} className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-[#111111] backdrop-blur-sm">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-[#8d8066]">{item.brand}</p>
                        <h3 className="mt-2 text-lg font-bold leading-snug text-[#111111]">{item.name}</h3>
                      </div>
                      <div className="inline-flex items-center gap-1 rounded-full bg-[#f8cd02]/20 px-3 py-1 text-sm font-semibold text-[#111111]">
                        <Star className="h-4 w-4 fill-current" />
                        {item.rating}
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-[#5d5547]">{item.description}</p>

                    <div className="grid grid-cols-2 gap-3 text-sm text-[#5d5547]">
                      <div className="rounded-[1.25rem] bg-[#faf7f2] p-3">
                        <p className="text-xs uppercase tracking-[0.14em] text-[#8d8066]">Материал</p>
                        <p className="mt-1 font-semibold text-[#111111]">{item.material}</p>
                      </div>
                      <div className="rounded-[1.25rem] bg-[#faf7f2] p-3">
                        <p className="text-xs uppercase tracking-[0.14em] text-[#8d8066]">Срок</p>
                        <p className="mt-1 font-semibold text-[#111111]">{item.leadTime}</p>
                      </div>
                    </div>

                    <div className="rounded-[1.25rem] border border-[#1e1e1e]/8 bg-[#faf7f2] p-4">
                      <p className="text-xs uppercase tracking-[0.14em] text-[#8d8066]">Когда это нужно</p>
                      <p className="mt-2 text-sm leading-relaxed text-[#111111]">{item.useCase}</p>
                    </div>

                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-sm text-[#8d8066]">{item.stockLabel}</p>
                        <div className="mt-1 flex items-center gap-2">
                          <span className="text-2xl font-bold text-[#111111]">{item.price}₽</span>
                          {item.originalPrice ? <span className="text-sm text-gray-400 line-through">{item.originalPrice}₽</span> : null}
                        </div>
                        <p className="mt-1 text-xs text-[#8d8066]">{item.reviews} отзывов / заявок по похожим позициям</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenQuote({ productName: item.name, carBrand: item.brand, quantity: '1' })}
                      className="inline-flex w-full items-center justify-center rounded-full bg-[#111111] px-5 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
                    >
                      Запросить расчёт по этой позиции
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <aside className="space-y-5">
              <div className="rounded-[2rem] bg-[#111111] p-6 text-white">
                <p className="text-sm uppercase tracking-[0.18em] text-[#f8cd02]">Маркетплейс, но умный</p>
                <h3 className="mt-3 text-2xl font-bold">Если нужной детали нет в сетке, это не значит, что её нельзя сделать.</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">В каталоге только типовые сценарии. Для редких и сложных случаев проще открыть форму и приложить вводные.</p>
                <button
                  type="button"
                  onClick={() => onOpenQuote()}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#f8cd02] px-5 py-3 font-semibold text-[#111111]"
                >
                  Нужна нестандартная деталь
                </button>
              </div>

              <div className="rounded-[2rem] bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.18em] text-[#8d8066]">Что ускоряет расчёт</p>
                <div className="mt-4 space-y-3 text-sm text-[#5d5547]">
                  <p>1. Фото старой детали или места установки.</p>
                  <p>2. Размеры, VIN или артикул.</p>
                  <p>3. Нужное количество и срок.</p>
                </div>
              </div>

              <div className="rounded-[2rem] bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.18em] text-[#8d8066]">Связь без ожидания</p>
                <a href="tel:+79237496588" className="mt-3 block text-2xl font-bold text-[#111111]">
                  +7 923 749-65-88
                </a>
                <p className="mt-2 text-sm text-[#5d5547]">Если задача срочная, лучше звонить. Так быстрее поймём, можно ли запускать печать без дополнительных замеров.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
