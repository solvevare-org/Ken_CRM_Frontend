import React, { forwardRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  floating?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, icon, floating = true, className = '', type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0);
      props.onChange?.(e);
    };

    const inputType = type === 'password' && showPassword ? 'text' : type;

    return (
      <div className="space-y-2 animate-slide-up">
        {label && !floating && (
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            {label}
          </label>
        )}
        
        <div className={`relative ${floating ? 'form-floating' : ''}`}>
          {icon && (
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black z-10">
              {icon}
            </div>
          )}
          
          <input
            ref={ref}
            type={inputType}
            className={`
              w-full px-4 py-4 ${icon ? 'pl-12' : ''} ${type === 'password' ? 'pr-12' : ''}
              glass rounded-2xl border border-white/20 
              text-gray-900 placeholder-gray-500
              focus:outline-none focus:ring-4 focus:ring-blue-500/30 
              focus:border-white/40 focus:bg-white/20
              transition-all duration-300 backdrop-blur-xl
              hover:border-white/30 hover:bg-white/10
              ${error ? 'border-red-400/60 focus:ring-red-500/30' : ''}
              ${isFocused ? 'transform scale-[1.02]' : ''}
              ${className}
            `}
            placeholder={floating ? ' ' : (props.placeholder || '')}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            onChange={handleChange}
            {...props}
          />
          
          {floating && label && (
            <label className={`
              absolute left-4 transition-all duration-300 pointer-events-none
              ${isFocused || hasValue || props.value
                ? 'top-2 text-xs text-blue-600 font-semibold'
                : 'top-4 text-base text-gray-600'
              }
            `}>
              {label}
            </label>
          )}
          
          {type === 'password' && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>
        
        {error && (
          <div className="flex items-center space-x-2 animate-slide-right">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <p className="text-sm text-red-300 font-medium">{error}</p>
          </div>
        )}
        
        {helperText && !error && (
          <p className="text-sm text-gray-600 flex items-center space-x-2">
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>{helperText}</span>
          </p>
        )}
      </div>
    );
  }
);