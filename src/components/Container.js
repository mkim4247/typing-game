import React from 'react'
import { connect } from 'react-redux'

class Container extends React.Component {
  render(){
    return(
      <div>
        {this.props.word}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    word: state.word
  }
}

export default connect(mapStateToProps)(Container)
