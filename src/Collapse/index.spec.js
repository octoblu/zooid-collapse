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
  describe('when passed header as prop', () => {
    it('should render header', () => {
      const sut = shallow(
        <Collapse header="Addicted To Vi" />
      )

      expect(sut).to.contain(<CollapseHeader header="Addicted To Vi" />)
    })
  })

  describe('when expanded prop is truthy', () => {
    it('should not render children', () => {
      const sut = shallow(
        <Collapse expanded>
          <p>Might as well face it, You're addicted to vi!</p>
        </Collapse>
      )
      expect(sut).to.contain(<p>Might as well face it, You're addicted to vi!</p>)
    })
  })

  describe('when expanded prop is falsy', () => {
    it('should not render children', () => {
      const sut = shallow(
        <Collapse>
          <p>Might as well face it, You're addicted to vi!</p>
        </Collapse>
      )
      expect(sut).to.not.contain(<p>Might as well face it, You're addicted to vi!</p>)
    })
  })

  describe('when expanded prop is not set', () => {
    it('should set expanded prop to false by default', () => {
      const sut = mount(<Collapse />)
      expect(sut).to.have.prop('expanded', false)
    })
  })
})
