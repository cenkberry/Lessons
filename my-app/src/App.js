import Box1 from "./childs/Box1";
import Box2 from "./childs/Box2";
import Box3 from "./childs/Box3";

function App() {



  return(
     <div className='h-screen grid grid-cols-3 bg-gray-200'>

      <Box1 />
      <Box2 />
      <Box3 />

     </div>
  )
}


export default App;