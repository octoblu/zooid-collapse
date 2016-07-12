import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import Collapse from './'
import CollapseHeader from '../CollapseHeader'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<Collapse />', () => {
  it('should set expanded prop to false by default', () => {
    const sut = mount(<Collapse />)
    expect(sut).to.have.prop('expanded', false)
  })

  it('should render children when passed in as prop', () => {
    const sut = shallow(
      <Collapse>
        <p>Something Fancy!</p>
      </Collapse>
    )

    expect(sut.find('.Collapse-body')).to.contain('Something Fancy!')
  })

  it('should render component')
  describe('-> componentWillMount()', () => {
    let sut

    it('should map expanded prop to isExpanded state', () => {
      sut = mount(<Collapse expanded />)
      expect(sut).to.have.state('isExpanded', true)

      sut = mount(<Collapse />)
      expect(sut).to.have.state('isExpanded', false)
    })
  })

  describe('-> toggleExpandedState()', () => {
    it('should toggle isExpanded state', () => {
      const sut = mount(<Collapse expanded />)
      expect(sut).to.have.state('isExpanded', true)

      sut.instance().toggleExpandedState()
      expect(sut).to.have.state('isExpanded', false)

      sut.instance().toggleExpandedState()
      expect(sut).to.have.state('isExpanded', true)
    })
  })

})
