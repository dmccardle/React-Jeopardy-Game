import React from 'react';

const PlayerInput = props => {
  const {name, score, setName, setScore} = props

  const onNameChange = (event) => {
    setName(event.target.value)
  }

  return (
    <div className="player-input">
      <input type="text" value={name} onChange={onNameChange}/>
      <div className="player-score">
        <button className="minus" onClick={() => setScore('sub')}>-</button>
        <label>${score}</label>
        <button className="plus" onClick={() => setScore('add')}>+</button>
      </div>
    </div>
  )
};

export default PlayerInput;
