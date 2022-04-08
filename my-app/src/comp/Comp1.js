import React from'react';
import { SiteContext } from '../Context';

function Comp1() {

  const {mynum , upNum} = React.useContext(SiteContext);

  return (
    <div className="bg-gray-300 fac fjc flex-col p-8">
      <div>{mynum}</div>
      <button className="btn btn-green" 
      onClick={upNum}>Up</button>
    </div>
  )
}

export default Comp1;