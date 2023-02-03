import {
  ByRoleOptions,
  fireEvent,
  screen,
  within,
} from '@testing-library/react';

export const buttonDriver = {
  getButton: (options?: ByRoleOptions) => screen.getByRole('button', options),
  clickOnButton: (options?: ByRoleOptions) =>
    fireEvent.click(buttonDriver.getButton(options)),
  getIconInButton: (options?: ByRoleOptions) =>
    within(buttonDriver.getButton(options)).getByTestId('button-icon-prefix'),
};
