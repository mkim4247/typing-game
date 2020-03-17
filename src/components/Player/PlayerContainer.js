import React from 'react'
import PlayerDisplay from './PlayerDisplay'
import PlayerInput from './PlayerInput'

class PlayerContainer extends React.Component {
  render(){
    return(
      <div>
        <PlayerDisplay />
        <PlayerInput />
      </div>
    )
  }
}

export default PlayerContainer
