import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Collapse from '../src'

storiesOf('Collapse', module).add('Basic', () => {
  return (
    <Collapse header="Lemonade">
      <p>Lorem ipsum dolor sit amet.</p>
    </Collapse>
  )
})
