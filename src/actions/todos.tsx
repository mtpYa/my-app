export const ADD_TODO = 'todos/add_item';
export const ADD_TODOS = 'todos/add_list';

export function addTodoItem(todoItem) {
  return {
    type: ADD_TODO,
    payload: todoItem
  };
}

export function addTodos(todos) {
  return {
    type: ADD_TODOS,
    payload: todos
  };
}

