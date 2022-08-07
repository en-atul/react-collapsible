import {ComponentMeta} from '@storybook/react'

import {Page} from './Page'

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Page>
