import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export default function Heading({ children }: Props): JSX.Element {
  return (
    <h1 className="text-5xl mb-5">
      {children}
    </h1>
  );
}
