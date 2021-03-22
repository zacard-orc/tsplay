// import React from 'react';
import { Meta, Story } from '@storybook/react';
import { RxButton, Props } from '../src/Button';

const meta: Meta = {
  title: 'Welcome/UI/Button',
  component: RxButton,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <RxButton {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});


export const Secondary = Template.bind({});
Secondary.args = {
  label: 'bbb'
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large'
};

Default.args = {
  label: 'Defaults'
};
