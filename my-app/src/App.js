import React, { useEffect , useRef , useState } from 'react';
import Livediv from './Livediv';
import lives from './lives';

export default function App(){

   const artists = lives.map(artist => {
        
      return(
        <Livediv 
        key={artist.id}
        name={artist.name}
        place={artist.place}
        ticket={artist.ticket} 
        />
      )  
   });


  return(
    <div className="h-screen p-5 bg-gray-400 grid grid-cols-[1fr_1fr]">
       
      {artists}
    
    </div>
  )
}