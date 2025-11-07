'use client'

import { useState } from 'react';

// Componente hijo que recibe props
interface TodoItemProps {
  text: string;
  completed: boolean;
  onToggle: () => void;  // Callback hacia el padre
  onDelete: () => void;  // Otro callback
}

function TodoItem({ text, completed, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700">
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        className="w-5 h-5"
      />
      <span className={`flex-1 ${completed ? 'line-through text-zinc-400' : 'text-black dark:text-white'}`}>
        {text}
      </span>
      <button
        onClick={onDelete}
        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
      >
        Eliminar
      </button>
    </div>
  );
}

// Componente padre que pasa props a los hijos
export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Aprender Next.js', completed: false },
    { id: 2, text: 'Comparar con Angular', completed: true },
    { id: 3, text: 'Hacer deploy en Firebase', completed: true },
  ]);

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
        Lista de Tareas
      </h3>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          onToggle={() => toggleTodo(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
        />
      ))}

      <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded text-sm">
        <p className="text-zinc-700 dark:text-zinc-300">
          💡 <strong>Padre → Hijo:</strong> Pasa datos por props (text, completed)
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          💡 <strong>Hijo → Padre:</strong> Pasa funciones (onToggle, onDelete)
        </p>
      </div>
    </div>
  );
}
