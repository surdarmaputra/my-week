import React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function Heading({ children, className = '' }: Props): JSX.Element {
  return (
    <h1 className={`text-5xl mb-5 ${className}`}>
      {children}
    </h1>
  );
}
