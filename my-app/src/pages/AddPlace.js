import { useRef , useEffect} from "react";

export default function AddPlace(){

  const imgurl = useRef();
  const city = useRef();
  const country = useRef();
  const month = useRef();
  const year = useRef();

  let visitedPlace

  function changer(event){
     event.preventDefault();
     
     const entImgUrl  = imgurl.current.value;
     const entCity    = city.current.value;
     const entCountry = country.current.value;
     const entMonth   = month.current.value;
     const entYear    = year.current.value;

     visitedPlace = {
       url : entImgUrl,
       city: entCity,
       country: entCountry,
       month: entMonth,
       year : entYear
     }
  }

  function sendform(){
    fetch(
      'https://visited-places-d78bd-default-rtdb.firebaseio.com/visitedplaces.json',
      {
        method : 'POST',
        body: JSON.stringify(visitedPlace),
        headers: {
          "Content-Type": 'application-json'
        }
      }
    );
  }
  
   useEffect(() => {
    sendform();
   }, []);
   
  return(
    <div className="p-2 bg-indigo-300">
      <h1 className="text-center text-3xl my-3">Add New Place</h1>
  
          <form className="fac fjc flex-col" onChange={changer}>
     
          <div className="bg-slate-50 pt-5 pb-2 px-24">
            <label htmlFor="imgurl">Place Url:</label><br />
            <input className="border-2 px-2" type="url" required id="imgurl" ref={imgurl}/>
          </div>

          <div className="bg-slate-50 py-2 px-24">
            <label htmlFor="city">City:</label><br />
            <input className="border-2 px-2" type="text" required id="city" ref={city}/>
          </div>

          <div className="bg-slate-50 py-2 px-24">
            <label htmlFor="country">Country:</label><br />
            <input className="border-2 px-2" type="text" required id="country" ref={country}/>
          </div>

          <div className="bg-slate-50 py-2 px-24">
            <label htmlFor="month">Month:</label><br />
            <input className="border-2 px-2" type="text" required id="month" ref={month}/>
          </div>

          <div className="bg-slate-50 pb-5 pt-2 px-24">
            <label htmlFor="year">Year:</label><br />
            <input className="border-2 px-2"type= "text" required id="year" ref={year}/>
          </div>

          <button onClick={sendform}
          className="btn btn-green mt-3">Add Place</button>
        
          </form>
     </div>
  )
}