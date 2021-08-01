import React, { MouseEventHandler, ReactElement } from 'react';
import identity from 'lodash-es/identity';
import Button, { ButtonVariations } from 'components/atoms/Button';
import CardWrapper from 'components/atoms/CardWrapper';

interface Props {
  className?: string;
  onDelete?: MouseEventHandler;
  onDuplicate?: MouseEventHandler;
  onEdit?: MouseEventHandler;
  primaryTitle: string;
  secondaryTitle?: string;
}

export default function PlanCard({
  className = '',
  onDelete = identity,
  onDuplicate = identity,
  onEdit = identity,
  primaryTitle = '',
  secondaryTitle = '',
}: Props): ReactElement {
  const Actions = (
    <>
      <div>
        <Button
          className="mr-4"
          noPadding
          onClick={onEdit}
          transparent
          variation={ButtonVariations.primary}
        >
          Edit
        </Button>
        <Button
          noPadding
          onClick={onDuplicate}
          transparent
          variation={ButtonVariations.primary}
        >
          Duplicate
        </Button>
      </div>
      <Button
        className="ml-10"
        noPadding
        onClick={onDelete}
        transparent
        variation={ButtonVariations.danger}
      >
        Delete
      </Button>
    </>
  );

  return (
    <CardWrapper
      className={className}
      actions={Actions}
      actionWrapperClassName="flex flex-row justify-between mt-6"
    >
      <div className="text-2xl font-bold mb-1">
        {primaryTitle}
      </div>
      <div className="text-lg text-gray-500">
        {secondaryTitle}
      </div>
    </CardWrapper>
  );
}
