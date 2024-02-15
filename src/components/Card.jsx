import React, { useState } from "react";

function Card({ title, description, moveCard, status, onDelete, onEdit }) {
  const isToDo = status === "todo";
  const isInProgress = status === "inProgress";
  const isDone = status === "done";

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleMoveCard = () => {
    if (isToDo) {
      moveCard("inProgress");
    } else if (isInProgress) {
      moveCard("done");
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(editedTitle, editedDescription);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
            <button className="btn btn-success" onClick={handleSaveEdit}>
              Save
            </button>
          </div>
        ) : (
          <div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        )}
        {!isDone && (
          <div>
            <button className="btn btn-warning" onClick={handleMoveCard}>
              {isToDo ? "Move to In Progress" : "Move to Done"}
            </button>
            <button className="btn btn-primary" onClick={handleEdit}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
