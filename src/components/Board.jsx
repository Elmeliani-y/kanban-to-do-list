import React, { useState } from 'react';
import Card from './Card';
import AddCard from './AddCard';

function Board() {
  const [todoCards, setTodoCards] = useState([]);
  const [inProgressCards, setInProgressCards] = useState([]);
  const [doneCards, setDoneCards] = useState([]);

  const handleAddCard = (title, description) => {
    setTodoCards([...todoCards, { title, description }]);
  };

  const moveCard = (index, targetColumn) => {
    if (targetColumn === 'inProgress') {
      const cardToMove = todoCards[index];
      setTodoCards(todoCards.filter((_, i) => i !== index));
      setInProgressCards([...inProgressCards, cardToMove]);
    } else if (targetColumn === 'done') {
      const cardToMove = inProgressCards[index];
      setInProgressCards(inProgressCards.filter((_, i) => i !== index));
      setDoneCards([...doneCards, cardToMove]);
    }
  };

  const handleEditCard = (index, title, description) => {
    const updatedCard = { title, description };
    setTodoCards([
      ...todoCards.slice(0, index),
      updatedCard,
      ...todoCards.slice(index + 1),
    ]);
  };

  const handleDeleteCard = (index, status) => {
    if (status === 'todo') {
      setTodoCards(todoCards.filter((_, i) => i !== index));
    } else if (status === 'inProgress') {
      setInProgressCards(inProgressCards.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header bg-primary text-white">To-Do</div>
          <div className="card-body">
            {todoCards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                moveCard={(targetColumn) => moveCard(index, targetColumn)}
                status="todo"
                onEdit={(title, description) => handleEditCard(index, title, description)}
                onDelete={() => handleDeleteCard(index, 'todo')}
              />
            ))}
            <AddCard onAddCard={handleAddCard} />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header bg-warning">In Progress</div>
          <div className="card-body">
            {inProgressCards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                moveCard={(targetColumn) => moveCard(index, targetColumn)}
                status="inProgress"
                onEdit={(title, description) => handleEditCard(index, title, description)}
                onDelete={() => handleDeleteCard(index, 'inProgress')}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header bg-success text-white">Done</div>
          <div className="card-body">
            {doneCards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                status="done"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
