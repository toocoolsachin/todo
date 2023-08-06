import { atom } from 'nanostores';

export interface Todo {
  id: number;
  name: string;
  done: boolean;
}

export const $todos = atom<Todo[]>([]);

export function addTodo(todo: Todo) {
  $todos.set([...$todos.get(), todo]);
}
