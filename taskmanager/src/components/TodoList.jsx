import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import Todo from './Todo';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
    status: 'todo',
  });

  const handleAddTodo = () => {
    if (newTodo.title.trim() !== '') {
      dispatch(addTodo({
        id: Date.now(),
        title: newTodo.title,
        description: newTodo.description,
        status: newTodo.status,
      }));
      setNewTodo({
        title: '',
        description: '',
        status: 'todo',
      });
    }
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          className="border p-1 mr-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={newTodo.description}
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
          className="border p-1 mr-2"
        />
        <select
          value={newTodo.status}
          onChange={(e) => setNewTodo({ ...newTodo, status: e.target.value })}
          className="border p-1"
        >
          <option value="todo">Todo</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button onClick={handleAddTodo} className="bg-green-500 text-white px-2 py-1 ml-2">
          Add Todo
        </button>
      </div>
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
