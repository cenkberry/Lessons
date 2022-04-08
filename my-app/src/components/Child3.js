import { useContext } from "react";
import { stats } from "../Context";

export default function Child3(){
  const {isshowIT , setShow} = useContext(stats);

  return(
    <div className="w-96 h-12 bg-blue-500 border-2 fac fjc">
        <h1>Child 3</h1>
        <button className="btn btn-green mx-5" onClick={()=> setShow(!isshowIT)}>change</button>
   </div>
  )
}