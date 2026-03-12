'use client';

import * as React from 'react';
import {cn} from '@/lib/utils';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

export function Button({
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex h-11 items-center justify-center rounded-full px-5 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/20 disabled:pointer-events-none disabled:opacity-50',
        variant === 'primary' &&
          'bg-[var(--color-primary)] text-white shadow-sm hover:bg-[#d97840]',
        variant === 'secondary' &&
          'border border-zinc-200 bg-white text-zinc-950 hover:bg-zinc-50',
        variant === 'ghost' && 'text-zinc-600 hover:bg-zinc-100',
        className
      )}
      {...props}
    />
  );
}

