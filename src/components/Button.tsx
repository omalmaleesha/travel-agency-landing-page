import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}
export function Button({
  children,
  variant = 'primary',
  className = '',
  onClick
}: ButtonProps) {
  const baseStyles = 'py-3 px-8 text-sm font-medium transition-colors';
  const variantStyles = {
    primary: 'bg-[#d5b062] hover:bg-[#c9a14f] text-black',
    secondary: 'bg-transparent border border-[#d5b062] text-[#d5b062] hover:bg-[#d5b062]/10'
  };
  return <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>;
}