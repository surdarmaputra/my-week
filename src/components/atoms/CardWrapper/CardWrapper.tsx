import React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
  actions?: React.ReactNode;
  actionWrapperClassName?: string;
}

export default function Card({
  children = null,
  className = '',
  actions = null,
  actionWrapperClassName = 'mt-6',
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
        <div className={actionWrapperClassName}>
          {actions}
        </div>
      )}
    </div>
  );
}
