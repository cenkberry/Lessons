import React,{useState} from 'react';

export default function App() {

   const [myarr , setArr] = useState([]);
   const [inputItem , setInput] = useState("");

   function Additem(){
     setArr(myarr => [...myarr, inputItem])
   }

   function clearItems(){
     setArr([])
   }

  return(
    <div className="h-screen fac fjc flex-col bg-gray-300">
    {
       myarr.map((todo,index)=>{
         return(
           <div key={index} className="bg-red-300 p-3 my-3">
            {todo}
           </div>
         )
       })
     }
     <input type="text" onClick={(e)=>{e.target.value = ""}} onChange={(e)=>{setInput(e.target.value)}} />
     <button className="btn btn-green" onClick={Additem}>Add</button>
     <button className="btn btn-red" onClick={clearItems}>Clear Items</button>
    </div>
  )
}