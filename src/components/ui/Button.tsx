import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'glass' | 'holographic';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  magnetic?: boolean;
  glow?: boolean;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  loading = false,
  magnetic = false,
  glow = false,
  className = '',
  children,
  disabled,
  ...props 
}: ButtonProps) {
  const baseClasses = `
    relative font-semibold rounded-2xl transition-all duration-300 
    focus:outline-none focus:ring-4 focus:ring-opacity-50 
    transform-gpu will-change-transform overflow-hidden
    ${magnetic ? 'magnetic' : ''}
    ${glow ? 'animate-pulse-glow' : ''}
  `;
  
  const variants = {
    primary: `
      bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 
      hover:from-blue-700 hover:via-purple-700 hover:to-blue-900
  text-black shadow-2xl hover:shadow-blue-500/25
      focus:ring-blue-500 morph-button
      before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
    `,
    secondary: `
      bg-gradient-to-r from-green-500 via-emerald-600 to-green-700
      hover:from-green-600 hover:via-emerald-700 hover:to-green-800
  text-black shadow-2xl hover:shadow-green-500/25
      focus:ring-green-500 morph-button
    `,
    outline: `
  glass border-2 border-black/30 text-black
      hover:bg-white/20 hover:border-white/50
      focus:ring-white/50 backdrop-blur-xl
    `,
    ghost: `
  text-black/80 hover:text-black hover:bg-black/10
      focus:ring-white/30 backdrop-blur-sm
    `,
    gradient: `
      bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
      hover:from-pink-600 hover:via-red-600 hover:to-yellow-600
  text-black shadow-2xl animate-gradient
      focus:ring-pink-500 morph-button
    `,
    glass: `
  glass text-black hover:bg-black/30
      focus:ring-white/50 backdrop-blur-xl
      border border-white/20 hover:border-white/40
    `,
    holographic: `
      bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
      hover:from-purple-500 hover:via-pink-600 hover:to-red-600
  text-black shadow-2xl animate-gradient
      focus:ring-purple-500 morph-button
    `
  };
  
  const sizes = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg',
    xl: 'px-12 py-5 text-xl'
  };
  
  return (
    <button
      className={`
        ${baseClasses} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${disabled || loading ? 'opacity-50 cursor-not-allowed transform-none' : 'hover:scale-105 active:scale-95'} 
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center space-x-2">
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Loading...</span>
          </>
        ) : (
          children
        )}
      </span>
      
      {/* Ripple effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </button>
  );
}