import { Zap, Award, Briefcase, Handshake, ShieldCheck, Rocket } from 'lucide-react';
import SectionHeading from './SectionHeading';

const values = [
  { title: 'Creativity', desc: 'We push creative boundaries to make every event uniquely memorable.', icon: Zap },
  { title: 'Excellence', desc: 'We hold ourselves to the highest standards in every detail we deliver.', icon: Award },
  { title: 'Professionalism', desc: 'We operate with integrity, reliability, and respect at every stage.', icon: Briefcase },
  { title: 'Collaboration', desc: 'We work closely with clients and partners to bring shared visions to life.', icon: Handshake },
  { title: 'Quality & Safety', desc: 'We never compromise on the quality and safety of our productions.', icon: ShieldCheck },
  { title: 'Innovation', desc: 'We embrace new ideas and technologies to stay ahead of the curve.', icon: Rocket },
];

export default function Values() {
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      <div className="section-beam" style={{ top: '30%', left: '-10%' }} />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <SectionHeading text="Our Values" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="reveal card-outline glow-blue-hover p-7 md:p-8 text-center"
              >
                <Icon className="text-[#1F6BFF] mx-auto mb-5" size={36} />
                <h3 className="font-display text-xl md:text-2xl uppercase text-white mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
