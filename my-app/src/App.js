import React from 'react';
import { useEffect , useRef , useState , useReducer , createContext} from 'react';
import Child from './components/Child';

const themes = {
  dark:{
    backgroundColor:"#383838",
    color:"#fff"
  },
  light:{
    backgroundColor:"#fff",
    color:"#000"
  }
}

export const ThemeContext = createContext(themes.light);


const App = ()=> {

   const [mode , setmode ] = useState(themes.light);

   const togglemode = ()=>{
     if(mode === themes.dark){
       setmode(themes.light)
     }
     else{
       setmode(themes.dark)
     }
   }

    return(
      <div className="h-screen bg-gray-300 fac fjc flex-col">
        <button onClick={togglemode} className="btn btn-gray mb-3">{mode === themes.dark ? "Dark mode" : "Light mode"}</button>

      <ThemeContext.Provider value={mode}>
         <Child />
      </ThemeContext.Provider>

      </div>
    )
}
export default App;