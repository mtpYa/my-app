import { ADD_TODO } from '../actions/todos';

const initialState = [
  { text: 'Learn React' },
  { text: 'Learn Redux' },
  { text: 'Build something fun!' }
]

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { text: action.payload }
      ];
    default:
      return state
  }
}
