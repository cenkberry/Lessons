import React from 'react';
import Store from './Context';
import Comp1 from './comp/Comp1';
import Comp2 from './comp/Comp2';
import Comp3 from './comp/Comp3';

export default function App(){
     
    return(
      <Store>
        <div className="h-screen bg-gray-500 fac fjc flex-row space-x-4"> 
          <Comp1 />
          <Comp2 />
          <Comp3 />
        </div>
      </Store>
    )
}