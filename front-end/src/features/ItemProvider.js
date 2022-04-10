import * as React from 'react';
import { useState ,createContext} from 'react'

const ItemContext = createContext();
const ItemProvider = ({children}) =>{
    const [description,setDescripton] = useState('')
    const [state,setState] = useState('')
    const done = () => setState(true);
    return(
        <ItemContext.Provider value={{description,state,done}}>

        </ItemContext.Provider>
    )
  
}   
export default ItemProvider;