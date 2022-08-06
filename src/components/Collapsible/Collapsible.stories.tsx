import {ComponentMeta, ComponentStory} from '@storybook/react'
import React from 'react'

import Collapsible from './Collapsible'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Collapsible',
  component: Collapsible,
} as ComponentMeta<typeof Collapsible>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Collapsible> = args => (
  <Collapsible {...args} />
)

const items = [
  {
    key: 1,
    title: 'Collapsible One',
    content:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
  {
    key: 2,
    title: 'Collapsible Two',
    content:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
  {
    key: 3,
    title: 'Collapsible Three',
    content:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
  {
    key: 4,
    title: 'Collapsible Four',
    content:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
]

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  items,
}

// export const ClickMe = Template.bind({})
// ClickMe.args = {
//   label: 'Click me!',
// }
