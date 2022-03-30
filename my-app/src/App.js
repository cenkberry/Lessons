import {Route , Switch} from 'react-router-dom';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  
  return(
    <div>
      <Switch>
        <Route path='/'>
        <Page1 />
        </Route>

        <Route path='/page2'>
        <Page2 />
        </Route>

        <Route path='/page3'>
        <Page3 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
