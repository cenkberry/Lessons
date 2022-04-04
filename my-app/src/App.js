import React, { useEffect , useRef , useState } from 'react';

export default function App(){
  
   let box1  = React.useRef();
   let box2  = React.useRef();
   let box3  = React.useRef();

   function runner(){
      let x1 = box1.current.value;
      let x2 = box2.current.value;

     box3.current.textContent = +x1 + +x2;
     box3.current.style.color = "green";
   }


  return(
    <div className="h-screen bg-gray-400 p-20 space-y-3">
       
       <input type="text" ref={box1}/>
       <br />
       <input type="text" ref={box2}/>


       <div className='fac fjc text-5xl' ref={box3}></div>

       <button onClick={runner}>Click</button>

    </div>
  )
}