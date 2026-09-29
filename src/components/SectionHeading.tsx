interface SectionHeadingProps {
  text: string;
  subtext?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({ text, subtext, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={`reveal ${align === 'center' ? 'text-center' : 'text-left'} mb-12 md:mb-16`}>
      <h2 className="font-display heading-outline text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.1]">
        {text}
      </h2>
      {subtext && (
        <p className="mt-4 text-white/50 text-sm md:text-base font-body max-w-2xl mx-auto leading-relaxed">
          {subtext}
        </p>
      )}
    </div>
  );
}
