import React from 'react'
import { connect } from 'react-redux'

class Container extends React.Component {
  render(){
    return(
      <div>
        {this.props.input}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    input: state.input
  }
}

export default connect(mapStateToProps)(Container)
