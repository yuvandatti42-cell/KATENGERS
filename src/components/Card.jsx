import React from 'react';

export default function Card({ 
  title, 
  children, 
  badgeText, 
  accentColor = null, // 'orange' | 'yellow' | null
  bg = 'white', // 'white' | 'cream'
  className = '',
  icon: Icon
}) {
  const bgClass = bg === 'cream' ? 'bg-kt-cream' : 'bg-kt-white';

  return (
    <div className={`card-clipped-border group transition-all duration-300 hover:-translate-y-1 hover:shadow-kt-soft ${className}`}>
      <div className={`card-clipped-inner ${bgClass} p-6 sm:p-8 relative h-full flex flex-col`}>
        
        {/* Optional 4px Left Accent Bar */}
        {accentColor === 'orange' && (
          <div className="absolute left-0 top-6 bottom-6 w-1 bg-kt-orange rounded-r-full" />
        )}
        {accentColor === 'yellow' && (
          <div className="absolute left-0 top-6 bottom-6 w-1 bg-kt-yellow rounded-r-full" />
        )}

        <div className={`flex flex-col h-full ${accentColor ? 'pl-3' : ''}`}>
          {/* Header Row with Icon & Badge */}
          <div className="flex items-center justify-between gap-4 mb-4">
            {Icon && (
              <div className="w-12 h-12 rounded-lg bg-kt-fog/50 flex items-center justify-center text-kt-ink group-hover:bg-kt-yellow group-hover:text-kt-ink transition-colors duration-200">
                <Icon className="w-6 h-6 stroke-[2]" />
              </div>
            )}
            {badgeText && (
              <span className="font-mono text-xs uppercase font-semibold text-kt-orange bg-kt-orange/10 px-2.5 py-1 rounded-full ml-auto">
                {badgeText}
              </span>
            )}
          </div>

          {/* Card Title */}
          {title && (
            <h3 className="font-display font-bold text-xl sm:text-2xl text-kt-ink mb-3 tracking-tight">
              {title}
            </h3>
          )}

          {/* Card Body */}
          <div className="font-body text-kt-slate leading-relaxed text-sm sm:text-base flex-grow">
            {children}
          </div>
        </div>

      </div>
    </div>
  );
}
