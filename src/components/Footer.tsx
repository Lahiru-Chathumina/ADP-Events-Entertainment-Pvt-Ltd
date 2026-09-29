import { Phone, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-[#1F6BFF]/15 pt-16 pb-8 overflow-hidden">
      <div className="section-beam" style={{ bottom: '-30%', left: '30%' }} />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Logo & tagline */}
          <div>
            <h3 className="font-display text-xl uppercase text-white leading-tight">
              <span className="text-[#1F6BFF]">ADP</span> Events
              <span className="block text-xs font-body font-light text-white/50 tracking-[0.2em] uppercase mt-1">
                & Entertainment (Pvt) Ltd
              </span>
            </h3>
            <p className="mt-4 font-body text-white/40 text-sm leading-relaxed max-w-xs">
              Shaping Celebrations with Excellence. Premier event management and coordination
              in Sri Lanka.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-body font-semibold text-white text-sm uppercase tracking-wide mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Our Work', href: '#work' },
                { label: 'Clients', href: '#clients' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-body text-white/40 text-sm hover:text-[#1F6BFF] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-white text-sm uppercase tracking-wide mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="font-body text-white/40 text-sm">
                227/A, Kahanthota Road,<br />Pittugala, Malabe
              </li>
              <li>
                <a href="tel:0779958097" className="inline-flex items-center gap-2 font-body text-white/40 text-sm hover:text-[#1F6BFF] transition-colors">
                  <Phone size={14} /> 077 995 8097
                </a>
              </li>
              <li>
                <a href="mailto:Adpevents.info@gmail.com" className="inline-flex items-center gap-2 font-body text-white/40 text-sm hover:text-[#1F6BFF] transition-colors break-all">
                  <Mail size={14} /> Adpevents.info@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.eventsbyadp.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-body text-white/40 text-sm hover:text-[#1F6BFF] transition-colors">
                  <Globe size={14} /> www.eventsbyadp.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/30 text-xs text-center sm:text-left">
            &copy; 2026 ADP Events & Entertainment (Pvt) Ltd. All rights reserved.
          </p>
          <p className="font-body text-white/20 text-xs">
            Shaping Celebrations with Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
