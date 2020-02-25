import React from 'react'
import { connect } from 'react-redux'
import { typingInput, settingWords } from '../redux/actions'
import Word from './Word'
import PlayerInput from './Player/PlayerInput'

class Home extends React.Component {

  handleChange = event => {
    this.props.typingInput(event.currentTarget.value)
  }

  handleClick = event => {
    this.props.settingWords()
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
