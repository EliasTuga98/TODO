import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from './components/Input'
import { TodoItem } from './components/TodoItem';
import { Provider } from 'react-redux';
import ItemProvider from './features/ItemProvider'
import store from './store';

const todolist=[{
  id:Date.now(),
  description : 'todo',
  state:false,
  },
  {
    id:Date.now(),
  description : 'todo',
  state:true,
  }

]

function App() {

  return (
    <Provider store={store} >    
    <div className="App">
      <div className="App__container">
        <div className="app__todocontainer">
          {todolist.map(item=>(
          <TodoItem 
          description={item.description}
          state={item.state}
          id={item.id}/>
            ))}
        </div>
        <Input/>
      
       
      </div>
    </div>
    </Provider>
  );
}

export default App;
