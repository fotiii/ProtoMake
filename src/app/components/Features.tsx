import { Printer, Shield, Headphones } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Printer,
      title: 'Высокое качество печати',
      description: 'Современное оборудование и прочные материалы'
    },
    {
      icon: Shield,
      title: 'Гарантия качества',
      description: 'Полная замена бракованных изделий'
    },
    {
      icon: Headphones,
      title: 'Поддержка в рабочие часы',
      description: 'Консультации и помощь в рабочее время'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature) => (
        <div key={feature.title} className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-[#f8cd02] rounded-xl flex items-center justify-center">
              <feature.icon className="w-6 h-6 text-[#1e1e1e]" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-[#1e1e1e] mb-1">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}