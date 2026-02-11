export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Консультация и замер",
      description: "Свяжитесь с нами для консультации. Предоставьте чертежи или мы поможем с замерами и выбором оптимального решения для вашей детали.",
      icon: (
        <svg className="w-12 h-12 text-[#f8cd02]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Производство",
      description: "Создаем 3D модель и отправляем на печать. Контролируем качество на каждом этапе изготовления. Средний срок производства 24-72 часа.",
      icon: (
        <svg className="w-12 h-12 text-[#f8cd02]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Доставка и оплата",
      description: "Доставим готовую деталь удобным для вас способом. Оплата при получении или онлайн. Гарантия на все изделия.",
      icon: (
        <svg className="w-12 h-12 text-[#f8cd02]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20" style={{ background: 'linear-gradient(to bottom, #1e1e1e 0%, #2a2a2a 20%, #4a4a4a 35%, #6a6a6a 45%, #8a8a8a 55%, #aaaaaa 65%, #c5c5c5 75%, #dadada 85%, #f5f5f5 100%)' }}>
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Три шага до готовой детали
          </h2>
          <p className="text-gray-300 text-lg">
            Простой и понятный процесс от заявки до получения
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-white/30 z-0" />
              )}
              
              <div className="relative z-10 bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/80 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] hover:bg-white/70 hover:border-white/90 hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.25)] transition-all duration-300 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/60 before:to-white/30 before:-z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#1e1e1e]/90 backdrop-blur-sm flex items-center justify-center border-2 border-white/40 shadow-lg">
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-6xl font-bold text-[#2e2e2e] opacity-70">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="font-bold text-xl text-[#1e1e1e] mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-800 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}