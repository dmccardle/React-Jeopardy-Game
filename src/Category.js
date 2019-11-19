import React from "react"
import './assets/css/Category.css'
import Card from './Card'

const Category = props => {
    const cards = props.category.questions.map((question, index) => {
        return <Card key={index} value={question.value} openModal={props.openModal}
        question={question.question} answer={question.answer}/>
    });
    return (
        <div className="category">
            <Card categoryHeader={props.category.name}/>
            {cards}
        </div>
    )
}

export default Category
