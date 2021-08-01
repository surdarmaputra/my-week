import React, { ReactElement } from 'react';
import Heading from 'components/atoms/Heading';
import TemplateCard from 'components/molecules/TemplateCard';
import templates from 'data/templates.json';

export default function TemplateListSection(): ReactElement {
  return (
    <section className="mb-20">
      <Heading>Templates</Heading>
      <div className="w-full grid grid-cols-3 gap-x-8 gap-y-12">
        {templates.map(({ id, title }) => (
          <TemplateCard key={id} title={title} />
        ))}
      </div>
    </section>
  );
}
