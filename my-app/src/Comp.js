import React from 'react';

export default function Comp(props){

  const [deleteStat , setDel] = React.useState(true);

  function changeName(){
    setDel(!deleteStat);
  }

  return(
     <div className="bg-green-500 border-2 fac fjc flex-col">
     
      { deleteStat &&
          <div>
              <div>{props.user}</div>
              <div>{props.email}</div>
              <div>{props.phone}</div>
          </div>
      }
      <button onClick={changeName} className="btn btn-black mt-2">Delete User</button>
     </div>
  )
}