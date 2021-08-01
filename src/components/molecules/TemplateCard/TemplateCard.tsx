import React, { MouseEventHandler, ReactElement } from 'react';
import identity from 'lodash-es/identity';
import Button, { ButtonVariations } from 'components/atoms/Button';
import CardWrapper from 'components/atoms/CardWrapper';

interface Props {
  className?: string;
  onDuplicate?: MouseEventHandler;
  onPreview?: MouseEventHandler;
  title: string;
}

export default function PlanCard({
  className = '',
  onDuplicate = identity,
  onPreview = identity,
  title = '',
}: Props): ReactElement {
  const Actions = (
    <>
      <Button
        className="mr-4"
        noPadding
        onClick={onPreview}
        transparent
        variation={ButtonVariations.primary}
      >
        Preview
      </Button>
      <Button
        noPadding
        onClick={onDuplicate}
        transparent
        variation={ButtonVariations.primary}
      >
        Duplicate
      </Button>
    </>
  );

  return (
    <CardWrapper className={className} actions={Actions}>
      <div className="text-2xl font-bold mb-1">
        {title}
      </div>
    </CardWrapper>
  );
}
