import { Target, Eye } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function WhoWeAre() {
  return (
    <section id="about" className="relative bg-black py-24 md:py-32 overflow-hidden">
      <div className="section-beam" style={{ top: '10%', left: '-10%' }} />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <SectionHeading text="Who We Are" />

        <div className="reveal max-w-4xl mx-auto text-center mb-16">
          <p className="font-body text-white/70 text-base md:text-lg leading-[1.8]">
            ADP Events & Entertainment (Pvt) Ltd is a premier event management and event
            coordination company in Sri Lanka, renowned for delivering innovative, seamless, and
            unforgettable experiences. With a strong focus on creativity, precision, and client
            satisfaction, we transform ideas into events that inspire, connect, and captivate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="reveal card-outline glow-blue-hover p-8 md:p-10 relative group">
            <div className="flex items-center gap-3 mb-5">
              <Target className="text-[#1F6BFF]" size={28} />
              <h3 className="font-display text-2xl md:text-3xl uppercase text-white">Mission</h3>
            </div>
            <p className="font-body text-white/60 leading-relaxed text-sm md:text-base">
              To combine creativity, strategic planning, and top-tier execution to deliver events
              that exceed expectations, strengthen brands, and bring people together.
            </p>
          </div>

          <div className="reveal card-outline glow-blue-hover p-8 md:p-10 relative group">
            <div className="flex items-center gap-3 mb-5">
              <Eye className="text-[#1F6BFF]" size={28} />
              <h3 className="font-display text-2xl md:text-3xl uppercase text-white">Vision</h3>
            </div>
            <p className="font-body text-white/60 leading-relaxed text-sm md:text-base">
              To be Sri Lanka's most trusted and dynamic event solutions provider, known for
              elevating every occasion into an exceptional experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
