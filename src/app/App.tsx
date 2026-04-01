import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { SimpleHeader } from './components/SimpleHeader';
import { SimpleFooter } from './components/SimpleFooter';
import { QuoteRequestModal } from './components/QuoteRequestModal';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';

type QuoteDefaults = {
  productName?: string;
  carBrand?: string;
  quantity?: string;
};

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');

      requestAnimationFrame(() => {
        const element = document.getElementById(targetId);

        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });

      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.hash, location.pathname]);

  return null;
}

export default function App() {
  const location = useLocation();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteDefaults, setQuoteDefaults] = useState<QuoteDefaults | null>(null);

  const openQuote = (defaults?: QuoteDefaults) => {
    setQuoteDefaults(defaults ?? null);
    setIsQuoteOpen(true);
  };

  const closeQuote = () => {
    setIsQuoteOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#1e1e1e]">
      <ScrollManager />
      <SimpleHeader currentPath={location.pathname} onOpenQuote={openQuote} />
      <Routes>
        <Route path="/" element={<HomePage onOpenQuote={openQuote} />} />
        <Route path="/catalog" element={<CatalogPage onOpenQuote={openQuote} />} />
      </Routes>
      <SimpleFooter currentPath={location.pathname} />
      <QuoteRequestModal isOpen={isQuoteOpen} onClose={closeQuote} defaults={quoteDefaults} />
    </div>
  );
}
