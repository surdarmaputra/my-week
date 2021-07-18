import React, { ChangeEventHandler } from 'react';
import identity from 'lodash-es/identity';

export enum InputSizes {
  normal = 'normal',
  large = 'large',
}

interface Props {
  onChange?: ChangeEventHandler;
  placeholder?: string;
  size?: InputSizes;
  type?: string;
  value?: string | number;
}

export default function Input({
  onChange = identity,
  placeholder = '',
  size = InputSizes.normal,
  type = 'text',
  value = '',
}: Props): JSX.Element {
  const className = `
    w-full px-4 py-3 rounded-md outline-none transition
    border border-gray-300 focus:ring-1 focus:ring-blue-400
    placeholder-gray-500 focus:placeholder-gray-400
    ${size === InputSizes.large ? 'text-3xl' : 'text-lg'}
  `;

  return (
    <input
      className={className}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
}
