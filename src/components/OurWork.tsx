import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const events = [
  { title: 'Aluth Kalawak', img: 'https://images.pexels.com/photos/13230484/pexels-photo-13230484.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'YAGA', img: 'https://images.pexels.com/photos/2020432/pexels-photo-2020432.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'In The Moment', img: 'https://images.pexels.com/photos/167605/pexels-photo-167605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'In The Moment (Mountains Are Calling)', img: 'https://images.pexels.com/photos/4218027/pexels-photo-4218027.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Agra Festival', img: 'https://images.pexels.com/photos/3385614/pexels-photo-3385614.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Afro Safari', img: 'https://images.pexels.com/photos/1179581/pexels-photo-1179581.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Unilever Muthu Palasa', img: 'https://images.pexels.com/photos/30169356/pexels-photo-30169356.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Sangeeth YO Entertainment', img: 'https://images.pexels.com/photos/1613240/pexels-photo-1613240.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Origins', img: 'https://images.pexels.com/photos/976862/pexels-photo-976862.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Yamaha Lounge', img: 'https://images.pexels.com/photos/12092991/pexels-photo-12092991.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Sarath Electrical 50th Birthday', img: 'https://images.pexels.com/photos/8186275/pexels-photo-8186275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'BK Dancing Concert', img: 'https://images.pexels.com/photos/9534913/pexels-photo-9534913.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export default function OurWork() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + events.length) % events.length));
  }, []);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % events.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

  return (
    <section id="work" className="relative bg-black py-24 md:py-32 overflow-hidden">
      <div className="section-beam" style={{ top: '5%', left: '-10%' }} />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <SectionHeading
          text="Our Work"
          subtext="A glimpse into the events we've brought to life across Sri Lanka."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {events.map((event, index) => (
            <button
              key={event.title}
              onClick={() => setLightboxIndex(index)}
              className="reveal group relative overflow-hidden rounded-xl border border-[#1F6BFF]/20 hover:border-[#1F6BFF]/60 transition-all duration-300 aspect-[4/3] text-left"
            >
              <img
                src={event.img}
                alt={event.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <p className="font-body text-white text-xs md:text-sm font-medium leading-tight">
                  {event.title}
                </p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 30px rgba(31,107,255,0.4)' }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-[#1F6BFF] transition-colors p-2"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={28} />
          </button>

          <button
            className="absolute left-3 md:left-8 text-white/70 hover:text-[#1F6BFF] transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={36} />
          </button>

          <figure
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={events[lightboxIndex].img}
              alt={events[lightboxIndex].title}
              className="w-full max-h-[75vh] object-contain rounded-lg border border-[#1F6BFF]/30"
            />
            <figcaption className="text-center mt-4 font-body text-white/80 text-sm md:text-base">
              {events[lightboxIndex].title}
            </figcaption>
          </figure>

          <button
            className="absolute right-3 md:right-8 text-white/70 hover:text-[#1F6BFF] transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
}
