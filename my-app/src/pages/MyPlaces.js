import React, {useState , useEffect} from 'react'

export default function MyPlaces(){
  const [places , setPlaces] = useState([]);
  const [myload , setmyload] = useState(false);

  
  // const fetchdatas = () => {
  //   fetch("https://visited-places-d78bd-default-rtdb.firebaseio.com/visitedplaces.json")
  //     .then(response => response.json())
  //     .then(response => {
  //        setPlaces(response)
  //     })
  //     .then(setmyload(!myload));
  // };
  
  //  useEffect(() => {
  //    fetchdatas();
  //  },[]);
  
   
  return(
    <div className="p-2 bg-indigo-300">
      <h1 className="text-center text-3xl mb-3">My Places</h1>
        <div className="grid grid-cols-3 gap-3">
          
        { 
           myload &&
           places.map((place) => {
            <div className="fac fjc bg-slate-100 flex-col rounded-md p-2">
               <img src={place.url} alt="" />
               <p className="text-center text-lg font-semibold">{place.city}  / {place.country} </p>
               <p className="text-center fac fje pr-2">{place.month}  / {place.year} </p>
           </div>
          })
        }

      </div>
     </div>
  )
}