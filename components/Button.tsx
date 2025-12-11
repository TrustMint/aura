import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-normal tracking-wide transition-all duration-500 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed rounded-full backdrop-blur-md";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-transparent",
    secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/10",
    glass: "bg-black/30 text-white hover:bg-black/50 border border-white/5",
    ghost: "bg-transparent text-gray-400 hover:text-white",
  };

  const sizes = {
    sm: "px-5 py-2 text-xs uppercase tracking-widest",
    md: "px-8 py-3.5 text-sm",
    lg: "px-10 py-5 text-base font-medium",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;