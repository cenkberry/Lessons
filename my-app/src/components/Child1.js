import { useContext } from "react";
import { stats } from "../Context";


export default function Child1(){

  const {isshowIT , setShow} = useContext(stats);
  const {isavab , setAvab} = useContext(stats);

  return(
   <div className="w-96 h-12 bg-red-500 border-2 fac fjc">
      
      {isavab ? <h1>Child 1 Avaible</h1> : <h1>Child 1 NOT AVAIBLE</h1> }
      <button className="btn btn-green mx-5" onClick={()=> setShow(!isshowIT)}>change</button>
      
   </div>
  )
}