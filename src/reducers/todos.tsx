import { ADD_TODO, ADD_TODOS } from '../actions/todos';

const initialState = [];

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { text: action.payload }
      ];
    case ADD_TODOS:
      return [
        ...action.payload
      ];
    default:
      return state
  }
}
