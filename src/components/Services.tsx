import { Video, Lightbulb, ClipboardList, Settings, Speaker, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';

const services = [
  { num: '01', title: 'Content Creation', desc: 'Engaging visual and digital content that elevates your brand.', icon: Video },
  { num: '02', title: 'Creative Approach', desc: 'Unique concepts, thematic ideas and storytelling tailored to each event.', icon: Lightbulb },
  { num: '03', title: 'Master Planning', desc: 'Strategic planning, budgeting and complete event design.', icon: ClipboardList },
  { num: '04', title: 'Expert Operations', desc: 'On-ground coordination, logistics handling and seamless execution.', icon: Settings },
  { num: '05', title: 'Audio & Visual Leasing', desc: 'Professional sound systems, lighting setups, LED screens and technical equipment.', icon: Speaker },
  { num: '06', title: 'Stage & Decoration', desc: 'Custom stage builds, decor themes, installations and scenic design.', icon: Sparkles },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-24 md:py-32 overflow-hidden">
      <div className="section-beam" style={{ top: '30%', right: '-15%' }} />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <SectionHeading
          text="Our Services"
          subtext="From concept to execution, we cover every dimension of world-class event production."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.num}
                className="reveal card-outline glow-blue-hover p-7 md:p-8 relative group"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="number-outline text-5xl md:text-6xl leading-none">
                    {service.num}
                  </span>
                  <Icon className="text-[#1F6BFF] opacity-50 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                </div>
                <h3 className="font-display text-xl md:text-2xl uppercase text-white mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
