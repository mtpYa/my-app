import { of } from 'rxjs';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodos } from '../../actions/todos';

const todos = [
  { text: 'Learn React' },
  { text: 'Learn Redux' },
  { text: 'Build something fun!' }
];

export function useFetchTodos() {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const dispatch = useDispatch();

  useEffect(
    () => {
      console.log('fetch data');
      const subscription = of(todos).subscribe((todos) => {
        dispatch(addTodos(todos));
      })

      return () => subscription.unsubscribe();
    },
    []
  );
}

