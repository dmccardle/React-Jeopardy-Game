import React, { Component } from "react"
import './assets/css/Modal.css'

class Modal extends Component {
  constructor() {
    super()
    this.state = {
      displayAnswer: false
    }
  }

  toggleAnswer = () => {
    this.setState((prev) => {
      return {
        displayAnswer: !prev.displayAnswer
      }
    })
  }

  closeModal = () => {
    this.setState({
      displayAnswer: false
    })
    this.props.closeModal()
  }
  
  render() {
    return (
      <div className={`modal-container ${this.props.displayModal ? "show" : ""}`}>
        <div className="header">
          <div className="close" onClick={this.closeModal}>&times;</div>
        </div>
        <div className="modal-body">
          <div className="question">{this.props.modalData.question}</div>
          <div className="answer">
            {this.state.displayAnswer ? this.props.modalData.answer : ""}
          </div>
          <button className="btn" onClick={this.toggleAnswer}>
            {this.state.displayAnswer ? 'Hide Answer' : 'Show Answer'}
          </button>
        </div>
      </div>
    )
  }
}

export default Modal
