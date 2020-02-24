import React from 'react'
import { connect } from 'react-redux'
import { markStrike } from '../redux/actions'

class Word extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      correct: false
    }
  }

  componentDidMount(){
    const timer = setTimeout(() => {
      if(this.state.correct){
        clearTimeout(timer)
      }
      else{
        this.props.markStrike()
        clearTimeout(timer)
      }
    }, 5000)
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
