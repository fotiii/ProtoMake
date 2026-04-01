import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

type NewsCarouselProps = {
  onOpenQuote: () => void;
};

const newsItems = [
  {
    tag: 'Новости производства',
    title: 'Запустили быстрый расчёт по фото для типовых автодеталей',
    description: 'Теперь можно отправить фото и базовые вводные, чтобы быстрее понять срок, материал и ориентировочную стоимость.',
    actionLabel: 'Открыть форму',
    actionType: 'quote' as const,
  },
  {
    tag: 'Каталог',
    title: 'Каталог PROTOMAKE теперь работает как отдельный маркет',
    description: 'Поиск, фильтры, карточки с применением и быстрый запрос расчёта по конкретной позиции.',
    actionLabel: 'Перейти в каталог',
    actionHref: '/catalog',
    actionType: 'link' as const,
  },
  {
    tag: 'Сроки',
    title: 'Для популярных позиций держим быстрый цикл печати 24-72 часа',
    description: 'Срочные задачи всё ещё лучше согласовывать по телефону, но часть типовых решений можно запускать в работу почти сразу.',
    actionLabel: 'Связаться сейчас',
    actionHref: 'tel:+79237496588',
    actionType: 'link' as const,
  },
];

export function NewsCarousel({ onOpenQuote }: NewsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % newsItems.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#111111] py-4 text-white">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-xl">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {newsItems.map((item) => (
              <article key={item.title} className="min-w-full px-5 py-5 lg:px-8 lg:py-6">
                <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#f8cd02]">{item.tag}</p>
                    <h2 className="max-w-3xl text-xl font-bold leading-tight lg:text-2xl">{item.title}</h2>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-300 lg:text-base">{item.description}</p>
                  </div>

                  {item.actionType === 'quote' ? (
                    <button
                      type="button"
                      onClick={onOpenQuote}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f8cd02] px-5 py-3 font-semibold text-[#111111]"
                    >
                      {item.actionLabel}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <a
                      href={item.actionHref}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f8cd02] px-5 py-3 font-semibold text-[#111111]"
                    >
                      {item.actionLabel}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 lg:px-8">
            <div className="flex gap-2">
              {newsItems.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${activeIndex === index ? 'w-8 bg-[#f8cd02]' : 'w-2.5 bg-white/30'}`}
                  aria-label={`Открыть новость ${index + 1}`}
                />
              ))}
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              0{activeIndex + 1} / 0{newsItems.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
