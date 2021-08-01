import React, { ReactElement } from 'react';
import PlanListSection from 'components/organisms/PlanListSection';
import TemplateListSection from 'components/organisms/TemplateListSection';

export default function DashboardPage(): ReactElement {
  return (
    <div className="px-12 py-16 bg-blue-50">
      <TemplateListSection />
      <PlanListSection />
    </div>
  );
}
