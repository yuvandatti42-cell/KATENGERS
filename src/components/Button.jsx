import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  onClick, 
  type = 'button',
  className = '',
  icon: Icon
}) {
  const sizeClasses = size === 'sm' 
    ? 'px-4 py-2 text-sm' 
    : 'px-6 py-3 text-base';

  const fontClasses = "font-display font-semibold tracking-wide transition-all duration-200 inline-flex items-center justify-center gap-2 select-none focus:outline-none focus:ring-2 focus:ring-kt-orange focus:ring-offset-2";

  if (disabled) {
    return (
      <button
        type={type}
        disabled
        className={`bg-kt-fog text-kt-slate cursor-not-allowed rounded-md opacity-70 ${sizeClasses} ${fontClasses} ${className}`}
      >
        {children}
        {Icon && <Icon className="w-4 h-4" />}
      </button>
    );
  }

  if (variant === 'primary') {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`bg-kt-orange text-kt-white hover:bg-[#E05E1F] active:translate-y-0.5 clip-button-tr shadow-sm hover:shadow-md ${sizeClasses} ${fontClasses} ${className}`}
      >
        <span>{children}</span>
        {Icon && <Icon className="w-4 h-4" />}
      </button>
    );
  }

  if (variant === 'secondary') {
    const isWFull = className.includes('w-full');
    return (
      <div className={`inline-block ${isWFull ? 'w-full' : ''} btn-clipped-secondary-border cursor-pointer transition-transform hover:-translate-y-0.5 active:translate-y-0 ${className}`}>
        <button
          type={type}
          onClick={onClick}
          className={`btn-clipped-secondary-inner font-display font-semibold hover:bg-kt-cream active:bg-kt-fog transition-colors ${sizeClasses} ${isWFull ? 'w-full' : ''} inline-flex items-center justify-center gap-2`}
        >
          <span>{children}</span>
          {Icon && <Icon className="w-4 h-4" />}
        </button>
      </div>
    );
  }

  if (variant === 'accent') {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`bg-kt-yellow text-kt-ink hover:bg-[#E6B000] active:translate-y-0.5 clip-button-tr shadow-sm ${sizeClasses} ${fontClasses} ${className}`}
      >
        <span>{children}</span>
        {Icon && <Icon className="w-4 h-4" />}
      </button>
    );
  }

  if (variant === 'ghost') {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`bg-transparent text-kt-orange hover:underline underline-offset-4 decoration-2 ${sizeClasses} ${fontClasses} ${className}`}
      >
        <span>{children}</span>
        {Icon && <Icon className="w-4 h-4" />}
      </button>
    );
  }

  return null;
}
