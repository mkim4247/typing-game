import React from 'react'
import { connect } from 'react-redux'

class PlayerInput extends React.Component {
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

export default connect(mapStateToProps)(PlayerInput)
