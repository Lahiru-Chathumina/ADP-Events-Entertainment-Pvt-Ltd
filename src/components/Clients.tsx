const clients = [
  'Cinnamon Life', 'Yadea', 'Commercial Bank', 'Cream Soda',
  'Arcade of Aluminium', 'Wurth', 'Celcius', 'Carnage',
  'Standard Holdings', 'Viana Cosmetics', 'Yamaha', 'The Argyle',
  'Vigilant Security', 'Sparkle Laundry', 'Unilever', 'Janiya',
  'In The Moment',
];

export default function Clients() {
  return (
    <section id="clients" className="relative bg-black py-24 md:py-32 overflow-hidden">
      <div className="section-beam" style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }} />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10 mb-14">
        <h2 className="reveal font-display heading-outline text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.1]">
          Our Clients
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex gap-8 md:gap-12 whitespace-nowrap w-max">
          {[...clients, ...clients].map((client, index) => (
            <span
              key={`${client}-${index}`}
              className="font-display text-2xl md:text-3xl lg:text-4xl uppercase text-white/30 hover:text-[#1F6BFF] transition-colors duration-300 cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
