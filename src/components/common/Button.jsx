
import React from 'react';

const Button = ({
  onClick,
  children,
  type = 'button',
  variant = 'default',
  isLoading = false,
  isDisabled = false,
  size = 'medium',
  width = 'auto',
  ...props
}) => {
  const baseClasses = ' inline-flex items-center justify-center border border-transparent rounded-md font-medium transition duration-150 ease-in-out';

  const variantClasses = {
    default: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
    primary: 'bg-primary text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    success: 'bg-green-600 text-white hover:bg-green-700',
  };

  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      style={{ width }}
      {...props}
    >
      {isLoading ? <span className="loader mr-2"></span> : null}
      {isLoading ? 'Loading':children}
    </button>
  );
};

export default Button;
