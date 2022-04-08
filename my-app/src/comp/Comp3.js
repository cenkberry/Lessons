import React from 'react';
import { SiteContext } from '../Context';

function Comp3() {

  const {mynum , MultiNum} = React.useContext(SiteContext);

 return (
   <div className="bg-gray-300 fac fjc flex-col p-8">
     <div>{mynum}</div>
     <button className="btn btn-yellow" 
     onClick={MultiNum}>Multi</button>
   </div>
 )
}

export default Comp3;