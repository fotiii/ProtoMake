import { CatalogMenu } from './CatalogMenu';
import { Hero } from './Hero';
import { Features } from './Features';

export function HeroWithCatalog() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-6 max-w-[1200px]">
        <div className="flex gap-6">
          {/* Left Catalog */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <CatalogMenu />
          </div>

          {/* Right Hero Slider */}
          <div className="flex-1 min-w-0 h-full">
            <Hero />
          </div>
        </div>
        
        {/* Features Section */}
        <div className="mt-6">
          <Features />
        </div>
      </div>
    </div>
  );
}