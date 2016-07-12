import _ from 'lodash'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import Button from 'zooid-button'

import CollapseHeader from './'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<CollapseHeader />', () => {
  it('should render nothing when header prop is null', () => {
    const sut = shallow(<CollapseHeader />)
    expect(sut).to.be.empty
  })

  it('should render header when header prop is a valid string', () => {
    const sut = shallow(<CollapseHeader header="Queen Bee" />)
    expect(sut).to.contain(<Button kind="no-style" block>Queen Bee</Button>)
  })
})
