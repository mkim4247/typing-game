import React from 'react'
import { connect } from 'react-redux'
import { markStrike } from '../redux/actions'

class Word extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      correct: false,
      timer: null
    }
  }

  componentDidMount(){
    this.state.timer = setTimeout(() => {
      if(this.state.correct){
        clearTimeout(this.state.timer)
      }
      else{
        this.props.markStrike()
        clearTimeout(this.state.timer)
      }
    }, 5000)
  }

  componentWillUnmount(){
    clearTimeout(this.state.timer)
  }

  render(){
    return(
      <div>
        {this.props.word}
      </div>
    )
  }

}

export default connect(null, { markStrike })(Word)
