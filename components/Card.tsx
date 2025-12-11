
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`glass-thick rounded-[2.5rem] p-8 overflow-hidden transition-all duration-500 hover:bg-white/[0.05] hover:border-white/10 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
