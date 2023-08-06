'use client';

import { useStore } from '@nanostores/react';
import { $todos } from '@/store/todos';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = useStore($todos);

  const handleToggle = (id: number) => {
    const mapped = todos.map((todo) => {
      return todo.id === id ? { ...todo, done: !todo.done } : { ...todo };
    });
    return mapped;
  };

  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}
