import React, { PropTypes } from 'react'
import Button from 'zooid-button'

const propTypes = {
  header: PropTypes.string,
}

const defaultProps = {}

const CollapseHeader = ({ header }) => {
  if (!header) return null

  return (
    <Button kind="no-style" block>{header}</Button>
  )
}

CollapseHeader.propTypes    = propTypes
CollapseHeader.defaultProps = defaultProps

export default CollapseHeader
