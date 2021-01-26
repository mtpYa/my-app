import { useSelector } from 'react-redux';

function useTodosSelectors() {
  const todos = useSelector((state: any) => state.todos);

  return { todos };
}

export default useTodosSelectors;
