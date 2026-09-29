import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated light beams */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="blue-beam beam-1"
          style={{
            top: '-30%',
            left: '5%',
            width: '200px',
            height: '140vh',
            transformOrigin: 'top center',
          }}
        />
        <div
          className="blue-beam beam-2"
          style={{
            top: '-30%',
            left: '40%',
            width: '300px',
            height: '140vh',
            transformOrigin: 'top center',
          }}
        />
        <div
          className="blue-beam beam-3"
          style={{
            top: '-30%',
            right: '5%',
            width: '180px',
            height: '140vh',
            transformOrigin: 'top center',
          }}
        />
      </div>

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(31,107,255,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#1F6BFF 1px, transparent 1px), linear-gradient(90deg, #1F6BFF 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-5xl mx-auto pt-20">
        <p className="font-body text-xs md:text-sm text-[#1F6BFF] tracking-[0.3em] uppercase mb-6 reveal visible">
          ADP Events & Entertainment (Pvt) Ltd
        </p>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[0.95] text-white mb-8">
          Shaping
          <br />
          <span className="heading-outline-blue">Celebrations</span>
          <br />
          with Excellence
        </h1>
        <p className="font-body text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Premier event management and coordination in Sri Lanka — transforming ideas into
          events that inspire, connect, and captivate.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="btn-primary px-8 py-4 font-body text-sm font-semibold w-full sm:w-auto">
            Get a Quote
          </a>
          <a href="#work" className="btn-outline px-8 py-4 font-body text-sm font-semibold w-full sm:w-auto">
            View Our Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-[#1F6BFF] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
