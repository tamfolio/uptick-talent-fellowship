import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../redux/todoSlice';

const Todo = ({ id, title, description, status }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedStatus, setEditedStatus] = useState(status);

  const handleUpdate = () => {
    dispatch(updateTodo({
      id,
      title: editedTitle,
      description: editedDescription,
      status: editedStatus,
    }));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="flex flex-col mb-4">
      {isEditing ? (
        <div className="flex items-center mb-2">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="border p-1 mr-2"
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="border p-1 mr-2"
          />
          <select
            value={editedStatus}
            onChange={(e) => setEditedStatus(e.target.value)}
            className="border p-1"
          >
            <option value="todo">Todo</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <button onClick={handleUpdate} className="bg-blue-500 text-white px-2 py-1 ml-2">
            Save
          </button>
        </div>
      ) : (
        <div className="flex items-center mb-2">
          <div>
            <strong>Title:</strong> {title}
          </div>
          <div className="ml-2">
            <strong>Description:</strong> {description}
          </div>
          <div className="ml-2">
            <strong>Status:</strong> {status}
          </div>
          <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-2 py-1 ml-2">
            Edit
          </button>
          <button onClick={handleDelete} className="bg-red-500 text-white px-2 py-1 ml-2">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;
