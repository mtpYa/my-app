export const ADD_TODO = 'todos/add';

export function addTodoItem(todoItem) {
  return {
    type: ADD_TODO,
    payload: todoItem
  };
}
