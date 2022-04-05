import React from 'react';

export default function Joke(props){

   return(
     <div className="p-2 bg-red-300">
        { props.setup && <h3>{props.setup}</h3> }
        <p> {props.punchline}</p>
     </div>
   )
}