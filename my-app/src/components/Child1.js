import { useContext } from "react";
import { stats } from "../Context";


export default function Child1(){

  const {isavab , setAvab} = useContext(stats);

  const users = [
    {
      name: "cenk"
    },
    {
      name: "rana"
    },
    {
      name: "rayen"
    }
  ]

  return(
   <div className="w-24 h-60 bg-red-500 border-2 fac fjc flex-col">
      {isavab ? users.map( user => <h1 key={user.id}className="my-2">{user.name}</h1> ) : <h1>NOT</h1> }
   </div>
  )
}