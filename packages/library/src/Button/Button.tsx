import React from 'react';
import styles from './button.module.css';
import classnames from 'classnames';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'danger';
  icon?: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
}
const Button = ({
  color = 'primary',
  variant = 'contained',
  icon,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={classnames(
        styles.button,
        className,
        styles[color],
        styles[variant],
      )}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
