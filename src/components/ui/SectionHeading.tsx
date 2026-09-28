interface SectionHeadingProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly align?: 'left' | 'center';
  readonly widthComponent?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = 'left',
  widthComponent = 'xl',
}: SectionHeadingProps) {
  const alignment =
    align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-3 mt-1 mb-10 ${alignment}`}>
      <h2
        className="font-display text-3xl sm:text-4xl font-semibold text-text tracking-tight"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-${widthComponent} text-text-muted text-base leading-relaxed`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
