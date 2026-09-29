import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

const eventTypes = [
  'Corporate Event',
  'Concert / Live Show',
  'Wedding',
  'Birthday Party',
  'Festival',
  'Product Launch',
  'Private Function',
  'Other',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative bg-black py-24 md:py-32 overflow-hidden">
      <div className="section-beam" style={{ top: '15%', right: '-15%' }} />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <SectionHeading text="Get In Touch" subtext="Let's create something extraordinary together. Send us your enquiry below." />

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="reveal space-y-6">
            <div className="card-outline p-6 md:p-7">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#1F6BFF] flex-shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-body font-semibold text-white text-sm uppercase tracking-wide mb-1">Address</h4>
                  <p className="font-body text-white/60 text-sm leading-relaxed">
                
501/1/1 TALANGAMA NORTH, TALANGAMA 1                </p>
                </div>
              </div>
            </div>

            <div className="card-outline p-6 md:p-7">
              <div className="flex items-start gap-4">
                <Phone className="text-[#1F6BFF] flex-shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-body font-semibold text-white text-sm uppercase tracking-wide mb-2">Phone</h4>
                  <a href="tel:0779958097" className="block font-body text-white/60 text-sm hover:text-[#1F6BFF] transition-colors mb-1">
                    077 995 8097
                  </a>
                  <a href="tel:0717288708" className="block font-body text-white/60 text-sm hover:text-[#1F6BFF] transition-colors">
                    071 728 8708
                  </a>
                </div>
              </div>
            </div>

            <div className="card-outline p-6 md:p-7">
              <div className="flex items-start gap-4">
                <Mail className="text-[#1F6BFF] flex-shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-body font-semibold text-white text-sm uppercase tracking-wide mb-1">Email</h4>
                  <a href="mailto:Adpevents.info@gmail.com" className="font-body text-white/60 text-sm hover:text-[#1F6BFF] transition-colors break-all">
                    Adpevents.info@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="card-outline p-6 md:p-7">
              <div className="flex items-start gap-4">
                <Globe className="text-[#1F6BFF] flex-shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-body font-semibold text-white text-sm uppercase tracking-wide mb-1">Website</h4>
                  <a href="https://www.eventsbyadp.com" target="_blank" rel="noopener noreferrer" className="font-body text-white/60 text-sm hover:text-[#1F6BFF] transition-colors">
                    www.eventsbyadp.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="card-outline overflow-hidden">
              <iframe
                title="ADP Events Location - Malabe"
                src="https://maps.google.com/maps?q=Malabe%20Sri%20Lanka&z=14&output=embed"
                className="w-full h-64 border-0 grayscale invert opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="reveal card-outline p-6 md:p-8">
            <h3 className="font-display text-2xl md:text-3xl uppercase text-white mb-6">
              Send an Enquiry
            </h3>

            {submitted && (
              <div className="mb-6 flex items-center gap-3 rounded-xl border border-[#1F6BFF]/40 bg-[#1F6BFF]/10 px-4 py-3">
                <CheckCircle2 className="text-[#1F6BFF] flex-shrink-0" size={20} />
                <p className="font-body text-white/80 text-sm">
                  Thank you! Your enquiry has been submitted. We'll get back to you shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block font-body text-white/60 text-xs uppercase tracking-wide mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full bg-transparent border border-[#1F6BFF]/25 rounded-lg px-4 py-3 font-body text-white text-sm placeholder-white/30 focus:border-[#1F6BFF] focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-body text-white/60 text-xs uppercase tracking-wide mb-2">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  className="w-full bg-transparent border border-[#1F6BFF]/25 rounded-lg px-4 py-3 font-body text-white text-sm placeholder-white/30 focus:border-[#1F6BFF] focus:outline-none transition-colors"
                  placeholder="Your phone number"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="eventType" className="block font-body text-white/60 text-xs uppercase tracking-wide mb-2">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    required
                    defaultValue=""
                    className="w-full bg-black border border-[#1F6BFF]/25 rounded-lg px-4 py-3 font-body text-white/70 text-sm focus:border-[#1F6BFF] focus:outline-none transition-colors"
                  >
                    <option value="" disabled>Select type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="eventDate" className="block font-body text-white/60 text-xs uppercase tracking-wide mb-2">
                    Event Date
                  </label>
                  <input
                    id="eventDate"
                    type="date"
                    className="w-full bg-black border border-[#1F6BFF]/25 rounded-lg px-4 py-3 font-body text-white/70 text-sm focus:border-[#1F6BFF] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-body text-white/60 text-xs uppercase tracking-wide mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border border-[#1F6BFF]/25 rounded-lg px-4 py-3 font-body text-white text-sm placeholder-white/30 focus:border-[#1F6BFF] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your event..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full px-8 py-4 font-body text-sm font-semibold inline-flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
