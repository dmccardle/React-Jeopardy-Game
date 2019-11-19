import React, { Component } from "react"
import './assets/css/Card.css'

class Card extends Component {
  constructor() {
    super()
    this.state = {
      isVisited: false
    }
  }

  disableCard = () => {
    this.setState({
      isVisited: true
    })
  }

  openModal = () => {
    this.disableCard()
    this.props.openModal({
      question: this.props.question,
      answer: this.props.answer,
      value: this.props.value
    })
  }

  render() {
    if (this.props.categoryHeader) {
      return <div className="card header">{this.props.categoryHeader}</div>
    } else {
      return <div className={`card ${this.state.isVisited ? "visited" : ""}`} onClick={this.openModal}>${this.props.value}</div>
    }
  }
}

export default Card
