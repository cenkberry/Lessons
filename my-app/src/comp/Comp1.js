import React from'react';
import { SiteContext } from '../Context';

function Comp1() {

  const {counter , IncreaseCounter} = React.useContext(SiteContext);

  return (
    <div className="bg-gray-300 fac fjc flex-col p-8">
      <div>{counter}</div>
      <button className="btn btn-green" onClick={IncreaseCounter}>Up</button>
    </div>
  )
}

export default Comp1;