import React, { useState } from 'react';

function AddCard({ onAddCard }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddCard = () => {
    if (title.trim() !== '' && description.trim() !== '') {
      onAddCard(title, description);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Add New Task</h5>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddCard}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddCard;
