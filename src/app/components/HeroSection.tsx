import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#f4f0e7] py-10 lg:py-14">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-5 py-2.5 text-sm text-[#1e1e1e] shadow-lg backdrop-blur-xl">
              <svg className="h-4 w-4 flex-shrink-0 text-[#f8cd02]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="font-medium">г. Барнаул, ул. Власихинская 59/28Г</span>
            </div>

            <div className="space-y-4">
              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#9b8d67]">3D печать для авто и бытовых задач</p>
                <h1 className="max-w-xl text-4xl font-bold leading-[1.05] text-[#1e1e1e] lg:text-6xl">
                  PROTOMAKE печатает детали, которые сложно купить готовыми.
                </h1>
              </div>

              <p className="max-w-xl text-lg leading-relaxed text-gray-600">
                Клипсы, крепления, крючки, ремкомплекты и индивидуальные изделия по образцу или размерам. Быстро подскажем, можно ли напечатать деталь, сколько это займёт и сколько будет стоить.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+79237496588"
                className="inline-flex items-center justify-center rounded-full bg-[#1e1e1e] px-7 py-4 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Позвонить и обсудить заказ
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[#1e1e1e]/10 bg-white/70 px-7 py-4 text-base font-semibold text-[#1e1e1e] backdrop-blur-xl transition-colors hover:bg-white"
              >
                Что отправить для расчёта
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] bg-white px-5 py-5 shadow-sm">
                <div className="text-3xl font-bold text-[#1e1e1e]">
                  50<span className="text-[#f8cd02]">+</span>
                </div>
                <div className="mt-2 text-sm text-gray-600">типовых деталей уже в работе</div>
              </div>
              <div className="rounded-[1.5rem] bg-white px-5 py-5 shadow-sm">
                <div className="text-3xl font-bold text-[#1e1e1e]">
                  24-72<span className="text-[#f8cd02]">ч</span>
                </div>
                <div className="mt-2 text-sm text-gray-600">частый диапазон по срокам изготовления</div>
              </div>
              <div className="rounded-[1.5rem] bg-white px-5 py-5 shadow-sm">
                <div className="text-3xl font-bold text-[#1e1e1e]">по фото</div>
                <div className="mt-2 text-sm text-gray-600">можем оценить многие заказы уже на первом сообщении</div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-6">
            <div className="absolute -left-6 top-10 hidden h-32 w-32 rounded-full bg-[#f8cd02]/30 blur-3xl lg:block" />
            <div className="absolute -bottom-6 right-8 hidden h-36 w-36 rounded-full bg-black/10 blur-3xl lg:block" />
            <div className="relative overflow-hidden rounded-[2rem] bg-[#1e1e1e] shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1736667117808-d8e33a51cd7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZXIlMjBwcmludGluZyUyMG9iamVjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwNzkzNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="3D печать"
                className="h-[420px] w-full object-cover opacity-90 lg:h-[640px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-4 backdrop-blur-md">
                    <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#f8cd02]">Фокус</p>
                    <p className="text-sm text-white">Детали салона, крепёж, ремкомплекты, единичные и мелкосерийные заказы.</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-4 backdrop-blur-md">
                    <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#f8cd02]">Формат работы</p>
                    <p className="text-sm text-white">По фото, размерам, образцу или готовой 3D-модели.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
