import React from 'react';
import { render } from '@testing-library/react';
import Button, { ButtonProps } from './Button';
import { buttonDriver } from './button.testDriver';

const TEXT_CONTENT = 'Click me';

const renderButton = (props?: ButtonProps) =>
  render(<Button {...props}>{TEXT_CONTENT}</Button>);

describe('Button', () => {
  it('should render', () => {
    renderButton();
    expect(buttonDriver.getButton()).toBeInTheDocument();
  });

  it('should render primary contained by default', () => {
    renderButton();
    const buttonClassName = buttonDriver.getButton().className;
    expect(buttonClassName).toContain('contained');
    expect(buttonClassName).toContain('primary');
  });

  it('should render secondary outlined', () => {
    renderButton({ variant: 'outlined', color: 'secondary' });
    const buttonClassName = buttonDriver.getButton().className;
    expect(buttonClassName).toContain('outlined');
    expect(buttonClassName).toContain('secondary');
  });

  it('should render danger text', () => {
    renderButton({ variant: 'text', color: 'danger' });
    const buttonClassName = buttonDriver.getButton().className;
    expect(buttonClassName).toContain('text');
    expect(buttonClassName).toContain('danger');
  });

  it('should render with icon', () => {
    renderButton({ icon: <span>Icon</span> });
    expect(buttonDriver.getIconInButton()).toBeInTheDocument();
  });

  it('should invoke onClick', () => {
    const onClick = jest.fn();
    renderButton({ onClick });
    buttonDriver.clickOnButton();
    expect(onClick).toHaveBeenCalled();
  });
});
