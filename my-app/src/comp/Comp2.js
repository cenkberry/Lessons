import React from 'react';
import { SiteContext } from '../Context';

function Comp2() {
 
  const {mynum , DownNum} = React.useContext(SiteContext);

 return (
   <div className="bg-gray-300 fac fjc flex-col p-8">
     <div>{mynum}</div>
     <button className="btn btn-red" 
     onClick={DownNum}>Down</button>
   </div>
 )
}
export default Comp2;