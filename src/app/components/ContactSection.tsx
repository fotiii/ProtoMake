const contactCards = [
  {
    title: 'Телефон',
    value: '+7 923 749-65-88',
    href: 'tel:+79237496588',
    note: 'Для срочных заказов и консультаций',
  },
  {
    title: 'Адрес',
    value: 'Барнаул, ул. Власихинская 59/28Г',
    href: 'https://yandex.ru/maps/?text=%D0%91%D0%B0%D1%80%D0%BD%D0%B0%D1%83%D0%BB%20%D1%83%D0%BB.%20%D0%92%D0%BB%D0%B0%D1%81%D0%B8%D1%85%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%2059%2F28%D0%93',
    note: 'Самовывоз и обсуждение проекта по договорённости',
  },
];

export function ContactSection() {
  return (
    <section className="bg-[#111111] py-20 text-white">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#f8cd02]">Финальный шаг</p>
          <h2 className="mb-4 text-3xl font-bold leading-tight lg:text-5xl">
            Присылайте задачу, а мы подскажем материал, срок и стоимость без длинной переписки.
          </h2>
          <p className="text-lg text-gray-300">
            Если у вас уже есть фото, размеры или старая деталь, этого достаточно, чтобы начать расчёт.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-[#f8cd02] p-8 text-[#1e1e1e]">
            <h3 className="mb-4 text-2xl font-bold">Как быстрее получить расчёт</h3>
            <div className="space-y-3 text-base leading-relaxed">
              <p>1. Покажите фото детали или место установки.</p>
              <p>2. Напишите, сколько штук нужно и насколько срочно.</p>
              <p>3. Если есть размеры, чертёж или VIN, приложите их сразу.</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+79237496588"
                className="inline-flex items-center justify-center rounded-full bg-[#1e1e1e] px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Позвонить сейчас
              </a>
              <a
                href="#catalog"
                className="inline-flex items-center justify-center rounded-full border border-[#1e1e1e]/20 px-6 py-3 font-semibold text-[#1e1e1e]"
              >
                Посмотреть направления работ
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/8"
              >
                <p className="mb-2 text-sm uppercase tracking-[0.18em] text-[#f8cd02]">{card.title}</p>
                <p className="mb-2 text-xl font-semibold">{card.value}</p>
                <p className="text-sm text-gray-300">{card.note}</p>
              </a>
            ))}

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="mb-2 text-sm uppercase tracking-[0.18em] text-[#f8cd02]">График</p>
              <p className="mb-2 text-xl font-semibold">Ежедневно, по согласованию</p>
              <p className="text-sm text-gray-300">
                Для срочных заказов лучше звонить, так мы быстрее подтвердим возможность печати.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
