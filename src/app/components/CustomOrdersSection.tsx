export function CustomOrdersSection() {
  return (
    <section className="bg-[#1e1e1e] py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Индивидуальные заказы любой сложности
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Мы реализуем проекты любой сложности: от простых деталей до сложных конструкций. 
              Предоставляем услуги 3D-сканирования для создания точных моделей.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#f8cd02] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#1e1e1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-3 text-gray-300">3D-сканирование объектов любой формы</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#f8cd02] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#1e1e1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-3 text-gray-300">Разработка 3D-моделей с нуля</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#f8cd02] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#1e1e1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-3 text-gray-300">Печать деталей по вашим чертежам</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-[#f8cd02] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#1e1e1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-3 text-gray-300">Консультация по выбору материалов</span>
              </li>
            </ul>
            <a 
              href="tel:+79237496588"
              className="inline-block bg-[#f8cd02] text-[#1e1e1e] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e6bd00] transition-colors"
            >
              Заказать
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#2e2e2e] rounded-2xl p-6">
              <div className="text-[#f8cd02] text-4xl font-bold mb-2">100+</div>
              <div className="text-gray-400">Выполненных заказов</div>
            </div>
            <div className="bg-[#2e2e2e] rounded-2xl p-6">
              <div className="text-[#f8cd02] text-4xl font-bold mb-2">24ч</div>
              <div className="text-gray-400">Средний срок изготовления</div>
            </div>
            <div className="bg-[#2e2e2e] rounded-2xl p-6">
              <div className="text-[#f8cd02] text-4xl font-bold mb-2">95%</div>
              <div className="text-gray-400">Довольных клиентов</div>
            </div>
            <div className="bg-[#2e2e2e] rounded-2xl p-6">
              <div className="text-[#f8cd02] text-4xl font-bold mb-2">5+</div>
              <div className="text-gray-400">Лет опыта работы</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}