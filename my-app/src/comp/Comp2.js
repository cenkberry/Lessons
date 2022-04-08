import React from 'react';
import { SiteContext } from '../Context';

function Comp2() {
 
  const {counter , DecreaseCounter} = React.useContext(SiteContext);

 return (
   <div className="bg-gray-300 fac fjc flex-col p-8">
     <div>{counter}</div>
     <button className="btn btn-red" onClick={DecreaseCounter}>Down</button>
   </div>
 )
}
export default Comp2;