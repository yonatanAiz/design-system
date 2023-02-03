import React from 'react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const DefaultPrimary = () => <Button>Button</Button>;
export const Secondary = () => <Button color="secondary">Button</Button>;
export const Danger = () => <Button color="danger">Button</Button>;
export const OutlinePrimary = () => <Button variant="outlined">Button</Button>;
export const OutlineSecondary = () => (
  <Button variant="outlined" color="secondary">
    Button
  </Button>
);

export const OutlineDanger = () => (
  <Button variant="outlined" color="danger">
    Button
  </Button>
);

export const TextPrimary = () => <Button variant="text">Button</Button>;
export const TextSecondary = () => (
  <Button variant="text" color="secondary">
    Button
  </Button>
);

export const TextDanger = () => (
  <Button variant="text" color="danger">
    Button
  </Button>
);

export const WithIcon = () => <Button icon={<span>👍</span>}>Button</Button>;

export const SnapTest = () => (
  <div>
    <Button>Button</Button>
    <Button color="secondary">Button</Button>
    <Button color="danger">Button</Button>
    <Button variant="outlined">Button</Button>
    <Button variant="outlined" color="secondary">
      Button
    </Button>
    <Button variant="outlined" color="danger">
      Button
    </Button>
    <Button variant="text">Button</Button>
    <Button variant="text" color="secondary">
      Button
    </Button>
    <Button variant="text" color="danger">
      Button
    </Button>
    <Button icon={<span>👍</span>}>Button</Button>
  </div>
);
