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

const content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

const items = [
  {
    key: 1,
    title: 'Collapsible One',
    content,
  },
  {
    key: 2,
    title: 'Collapsible Two',
    content,
  },
  {
    key: 3,
    title: 'Collapsible Three',
    content,
  },
  {
    key: 4,
    title: 'Collapsible Four',
    content,
  },
]

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  items,
}
