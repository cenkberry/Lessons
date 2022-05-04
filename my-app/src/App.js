import Box1 from "./childs/Box1";
import Box2 from "./childs/Box2";

function App() {

  

  return(
     <div className='h-screen grid grid-cols-2 bg-gray-200'>

      <Box1 />
      <Box2 />

     </div>
  )
}


export default App;