import { SimpleHeader } from './components/SimpleHeader';
import { HeroSection } from './components/HeroSection';
import { TechnologySection } from './components/TechnologySection';
import { CatalogSection } from './components/CatalogSection';
import { CustomOrdersSection } from './components/CustomOrdersSection';
import { PaymentSection } from './components/PaymentSection';
import { ProcessSection } from './components/ProcessSection';
import { SimpleFooter } from './components/SimpleFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <SimpleHeader />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="technology">
          <TechnologySection />
        </section>
        <section id="catalog">
          <CatalogSection />
        </section>
        <section id="custom-orders">
          <CustomOrdersSection />
        </section>
        <section id="process">
          <ProcessSection />
        </section>
        <section id="payment">
          <PaymentSection />
        </section>
      </main>
      <SimpleFooter />
    </div>
  );
}