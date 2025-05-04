"use client";

import { useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};


export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
const [editedTitle, setEditedTitle] = useState("");
const openEditModal = (todo: Todo) => {
    setEditingTodo(todo);
    setEditedTitle(todo.title);
  };

  const saveEdit = () => {
  if (!editingTodo) return;

  const updated = todos.map((todo) =>
    todo.id === editingTodo.id ? { ...todo, title: editedTitle } : todo
  );

  setTodos(updated);
  setEditingTodo(null);
};


  const addTodo = () => {
    if (!newTodo.trim()) return;

    const newTask: Todo = {
      id: Date.now(),
      title: newTodo,
      completed: false,
    };
    setTodos([newTask, ...todos]);
    setNewTodo("");
  };
  const deleteTodo = (id: number) => {
    if (confirm("Are you sure you want to delete this task?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };
  

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">My Tasks</h2>

        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border rounded"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            onClick={addTodo}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        <ul>
        {editingTodo && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
    <div className="bg-white p-6 rounded shadow w-80">
      <h3 className="text-xl font-semibold mb-4">Edit Task</h3>
      <input
        type="text"
        className="w-full px-4 py-2 border rounded mb-4"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => setEditingTodo(null)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Cancel
        </button>
        <button
          onClick={saveEdit}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Save
        </button>
      </div>
    </div>
  </div>
)}

          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center border-b py-2"
            >
              <span className={todo.completed ? "line-through text-gray-500" : ""}>
                {todo.title}
              </span>
              <div className="space-x-2">
                <button  onClick={() => openEditModal(todo)} className="text-sm text-green-600 hover:underline">Edit</button>
                <button   onClick={() => deleteTodo(todo.id)} className="text-sm text-red-600 hover:underline">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
