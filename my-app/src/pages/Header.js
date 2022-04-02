import React from 'react';
import {Link} from "react-router-dom";


export default function Header(){
   
  return(
    <nav className="grid grid-cols-2 bg-indigo-600 py-2">
           <h1 className="fac pl-6 text-xl font-medium text-sky-200 ">My Visited Places</h1>
           <div className="space-x-3 fac fje pr-4">
             <Link className="btn btn-green" to="/addplace">Add Place</Link>
             <Link className="btn btn-yellow" to="/">My Places</Link>
           </div>
    </nav>
  )
}