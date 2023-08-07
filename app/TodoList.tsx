'use client';

import { useStore } from '@nanostores/react';
import { $todos } from '@/store/todos';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = useStore($todos);
  return (
    <>
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}
