import React from 'react';

export default function Badge({ children, variant = 'yellow', className = '' }) {
  const baseClasses = "inline-flex items-center px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider font-semibold select-none";

  if (variant === 'yellow') {
    return (
      <span className={`${baseClasses} bg-kt-yellow text-kt-ink shadow-sm ${className}`}>
        {children}
      </span>
    );
  }

  if (variant === 'outline') {
    return (
      <span className={`${baseClasses} bg-transparent border-[1.5px] border-kt-orange text-kt-orange ${className}`}>
        {children}
      </span>
    );
  }

  if (variant === 'ink') {
    return (
      <span className={`${baseClasses} bg-kt-ink text-kt-white ${className}`}>
        {children}
      </span>
    );
  }

  return null;
}
