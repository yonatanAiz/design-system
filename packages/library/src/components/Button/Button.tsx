import React from 'react';
import styles from './button.module.css';
import classnames from 'classnames';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'danger';
  icon?: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
}

const Button = ({
  color = 'primary',
  variant = 'contained',
  type = 'button',
  icon,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      className={classnames(
        styles.button,
        className,
        styles[variant],
        styles[color],
      )}
    >
      {icon ? <span data-testid="button-icon-prefix">{icon}</span> : null}
      {children}
    </button>
  );
};

export default Button;
