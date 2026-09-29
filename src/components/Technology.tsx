import { Cpu } from 'lucide-react';
import SectionHeading from './SectionHeading';

const brands = ['Nowlit', 'Pearl', 'Avolites', 'Gloshine'];

export default function Technology() {
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      <div className="section-beam" style={{ top: '20%', right: '-15%' }} />

      <div className="max-w-5xl mx-auto px-5 md:px-8 relative z-10">
        <SectionHeading text="Powered by World-Class Technology" />

        <div className="reveal text-center max-w-2xl mx-auto mb-14">
          <p className="font-body text-white/60 text-base md:text-lg leading-relaxed">
            Our productions are supported by globally trusted equipment, ensuring clarity,
            reliability, and a flawless event experience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="reveal card-outline glow-blue-hover p-8 md:p-10 flex flex-col items-center justify-center text-center"
            >
              <Cpu className="text-[#1F6BFF] mb-4" size={32} />
              <span className="font-display text-xl md:text-2xl uppercase text-white">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
