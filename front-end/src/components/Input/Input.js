import React from 'react'
import './Input.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../../features/todoSlice'


const Input = () => {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    const addTodo = () =>{

      console.log(`Add ${input}`)
      
      dispatch(saveTodo({        
        description : input,
        state:false,
        id:Date.now(),
      })) 
    }

    return (
    <div className='input'>      
        <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
        <button onClick={addTodo}>Add</button>
    </div>    
  )
}
export default Input;