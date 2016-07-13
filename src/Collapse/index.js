import React, { PropTypes } from 'react'
import CollapseHeader from '../CollapseHeader'

const propTypes = {
  children: PropTypes.node,
  expanded: PropTypes.bool,
  header: PropTypes.string,
}

const defaultProps = {
  expanded: false,
}

const Collapse = ({ children, expanded, header }) => {
  let body = null
  if (expanded) body = <div>{children}</div>
  
  return (
    <div>
      <CollapseHeader header={header} />
      {body}
    </div>
  )
}

Collapse.propTypes    = propTypes
Collapse.defaultProps = defaultProps

export default Collapse
