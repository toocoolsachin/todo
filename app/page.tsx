import { Container, FormGroup, Typography } from '@mui/material';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

export default function Home() {
  return (
    <Container
      maxWidth="sm"
      className="flex min-h-screen flex-col items-center flex-start p-24"
    >
      <Typography variant="h2" component="h1" className="mb-16">
        Todo App
      </Typography>
      <AddTodo />
      <FormGroup>
        <TodoList />
      </FormGroup>
    </Container>
  );
}
