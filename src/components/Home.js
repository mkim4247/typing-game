import React from 'react'
import Container from './Container'
import { connect } from 'react-redux'
import { typeInput, settingWords } from '../redux/actions'
import Word from './Word'
import PlayerContainer from './PlayerContainer'

class Home extends React.Component {

  handleChange = event => {
    this.props.typeInput(event.currentTarget.value)
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
        <Container />
        {this.props.words ?
          this.props.words.map( word => (
            <Word word={word} />
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

export default connect(mapStateToProps, { typeInput, settingWords })(Home)
