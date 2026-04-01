import { NewsCarousel } from '../components/NewsCarousel';
import { HeroSection } from '../components/HeroSection';
import { TechnologySection } from '../components/TechnologySection';
import { MaterialsSection } from '../components/MaterialsSection';
import { CatalogSection } from '../components/CatalogSection';
import { CustomOrdersSection } from '../components/CustomOrdersSection';
import { ProcessSection } from '../components/ProcessSection';
import { PaymentSection } from '../components/PaymentSection';
import { ContactSection } from '../components/ContactSection';

type HomePageProps = {
  onOpenQuote: (defaults?: { productName?: string; carBrand?: string; quantity?: string }) => void;
};

export function HomePage({ onOpenQuote }: HomePageProps) {
  return (
    <main>
      <NewsCarousel onOpenQuote={() => onOpenQuote()} />
      <section id="hero">
        <HeroSection onOpenQuote={onOpenQuote} />
      </section>
      <section id="technology">
        <TechnologySection />
      </section>
      <section id="materials">
        <MaterialsSection />
      </section>
      <section id="catalog">
        <CatalogSection onOpenQuote={onOpenQuote} />
      </section>
      <section id="custom-orders">
        <CustomOrdersSection onOpenQuote={onOpenQuote} />
      </section>
      <section id="process">
        <ProcessSection />
      </section>
      <section id="payment">
        <PaymentSection />
      </section>
      <section id="contact">
        <ContactSection onOpenQuote={onOpenQuote} />
      </section>
    </main>
  );
}
