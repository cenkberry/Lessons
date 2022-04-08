import { useContext } from "react";
import { stats } from "../Context";


export default function Child2(){

  const {isshowIT , setShow} = useContext(stats);


  return(
    <div className="w-96 h-12 bg-green-500 border-2 fac fjc">
    {isshowIT ? <h1>Child 2</h1> : <h1>now working..</h1>}
    <button className="btn btn-green mx-5" onClick={()=> setShow(!isshowIT)}>change</button>
   </div>
  )
}