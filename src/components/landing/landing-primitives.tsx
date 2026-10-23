import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  children: ReactNode;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  children,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`ap-section-heading ${className}`}>
      {eyebrow ? <p className="ap-eyebrow">{eyebrow}</p> : null}
      <h2 className="ap-serif">{children}</h2>
      {description ? <p className="ap-section-description">{description}</p> : null}
    </div>
  );
}

type ImagePlaceholderProps = {
  label: string;
  detail?: string;
  className?: string;
};

export function ImagePlaceholder({ label, detail, className = "" }: ImagePlaceholderProps) {
  return (
    <div className={`ap-image-placeholder ${className}`} role="img" aria-label={label}>
      <span className="ap-image-label">Espacio para imagen</span>
      <span className="ap-image-caption">{label}</span>
      {detail ? <span className="ap-image-detail">{detail}</span> : null}
    </div>
  );
}

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function ActionLink({ href, children, className = "" }: ActionLinkProps) {
  return (
    <a className={`ap-button ${className}`} href={href}>
      {children}
    </a>
  );
}

type PointCardProps = {
  title: string;
  description: string;
  number?: string;
};

export function PointCard({ title, description, number }: PointCardProps) {
  return (
    <article className="ap-point-card">
      {number ? <span className="ap-card-number">{number}</span> : null}
      <h3 className="ap-serif">{title}</h3>
      <p>{description}</p>
    </article>
  );
}
