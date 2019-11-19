//parent component that will hold the cards
import React, { Component } from "react"
import categoryData from "./assets/constants/categories"
import './assets/css/Board.css'
import Category from './Category'

class Board extends Component {
  render() {
    const categoryList = categoryData.map((category, index) => {
      return <Category key={index} category={category} openModal={this.props.openModal}/>
    });
    return (
      <div className="board">{categoryList}</div>
    )
  }
}

export default Board
