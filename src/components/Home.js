import React from 'react'
import { connect } from 'react-redux'
import { typingInput, settingWords } from '../redux/actions'
import Word from './Word'
import PlayerInput from './Player/PlayerInput'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      timer: null
    }
  }

  handleChange = event => {
    this.props.typingInput(event.currentTarget.value)
  }

  handleClick = event => {
    this.state.timer = setInterval(() => this.props.settingWords(), 2000)
  }
  FINISH ^^^^^

  componentWillUnmount(){
    clearTimeout(this.state.timer)
  }

  render(){
    return(
      <div>
        ---
          {this.props.user ?
            this.props.user.points
            : null
          }
        <input
          type='text'
          name='input'
          value={this.props.input}
          onChange={this.handleChange} />
        <button onClick={this.handleClick} />
        <PlayerInput />
        {this.props.words ?
          this.props.words.map( word => (
            <Word word={word} key={word}/>
          ))
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    words: state.words,
    user: state.user,
    input: state.input
  }
}

export default connect(mapStateToProps, { typingInput, settingWords })(Home)
