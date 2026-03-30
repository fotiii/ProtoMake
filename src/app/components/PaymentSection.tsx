export function PaymentSection() {
  const paymentMethods = [
    {
      title: "Наличный расчет",
      description: "Оплата наличными при получении, самовывозе или личной передаче заказа по договорённости.",
      icon: (
        <svg className="w-8 h-8 text-[#f8cd02]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      bgColor: "bg-white"
    },
    {
      title: "Банковский перевод",
      description: "Безналичный расчёт и перевод по согласованию. Перед подтверждением заказа уточняем способ оплаты и итоговую стоимость.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      bgColor: "bg-[#1e1e1e] text-white"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e1e1e] mb-4">
            Оплата без сложностей
          </h2>
          <p className="text-gray-600">
            Формат оплаты согласовываем до запуска в печать, чтобы по заказу не оставалось сюрпризов.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {paymentMethods.map((method, index) => (
            <div 
              key={index}
              className={`${method.bgColor} rounded-2xl p-6 ${method.bgColor === 'bg-white' ? 'border border-gray-200' : ''}`}
            >
              <div className="mb-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${method.bgColor === 'bg-white' ? 'bg-[#1e1e1e]' : 'bg-[#2e2e2e]'}`}>
                  {method.icon}
                </div>
              </div>
              <h3 className={`font-bold text-lg mb-3 ${method.bgColor === 'bg-white' ? 'text-[#1e1e1e]' : 'text-white'}`}>
                {method.title}
              </h3>
              <p className={`text-sm leading-relaxed ${method.bgColor === 'bg-white' ? 'text-gray-600' : 'text-gray-300'}`}>
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
