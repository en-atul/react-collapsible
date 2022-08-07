import {ComponentMeta, ComponentStory} from '@storybook/react'
import {userEvent, within} from '@storybook/testing-library'
import React from 'react'

import {Page} from './Page'

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Page>
