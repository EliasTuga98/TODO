import './App.css';
import * as React from 'react';
import Input from './components/Input/Input'
import { TodoItem } from './components/TodoItem/TodoItem';
import { Provider,useSelector } from 'react-redux';
import store from './store';
import { selectTodoList } from './features/todoSlice';

function App() {  
  const todolist = useSelector(selectTodoList);
  return (
          
    <div className="app">
      <h1>To do List</h1>
      <div className="app__container">
        <div className="app__todocontainer">
          {
          todolist.map(item=>(
          <TodoItem 
          description={item.description}
          state={item.state}
          id={item.id}/>
            ))
            }
        </div>      
       <Input/>
      </div>
    </div>  
  );
}

export default App;
