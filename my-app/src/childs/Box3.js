import React from 'react';
import { SiteContext } from '../Context';

export default function Box3() {

  const {mynum , isLog} = React.useContext(SiteContext);

  return (
    <div className='fac fjc flex-col bg-indigo-500'>

      {
        isLog &&
        <div>
          {mynum%2 === 0 ? <div className='text-yellow-400 text-4xl'>EVEN</div> : <div className='text-red-800 text-4xl'>ODD</div>}
        </div>
      }

      { mynum > 100 && <div>Number is Bigger than 100.</div> }
    </div>
  )
};
