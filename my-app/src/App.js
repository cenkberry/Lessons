import React, { useEffect , useRef , useState , useReducer } from 'react';

export default function App(){
  function reducer(state , action){

    switch(action.type){
      case "boy" : return {name: "John"}
      case "girl" : return {name: "Cecilla"}
      default : return {name: "default"}
    }
 }
  const [state , dispatch] = useReducer(reducer , { name: "default"});
   
  function boyname(){
    dispatch({type: "boy"})
  }
  
  function girlname(){
    dispatch({type: "girl"})
  }
  
  return(
    <div className="h-screen bg-gray-400 fac fjc">
       
        <div className="mr-10">{state.name}</div>
        <div onClick={boyname} className="btn btn-black">boy</div>
        <div onClick={girlname} className="btn btn-yellow">girl</div>
    </div>
  )
}