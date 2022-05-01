import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './store';

function App() {


  return(
    <Provider store={store}>
    <div className="h-screen flex items-center justify-center flex-col bg-gray-300">
       <Counter />
    </div>
    </Provider>
  );
}


export default App;