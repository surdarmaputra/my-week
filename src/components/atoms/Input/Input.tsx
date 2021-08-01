import React, { ChangeEventHandler, ReactElement } from 'react';
import identity from 'lodash-es/identity';

export enum InputSizes {
  normal = 'normal',
  large = 'large',
}

interface Props {
  className?: string;
  onChange?: ChangeEventHandler;
  placeholder?: string;
  size?: InputSizes;
  type?: string;
  value?: string | number;
}

export default function Input({
  className = '',
  onChange = identity,
  placeholder = '',
  size = InputSizes.normal,
  type = 'text',
  value = '',
}: Props): ReactElement {
  const finalClassName = `
    w-full px-4 py-3 rounded-md outline-none transition
    border border-gray-300 focus:ring-1 focus:ring-blue-400
    placeholder-gray-500 focus:placeholder-gray-400
    ${size === InputSizes.large ? 'text-3xl' : 'text-lg'}
    ${className}
  `;

  return (
    <input
      className={finalClassName}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
}
