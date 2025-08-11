import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Badge({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}: BadgeProps) {
  const variants = {
    primary: 'bg-blue-500/20 text-black border-blue-500/30',
    secondary: 'bg-gray-500/20 text-black border-gray-500/30',
    success: 'bg-green-500/20 text-black border-green-500/30',
    warning: 'bg-yellow-500/20 text-black border-yellow-500/30',
    error: 'bg-red-500/20 text-black border-red-500/30',
    info: 'bg-purple-500/20 text-black border-purple-500/30'
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  return (
    <span className={`
      inline-flex items-center font-medium rounded-full border
      ${variants[variant]} 
      ${sizes[size]}
      ${className}
    `}>
      {children}
    </span>
  );
}