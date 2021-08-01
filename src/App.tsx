import React, { ReactElement } from 'react';
import Button, { ButtonVariations } from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Input, { InputSizes } from 'components/atoms/Input';
import Select from 'components/atoms/Select';
import CardWrapper from 'components/atoms/CardWrapper';
import PlanCard from 'components/molecules/PlanCard';
import TemplateCard from 'components/molecules/TemplateCard';
import logo from './logo.svg';
import './App.css';

function App(): ReactElement {
  return (
    <div className="App">
      <Heading>Template</Heading>
      <Button>
        Hello
      </Button>
      <Button variation={ButtonVariations.secondary}>
        Hello
      </Button>
      <Button variation={ButtonVariations.danger}>
        Hello
      </Button>
      <br />
      <Button transparent>
        Hello
      </Button>
      <Button variation={ButtonVariations.secondary} transparent>
        Hello
      </Button>
      <Button variation={ButtonVariations.danger} transparent>
        Hello
      </Button>
      <br />
      <Input type="text" size={InputSizes.large} />
      <br />
      <Input type="text" />
      <br />
      <Input type="text" placeholder="Plan Title" />
      <br />
      <Input type="text" placeholder="Plan Title" value="test" />
      <br />
      <Select placeholder="Plan Title" />
      <br />
      <Select
        placeholder="Plan Title"
        options={[
          {
            label: 'Option 1',
            value: 'option1',
          },
        ]}
      />
      <br />
      <Select
        placeholder="Plan Title"
        options={[
          {
            label: 'Option 1',
            value: 'option1',
          },
        ]}
        value={{
          label: 'Option 1',
          value: 'option1',
        }}
      />
      <div className="flex w-full">
        <CardWrapper
          className="m-8 flex-grow"
          actions={(
            <>
              <Button className="px-0 mr-4" transparent noPadding>Preview</Button>
              <Button transparent noPadding>Create from this</Button>
            </>
          )}
        >
          Test
        </CardWrapper>
        <CardWrapper className="m-8 flex-grow">
          Test
        </CardWrapper>
        <CardWrapper className="m-8 flex-grow">
          Test
        </CardWrapper>
      </div>

      <div className="flex w-full">
        <PlanCard
          className="m-8 flex-auto"
          primaryTitle="Primary title"
          secondaryTitle="secondary title"
        />
      </div>

      <div className="flex w-full">
        <TemplateCard
          className="m-8 flex-auto"
          title="Template title"
        />
      </div>
    </div>
  );
}

export default App;
