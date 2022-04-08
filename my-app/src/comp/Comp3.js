import React from 'react';
import { SiteContext } from '../Context';

function Comp3() {

  const {counter , MultiplyCounter} = React.useContext(SiteContext);

 return (
   <div className="bg-gray-300 fac fjc flex-col p-8">
     <div>{counter}</div>
     <button className="btn btn-yellow" onClick={MultiplyCounter}>Multi</button>
   </div>
 )
}

export default Comp3;