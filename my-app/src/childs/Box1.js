import React from 'react';
import { SiteContext } from '../Context';

export default function Box1() {

  const {mynum , isLog , loginner , logoutter} = React.useContext(SiteContext);

  return (
    <div className='fac fjc flex-col bg-green-500 text-4xl'>

      <div>
         <div onClick={loginner} className="btn btn-orange">Login!</div>
         <div onClick={logoutter} className="btn btn-black">Log Out</div>
      </div>
      {
        isLog &&
        <div>
          <div>Last number is: {mynum}</div>
        </div>
      }
    </div>
  )
};
