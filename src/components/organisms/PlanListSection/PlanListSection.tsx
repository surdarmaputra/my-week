import React, { ReactElement } from 'react';
import { format } from 'date-fns';
import Heading from 'components/atoms/Heading';
import PlanCard from 'components/molecules/PlanCard';
import plans from 'data/plans.json';

export default function TemplateListSection(): ReactElement {
  return (
    <section className="mb-20">
      <Heading>Plans</Heading>
      <div className="w-full grid grid-cols-3 gap-x-8 gap-y-12">
        {plans.map(({ id, title, updatedAt }) => (
          <PlanCard
            key={id}
            primaryTitle={title}
            secondaryTitle={`updated at ${format(new Date(updatedAt), 'd MMM yyyy')}`}
          />
        ))}
      </div>
    </section>
  );
}
