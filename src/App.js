import React from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Preview from './Preview';
import { useSelector,useDispatch } from 'react-redux';


function App() {
  const user = useSelector(useSelector);
  const dispatch = useDispatch();
  return (
    <div className="App">
  <Router>
    {!user ?(
      <Login/>
    ):(
      <div className="app_body">
        <Switch>
          <Route path="/preview">
            <Preview />
          </Route>
        <Route exact path="/">
        <WebcamCapture />
        </Route>
        </Switch>
   </div>
    )}
    
    </Router>
    </div>
  );
}

export default App;
