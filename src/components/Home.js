import React from 'react'
import Container from './Container'
import { connect } from 'react-redux'
import { typeLetter } from '../redux/actions'
import dictionary from '../dictionary.txt'

class Home extends React.Component {

  handleChange = event => {
    this.props.typeLetter(event.currentTarget.value)
  }

  componentDidMount(){
    fetch('../dictionary.txt')
    .then(res => res.text())
    .then(data => console.log(data))
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
