import React, { MouseEventHandler } from 'react';
import identity from 'lodash-es/identity';

export enum ButtonVariations {
  primary = 'primary',
  secondary = 'secondary',
  danger = 'danger',
}

export enum ButtonTypes {
  button = 'button',
  submit = 'submit',
}

type ButtonClassNames = {
  [key in ButtonVariations]: {
    background?: string;
    text: string;
  }
};

interface Props {
  children?: React.ReactNode;
  onClick?: MouseEventHandler;
  transparent?: boolean;
  type?: ButtonTypes;
  variation?: ButtonVariations;
}

const solidButtonClassNames: ButtonClassNames = {
  [ButtonVariations.primary]: {
    background: 'bg-blue-500 hover:bg-blue-600',
    text: 'text-white',
  },
  [ButtonVariations.secondary]: {
    background: 'bg-gray-200 hover:bg-gray-300',
    text: 'text-gray-800',
  },
  [ButtonVariations.danger]: {
    background: 'bg-red-500 hover:bg-red-600',
    text: 'text-white',
  },
};

const transparentButtonClassNames: ButtonClassNames = {
  [ButtonVariations.primary]: {
    text: 'text-blue-500 hover:text-blue-700',
  },
  [ButtonVariations.secondary]: {
    text: 'text-gray-400 hover:text-gray-600',
  },
  [ButtonVariations.danger]: {
    text: 'text-red-500 hover:text-red-700',
  },
};

export default function Button({
  children = null,
  onClick = identity,
  transparent = false,
  type = ButtonTypes.button,
  variation = ButtonVariations.primary,
}: Props): JSX.Element {
  const { background, text } = transparent
    ? transparentButtonClassNames[variation]
    : solidButtonClassNames[variation];
  const className = [
    'px-8 py-3 rounded-md text-xl transition',
    background,
    text,
  ].join(' ');

  return (
    <button
      type={type === ButtonTypes.submit ? 'submit' : 'button'}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
