import React,{useState,createContext} from 'react';

export const SiteContext = createContext();


export default function Store(props){

  const [mynum , setNum] = useState(0);
  const [isLog , setLog] = useState(false);
  

  function upNum(){
    setNum(prev => prev + 1);
  }
  function downNum(){
    setNum(prev => prev - 1);
  }
  function multiNum(){
    setNum(prev => prev * 2);
  }
  function divNum(){
    setNum(prev => prev / 2);
  }
  function loginner(){
    setLog(true)
  }
  function logoutter(){
    setLog(false)
  }

  const value = {
    mynum , upNum , downNum , multiNum , divNum , isLog , loginner , logoutter
  };

  return(
    <SiteContext.Provider value={value}>
     {props.children}
    </SiteContext.Provider>
  )

}