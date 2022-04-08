import { useContext } from "react";
import { stats } from "../Context";

export default function Child3(){
  const {isavab , setAvab} = useContext(stats);

  return(
   <div className="w-36 h-36 bg-red-500 border-2 fac fjc">
      {isavab ? <h1>Work</h1> : <h1>NOT</h1> }
   </div>
  )
}