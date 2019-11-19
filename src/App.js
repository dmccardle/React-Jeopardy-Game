import React, { Component } from 'react'
import './assets/css/App.css'
import Board from './Board'
import Modal from './Modal'
import PlayerInput from './PlayerInput'

class App extends Component { 
  constructor() {
    super()
    this.state = {
      displayModal: false,
      modalData: {
        question: '',
        answer: '',
        value: 0
      },
      players: [
        {name: 'player 1', score: 0},
        {name: 'player 2', score: 0},
        {name: 'player 3', score: 0}
      ]
    }
  }
  
  closeModal = () => {
    this.setState({
      displayModal: false
    })
  }

  openModal = (question) => {
    this.setState({
      displayModal: true,
      modalData: question
    })
  }

  setPlayerName = (index, name) => {
    this.setState((prevState) => {
      const players = prevState.players
      players[index].name = name
      return {players}
    })
  }

  setPlayerScore = (index, operation) => {
    this.setState((prevState) => {
      let value = this.state.modalData.value
      value = operation === 'add' ? value : value * -1

      const players = prevState.players
      players[index].score += value
      return {players}
    })
  }
  
  render() {
    const playerList = this.state.players.map((player, index) => {
      return <PlayerInput key={index} name={player.name} score={player.score} 
      setName={(name) => this.setPlayerName(index, name)}
      setScore={(operation) => this.setPlayerScore(index, operation)}/>
    })
    return (
      <div className="app">
        <Board openModal={this.openModal}/>
        <Modal 
          displayModal={this.state.displayModal}
          closeModal={this.closeModal}
          modalData={this.state.modalData}
        />
        <div className="player-list">
          {playerList}
        </div>
      </div>
    )
  }
}

export default App
