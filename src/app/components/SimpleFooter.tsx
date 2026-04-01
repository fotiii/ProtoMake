type SimpleFooterProps = {
  currentPath: string;
};

export function SimpleFooter({ currentPath }: SimpleFooterProps) {
  const homeLink = (sectionId: string) => (currentPath === '/' ? `#${sectionId}` : `/#${sectionId}`);

  return (
    <footer className="bg-[#0d0d0d] py-10 text-white">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid gap-10 border-b border-white/10 pb-8 md:grid-cols-3">
          <div>
            <span className="text-2xl font-bold">PROTOMAKE</span>
            <p className="mt-3 max-w-sm text-sm text-gray-400">
              3D-печать автодеталей, крепежа, ремкомплектов и индивидуальных изделий по фото, размерам или образцу.
            </p>
          </div>

          <nav className="flex flex-col gap-3 text-sm">
            <a href={homeLink('technology')} className="text-gray-400 transition-colors hover:text-[#f8cd02]">
              Технологии и подход
            </a>
            <a href={homeLink('materials')} className="text-gray-400 transition-colors hover:text-[#f8cd02]">
              Материалы и задачи
            </a>
            <a href="/catalog" className="text-gray-400 transition-colors hover:text-[#f8cd02]">
              Каталог-маркет
            </a>
            <a href={homeLink('contact')} className="text-gray-400 transition-colors hover:text-[#f8cd02]">
              Контакты и заявка
            </a>
          </nav>

          <div className="space-y-3 text-sm">
            <a href="tel:+79237496588" className="block text-gray-300 transition-colors hover:text-[#f8cd02]">
              +7 923 749-65-88
            </a>
            <p className="text-gray-400">Барнаул, ул. Власихинская 59/28Г</p>
            <p className="text-gray-400">Работаем по согласованию, срочные заказы лучше обсуждать по телефону.</p>
          </div>
        </div>

        <div className="pt-5 text-center">
          <p className="text-xs text-gray-500">© 2026 PROTOMAKE. 3D-печать под задачу, а не ради шаблонного каталога.</p>
        </div>
      </div>
    </footer>
  );
}
