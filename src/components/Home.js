import React from 'react'
import Container from './Container'
import { connect } from 'react-redux'
import { typeLetter } from '../redux/actions'

class Home extends React.Component {

  handleChange = event => {
    this.props.typeLetter(event.currentTarget.value)
  }

  render(){
    return(
      <div>
        home
        <input
          type='text'
          name='word'
          onChange={this.handleChange} />
        <Container />
      </div>
    )
  }

}

export default connect(null, { typeLetter })(Home)
