import React from 'react';
import { Provider } from 'react-redux';
import { Counter , Buttons } from './components/index';
import store from './store';

function App() {


  return(
    <Provider store={store} >

       <Counter />
       <Buttons />

    </Provider>
  );
}


export default App;