import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { addTodoItem } from './actions/todos';
import useTodosSelectors from './selectors/todos';
import AddNewListItemForm from './components/add-new-listitem-form';
import { useFetchTodos } from './common/services/api';

function App(): React.ReactElement {
  const { todos } = useTodosSelectors();
  const todosList = todos.map((elem, idx: number) => (
    <div key={idx}>{elem.text}</div>
  ));
  const dispatch = useDispatch();
  const inputSubmitHandler = (value) => dispatch(addTodoItem(value));

  useFetchTodos();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-content">
        {todosList}
        <div className="App-content__add-form">
          <AddNewListItemForm onInputSubmit={inputSubmitHandler}/>
        </div>
      </div>
    </div>
  );
}

export default App;
