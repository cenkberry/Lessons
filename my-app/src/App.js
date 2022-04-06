import React from 'react';
import { useEffect , useRef , useState , useReducer} from 'react';

export default function App(){
   
   const messages = ["LinkedIn : merhaba bla blaaaaaaaaaaaaaaaaaaa", "Facebook : merhaba bla bla", "Gmail : merhaba bla bla"];


    return(
      <div className="h-screen bg-blue-300 fac fjc flex-col">
         <div className="relative my-2">
          <img className="w-16"src="http://cdn.onlinewebfonts.com/svg/img_519882.png" alt="" />
          <div className="badge">{messages.length}</div>
         </div>
      
       <div className="p-2 bg-gray-400">
       {
         messages.map( message =>{
           return(
             <div className="my-2 p-2 bg-red-500">{message}</div>
           )
         })
       }
       </div>

      </div>
    )
}
