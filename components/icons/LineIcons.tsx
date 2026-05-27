interface IconProps {
  className?: string;
}

const defaults = {
  width: 32,
  height: 32,
  viewBox: '0 0 32 32',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function IconPuertoRico({ className }: IconProps) {
  return (
    <svg {...defaults} className={className} aria-hidden>
      <path d="M6 24V12l10-6 10 6v12" />
      <path d="M16 6v20M6 18h20" />
      <circle cx="16" cy="14" r="3" />
    </svg>
  );
}

export function IconDomestic({ className }: IconProps) {
  return (
    <svg {...defaults} className={className} aria-hidden>
      <rect x="5" y="8" width="22" height="18" rx="2" />
      <path d="M5 14h22M11 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
      <path d="M13 19h6M13 23h4" />
    </svg>
  );
}

export function IconInternational({ className }: IconProps) {
  return (
    <svg {...defaults} className={className} aria-hidden>
      <circle cx="16" cy="16" r="10" />
      <path d="M6 16h20M16 6a15 15 0 0 1 0 20M16 6a15 15 0 0 0 0 20" />
    </svg>
  );
}

export function IconWealth({ className }: IconProps) {
  return (
    <svg {...defaults} className={className} aria-hidden>
      <path d="M6 26V14l10-8 10 8v12" />
      <path d="M12 26v-8h8v8" />
      <path d="M16 6v4" />
    </svg>
  );
}

export function IconTrust({ className }: IconProps) {
  return (
    <svg {...defaults} className={className} aria-hidden>
      <path d="M16 4l10 5v6c0 7-4.5 11-10 13-5.5-2-10-6-10-13V9l10-5z" />
      <path d="M12 16l3 3 6-6" />
    </svg>
  );
}

export function IconArticles({ className }: IconProps) {
  return (
    <svg {...defaults} className={className} aria-hidden>
      <path d="M8 6h16v20H8z" />
      <path d="M12 11h8M12 15h8M12 19h5" />
    </svg>
  );
}

export type ServiceIconName =
  | 'puerto-rico'
  | 'domestic'
  | 'international'
  | 'wealth'
  | 'trust'
  | 'articles';

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  switch (name) {
    case 'puerto-rico':
      return <IconPuertoRico className={className} />;
    case 'domestic':
      return <IconDomestic className={className} />;
    case 'international':
      return <IconInternational className={className} />;
    case 'wealth':
      return <IconWealth className={className} />;
    case 'trust':
      return <IconTrust className={className} />;
    case 'articles':
      return <IconArticles className={className} />;
    default:
      return <IconDomestic className={className} />;
  }
}
