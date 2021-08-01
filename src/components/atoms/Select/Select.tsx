import React, { ChangeEventHandler, ReactElement } from 'react';
import identity from 'lodash-es/identity';

interface Option {
  label: string;
  value: string;
}

interface Props {
  className?: string;
  onChange?: ChangeEventHandler;
  options?: Option[];
  placeholder?: string;
  value?: Option | undefined;
}

export default function Select({
  className = '',
  onChange = identity,
  options = [],
  placeholder = 'Select',
  value: selectedOption = undefined,
}: Props): ReactElement {
  return (
    <div className={`inline-block relative text-gray-700 w-full ${className}`}>
      <select
        className="
        bg-white text-lg appearance-none w-full px-4 py-3 rounded-md outline-none transition
        border border-gray-300 focus:ring-1 focus:ring-blue-400
        placeholder-gray-500 focus:placeholder-gray-400
      "
        onChange={onChange}
        value={selectedOption ? selectedOption.value : ''}
      >
        {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
        )}
        {options.map(({ label, value }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
        <svg
          className="w-4 h-4 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}
