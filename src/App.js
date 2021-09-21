import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Homepage from './components/homepage/homepage.component';

const page1 = () => {
  return ( 
    <div>
      <h1>page 1 of the app</h1>
    </div>
  )
}


function App() {
  return (
    <div>
      <Switch>
      <Route  path='/' component={Homepage}/>
      <Route  path='/1' component={page1}/>
      </Switch>
      
    </div>
  );
}

export default App;
