import React, { useEffect , useRef , useState } from 'react';
import Joke from './Joke';
import jokesData from './jokesData';

export default function App(){

   const jokeDiv = jokesData.map(joke => 
    {
     return <Joke 
              key={joke.id}
              setup={joke.setup}
              punchline={joke.punchline}
            />
    });


  return(
    <div className="h-screen bg-gray-400 space-y-3">
       
    {jokeDiv}
    
     
    </div>
  )
}