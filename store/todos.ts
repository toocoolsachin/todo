import { persistentAtom } from '@nanostores/persistent';

export interface Todo {
  id: number;
  name: string;
  done: boolean;
}

export const $todos = persistentAtom<Todo[]>('todo', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function addTodo(todo: Todo) {
  $todos.set([...$todos.get(), todo]);
}
