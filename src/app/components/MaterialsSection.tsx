const materialHighlights = [
  {
    title: 'Автодетали и крепёж',
    description: 'Клипсы, заглушки, крепления салона, элементы панели и детали под доработку конкретной модели авто.',
  },
  {
    title: 'Ремкомплекты для дома',
    description: 'Печатаем мелкие бытовые детали, которые сложно найти в продаже: направляющие, фиксаторы, держатели и переходники.',
  },
  {
    title: 'Работа по образцу',
    description: 'Если деталь сломалась или потерялась, можно прислать фото, размеры или сам образец для повторного изготовления.',
  },
];

const workSteps = [
  'Фото детали или место установки',
  'Размеры, артикул или VIN при наличии',
  'Требуемое количество и срочность',
];

export function MaterialsSection() {
  return (
    <section className="bg-[#f3f0e8] py-20">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-[#1e1e1e]/10 bg-white/70 px-4 py-2 text-sm font-medium text-[#5f5a50]">
            Что мы делаем
          </span>
          <div className="space-y-4">
            <h2 className="max-w-2xl text-3xl font-bold leading-tight text-[#1e1e1e] lg:text-4xl">
              Не просто печатаем пластик, а закрываем конкретную задачу: восстановить, усилить или заменить деталь.
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-[#5b5b5b]">
              Основной фокус PROTOMAKE — небольшие партии, точечные заказы и детали, которые неудобно или дорого искать в магазинах.
            </p>
          </div>

          <div className="grid gap-5">
            {materialHighlights.map((item) => (
              <article key={item.title} className="border-b border-[#1e1e1e]/10 pb-5 last:border-b-0 last:pb-0">
                <h3 className="mb-2 text-xl font-semibold text-[#1e1e1e]">{item.title}</h3>
                <p className="max-w-xl text-[#5b5b5b]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#171717] p-8 text-white shadow-2xl">
          <div className="mb-8">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#f8cd02]">Для расчёта стоимости</p>
            <h3 className="text-2xl font-bold leading-tight">Что лучше отправить сразу, чтобы мы быстрее рассчитали заказ</h3>
          </div>

          <div className="space-y-4">
            {workSteps.map((step, index) => (
              <div key={step} className="flex items-start gap-4 rounded-2xl bg-white/5 p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#f8cd02] font-bold text-[#1e1e1e]">
                  0{index + 1}
                </div>
                <p className="pt-2 text-sm text-gray-200">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-gray-300">
              Обычно отвечаем в тот же день и сразу подсказываем, можно ли напечатать деталь без доработки модели.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
