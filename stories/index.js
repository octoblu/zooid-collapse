import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Collapse from '../src'

storiesOf('Collapse', module)
  .addWithInfo('Basic', 'added Description', () => (
    <Collapse />
  ), { inline: true })
  .add('Basic', () => (
    <Collapse />
  ))
