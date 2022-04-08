import { useState, createContext } from "react";

export const SiteContext = createContext();


 export default function Store(props){

  const [counter , setCount] = useState(0);
  
  function IncreaseCounter(){
    setCount(prev => prev +1)
  }
  
  function DecreaseCounter (){
    setCount(prev => prev -1)
  }

  function MultiplyCounter(){
    setCount(prev => prev * 2)
  }

  const value = {
    counter,
    IncreaseCounter,
    DecreaseCounter,
    MultiplyCounter
  };

  return(
    <SiteContext.Provider value={value}>
     {props.children}
    </SiteContext.Provider>
  )
}