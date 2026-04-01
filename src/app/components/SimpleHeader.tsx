import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Group89 from '../../imports/Group89-96-161';

type SimpleHeaderProps = {
  currentPath: string;
  onOpenQuote: () => void;
};

export function SimpleHeader({ currentPath, onOpenQuote }: SimpleHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const homeLink = (sectionId: string) => (currentPath === '/' ? `#${sectionId}` : `/#${sectionId}`);
  const navigation = [
    { href: homeLink('technology'), label: 'Технологии' },
    { href: homeLink('materials'), label: 'Материалы' },
    { href: '/catalog', label: 'Маркет' },
    { href: homeLink('process'), label: 'Процесс' },
    { href: homeLink('contact'), label: 'Контакты' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]/95 backdrop-blur-xl">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="h-12 w-10">
              <Group89 />
            </div>
            <span className="text-2xl font-bold text-white">PROTOMAKE</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) =>
              item.href.startsWith('/') ? (
                <a key={item.href} href={item.href} className="text-sm text-gray-300 transition-colors hover:text-[#f8cd02]">
                  {item.label}
                </a>
              ) : (
                <a key={item.href} href={item.href} className="text-sm text-gray-300 transition-colors hover:text-[#f8cd02]">
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="tel:+79237496588"
              className="flex items-center gap-2 rounded-full bg-[#f8cd02] px-6 py-2 font-medium text-[#1e1e1e] transition-colors hover:bg-[#e0ba02]"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+7 923 749-65-88</span>
            </a>
            <button
              type="button"
              onClick={onOpenQuote}
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition-colors hover:border-[#f8cd02] hover:text-[#f8cd02]"
            >
              Открыть форму расчёта
            </button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl bg-white/5 px-4 py-3 text-white transition-colors hover:bg-white/10"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  onOpenQuote();
                }}
                className="rounded-2xl bg-[#f8cd02] px-4 py-3 text-left font-semibold text-[#1e1e1e]"
              >
                Открыть форму расчёта
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
