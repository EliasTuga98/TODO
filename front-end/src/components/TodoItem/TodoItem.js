import React from 'react'
import Checkbox from '@mui/material/Checkbox';


export const TodoItem = ({description,state,id}) => {
  const [checked, setChecked] = React.useState(true);
  const handleCheck = () =>{
    
  }
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className='todoItem'>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
     <p className={state && 'todoItem--sate'}>{description}</p>
    </div>
    
  )
}
export default TodoItem