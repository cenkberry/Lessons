import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ErrorPage from './ErrorPage';
import Header from './stabil/Header';

function App() {
  return(
    <BrowserRouter>
          <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>

          <Header />
    </BrowserRouter>
  );
}

export default App;