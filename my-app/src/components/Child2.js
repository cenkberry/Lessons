import { useContext } from "react";
import { stats } from "../Context";


export default function Child2(){

  const {isavab , setAvab} = useContext(stats);

  return(
   <div className="w-96 h-24 bg-red-500 border-2 fac fjc">
      {isavab ? <h1>Work</h1> : <h1>NOT</h1> }
   </div>
  )
}