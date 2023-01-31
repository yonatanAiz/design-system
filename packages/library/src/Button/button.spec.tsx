import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button, { ButtonProps } from './Button';


const TEXT_CONTENT = 'Click me';

const renderButton = (props?: ButtonProps) =>
  render(<Button {...props}>{TEXT_CONTENT}</Button>);
const getButton = () => screen.getByRole('button', { name: TEXT_CONTENT });

describe('Button', () => {
  it('should render', () => {
    renderButton();
    expect(getButton()).toBeInTheDocument();
  });

  it('should render primary contained by default', () => {
    renderButton();
    const buttonClassName = getButton().className;
    expect(buttonClassName).toContain('contained');
    expect(buttonClassName).toContain('primary');
  });

  it('should render secondary outlined', () => {
    renderButton({ variant: 'outlined', color: 'secondary' });
    const buttonClassName = getButton().className;
    expect(buttonClassName).toContain('outlined');
    expect(buttonClassName).toContain('secondary');
  });

  it('should render danger text', () => {
    renderButton({ variant: 'text', color: 'danger' });
    const buttonClassName = getButton().className;
    expect(buttonClassName).toContain('text');
    expect(buttonClassName).toContain('danger');
  });

  it('should render with icon', () => {
    renderButton({ icon: <span>Icon</span> });
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  it('should invoke onClick', () => {
    const onClick = jest.fn();
    renderButton({ onClick });
    fireEvent.click(getButton());
    expect(onClick).toHaveBeenCalled();
  });
});
