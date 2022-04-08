import { useState, createContext } from "react";

export const SiteContext = createContext();

export default function Store(props){

  const [ mynum , setCount] = useState(0);

  function upNum(){
    setCount(prev => prev + 1);
  }
  
  function DownNum (){
    setCount(prev => prev - 1);
  }

  function MultiNum(){
    setCount(prev => prev * 2);
  }

  const value = {
    mynum , upNum , DownNum , MultiNum
  };

  return(
    <SiteContext.Provider value={value}>
     {props.children}
    </SiteContext.Provider>
  )
}