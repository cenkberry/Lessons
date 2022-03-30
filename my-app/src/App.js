import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';


function App() {
  
  return(
    <BrowserRouter>
       <div className="page h-screen">
            <nav className='bg-red-700 fac fjc'>
              <Link to="/" className="btn btn-green">Home</Link>
              <Link to="/about" className="btn btn-blue">About</Link>
            </nav>
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
       </div>  
    </BrowserRouter>
  );
}

export default App;