import React from 'react'
import Container from './Container'
import { connect } from 'react-redux'
import { typeInput, settingWords } from '../redux/actions'

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
    word: state.word,
    user: state.user
  }
}

export default connect(mapStateToProps, { typeInput, settingWords })(Home)
