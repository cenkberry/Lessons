import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MyPlaces from './MyPlaces';
import AddPlace from './AddPlace';
import Header from './Header';


function App() {
  return(
        <BrowserRouter>
        <Header />
           <Routes>
               <Route path="/" element={<MyPlaces />} />
               <Route path="/addplace" element={<AddPlace />} />
           </Routes>
        </BrowserRouter>
  )
}

export default App;