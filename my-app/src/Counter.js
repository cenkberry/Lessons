import React from 'react';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {arttir , azalt, sifirla , namer} from "./store/actions";

function Counter(){
  const dispatch = useDispatch();
  const {counter} = useSelector(state => state );

  return(
    <div className="text-6xl mb-3 fac fjc flex-col">
      {counter}
      <button onClick={()=> dispatch(arttir())}
      className='btn btn-green w-24'>+</button>

     <button onClick={()=> dispatch(sifirla())}
      className='btn btn-blue w-24'>RESET</button>

      <button onClick={()=> dispatch(azalt())}
      className='btn btn-red w-24'>-</button>

      <button onClick={()=> dispatch(namer())}
      className='btn btn-indigo w-24'>Name</button>

    </div>
  )

}

export default Counter;