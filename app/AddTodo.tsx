'use client';

import { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { addTodo, $todos } from '@/store/todos';

export default function AddTodo() {
  const [todo, setTodo] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const newTodo = {
    ...$todos.get(),
    id: $todos.get().length,
    name: todo,
    done: false,
  };

  return (
    <Box
      component="form"
      className="flex items-center gap-2 mb-8"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(newTodo);
        setTodo('');
      }}
    >
      <TextField size="small" value={todo} onChange={handleChange} />
      <Button
        type="submit"
        size="large"
        className="bg-green-500 text-white outline-none hover:bg-green-400 hover:text-gray-900"
      >
        Add Todo
      </Button>
    </Box>
  );
}
