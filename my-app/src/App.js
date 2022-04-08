import React from 'react';
import { useEffect , useRef , useState , useReducer} from 'react';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import Child3 from './components/Child3';

import {stats} from './Context';


export default function App(){
    
   const [isshowIT , setShow] = useState(false);
   const [isavab , setAvab] = useState(false);

    return(
      <div className="h-screen bg-gray-300 fac fjc flex-col">
      <stats.Provider value={{isshowIT , setShow , isavab , setAvab}}>
       <Child1 />
       <Child2 />
       <Child3 />
       <button className="btn btn-green" onClick={()=> setAvab(!isavab)}>Logout</button>
       </stats.Provider>
      </div>
    )
}