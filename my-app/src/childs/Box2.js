import React from 'react';
import { SiteContext } from '../Context';

export default function Box2() {

  const {mynum , upNum , downNum , multiNum , divNum , isLog} = React.useContext(SiteContext);

  return (
    <div className='fac fjc flex-col bg-red-500 text-4xl'>

    {
        isLog &&
        <div className='fac fjc flex-col bg-red-500 text-4xl'>
          <div>{mynum}</div>
            <div>
            <button className="btn btn-green"  onClick={upNum}>Up!</button>
            <button className="btn btn-red"    onClick={downNum}>Down!</button>
            <button className="btn btn-indigo" onClick={multiNum}>Multiply!</button>
            <button className="btn btn-yellow" onClick={divNum}>Divide!</button>
            </div>
        </div>


    }

    </div>
  )
};
