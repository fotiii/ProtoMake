import { SimpleHeader } from './components/SimpleHeader';
import { HeroSection } from './components/HeroSection';
import { TechnologySection } from './components/TechnologySection';
import { MaterialsSection } from './components/MaterialsSection';
import { CatalogSection } from './components/CatalogSection';
import { CustomOrdersSection } from './components/CustomOrdersSection';
import { PaymentSection } from './components/PaymentSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { SimpleFooter } from './components/SimpleFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#1e1e1e]">
      <SimpleHeader />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="technology">
          <TechnologySection />
        </section>
        <section id="materials">
          <MaterialsSection />
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
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <SimpleFooter />
    </div>
  );
}
