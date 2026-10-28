import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'accent' | 'outline' | 'outlineLight' | 'ghost';

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined;
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  to: string;
  href?: undefined;
  onClick?: () => void;
};

type ButtonAsAnchor = CommonProps & {
  href: string;
  to?: undefined;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-forest text-ivory hover:bg-forest-deep focus-visible:ring-forest',
  accent:
    'bg-terracotta text-white hover:bg-terracotta-deep focus-visible:ring-terracotta',
  outline:
    'border border-forest/30 bg-transparent text-forest hover:border-forest hover:bg-forest/5 focus-visible:ring-forest',
  outlineLight:
    'border border-ivory/40 bg-transparent text-ivory hover:border-ivory hover:bg-ivory/10 focus-visible:ring-ivory',
  ghost:
    'bg-transparent text-charcoal hover:text-forest focus-visible:ring-forest',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-xs tracking-[0.12em]',
  md: 'px-6 py-3 text-xs tracking-[0.14em]',
  lg: 'px-8 py-3.5 text-sm tracking-[0.14em]',
};

export function Button(props: ButtonProps) {
  const variant = props.variant ?? 'primary';
  const className = props.className ?? '';
  const size = props.size ?? 'md';
  const { children } = props;

  const classes = [
    'inline-flex items-center justify-center gap-2 font-medium uppercase transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory',
    'disabled:pointer-events-none disabled:opacity-50',
    'rounded-sm',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(' ');

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    return (
      <a
        href={props.href}
        className={classes}
        target={props.target}
        rel={props.rel}
        onClick={props.onClick}
      >
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  const {
    type = 'button',
    variant: _v,
    className: _c,
    size: _s,
    children: _ch,
    ...rest
  } = buttonProps;

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
