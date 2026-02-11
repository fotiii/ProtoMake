import { ImageWithFallback } from './figma/ImageWithFallback';

export function TechnologySection() {
  const advantages = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#f8cd02]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Высокая прочность",
      description: "Используем качественные материалы ABS и PLA, обеспечивающие долговечность деталей"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#f8cd02]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Быстрое изготовление",
      description: "3D технология позволяет печатать сложные детали за минимальное время"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#f8cd02]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Индивидуальный подход",
      description: "Производим детали точно по вашим размерам и чертежам, любой сложности"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e1e1e] leading-tight">
              Печатаем детали по технологии FDM
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              Современное оборудование и опытные специалисты позволяют получить высокое качество при любом масштабе производства от единичных экземпляров до крупных партий деталей для вашего автомобиля.
            </p>
            
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div 
                  key={index}
                  className="bg-[#1e1e1e] rounded-2xl p-6 text-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#2e2e2e] rounded-xl flex items-center justify-center">
                      {advantage.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{advantage.title}</h3>
                      <p className="text-gray-300 text-sm">{advantage.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1769151174211-a1b2d41117bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwM0QlMjBwcmludGluZyUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzcwNzkzNDgyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="3D печать технология"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}