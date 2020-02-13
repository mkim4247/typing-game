import React from 'react'
import Container from './Container'
import { connect } from 'react-redux'
import { typeLetter, settingWords } from '../redux/actions'

class Home extends React.Component {

  handleChange = event => {
    this.props.typeLetter(event.currentTarget.value)
  }

  handleClick = event => {
    this.props.settingWords()
  }

  render(){
    return(
      <div>
        ---
        <input
          type='text'
          name='word'
          onChange={this.handleChange} />
        <button onClick={this.handleClick} />
        <Container />
        {this.props.word ?
          <div>
            {this.props.word}
          </div>
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    word: state.word
  }
}

export default connect(mapStateToProps, { typeLetter, settingWords })(Home)
