import React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
  actions?: React.ReactNode;
}

export default function Card({
  children = null,
  className = '',
  actions = null,
}: Props): JSX.Element {
  return (
    <div className={`
      p-6 rounded-lg border border-gray-100 shadow-lg
      transition transform hover:scale-105
      ${className}
    `}
    >
      {children}
      {actions && (
        <div className="mt-6">
          {actions}
        </div>
      )}
    </div>
  );
}
