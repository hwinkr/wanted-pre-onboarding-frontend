import { createContext } from 'react';
import { TodoItem } from '../types/todo-item';

// 전역으로 관리하는 상태
// - 서버로부터 가져오는 투두 리스트
// - 투두 리스트를 가져올 수 있는 함수

interface TodoState {
  todos: Array<TodoItem> | null;
  getTodoList: () => void;
}

const TodoContext = createContext<TodoState | null>(null);

export default TodoContext;
