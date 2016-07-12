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

class Collapse extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isExpanded: null,
    }
  }

  componentWillMount() {
    this.setState({
      isExpanded: this.props.expanded,
    })
  }

  toggleExpandedState() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <div className="Collapse-body">{children}</div>
      </div>
    )
  }
}

Collapse.propTypes    = propTypes
Collapse.defaultProps = defaultProps

export default Collapse
