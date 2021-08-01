import React, { ReactElement } from 'react';

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
}: Props): ReactElement {
  return (
    <div className={`
      p-6 rounded-lg border border-gray-100 shadow-lg
      bg-white transition transform hover:shadow-xl
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
