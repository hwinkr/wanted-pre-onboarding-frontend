import { TodoItem } from '../../types/todo-item';
import http from '../http';

export const getTodos = async (): Promise<TodoItem[] | null> => {
  const getTodoResult = await http.get('/todos');
  if (!getTodoResult.data) {
    return null;
  }
  return getTodoResult.data;
};

export const postTodo = async (todo: string): Promise<void | string> => {
  const postTodoResult = await http.post('/todos', { todo });

  if (postTodoResult.status !== 201) {
    return '투두 리스트를 생성하는 도중 문제가 발생했습니다';
  }
};

export const putTodo = async (
  id: number,
  todo: string,
  isCompleted: boolean,
): Promise<void | string> => {
  const putTodoResult = await http.put(`/todos/${id}`, { todo, isCompleted });

  if (putTodoResult.status !== 200) {
    return `${todo}를 수정하는 도중 문제가 발생했습니다.`;
  }
};

export const deleteTodo = async (id: number): Promise<string | void> => {
  const deleteTodoResult = await http.delete(`/todos/${id}`);

  if (deleteTodoResult.status !== 204) {
    return `삭제하는 도중 문제가 발생했습니다. 나중에 다시 시도해주세요.`;
  }
};
