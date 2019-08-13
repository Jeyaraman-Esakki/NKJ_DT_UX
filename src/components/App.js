import React, {Component} from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";

import '../assets/App.css';
import TagManagerComponent from './TagManagerComponent';
 

class App extends Component{
  render(){
    return(
     <div className="fluid">
       <BrowserRouter>
          <Switch>
          <Route exact path="/" component={ TagManagerComponent } />
          <Route exact path="/TagManager" component={ TagManagerComponent } />
          </Switch>
       </BrowserRouter>
       
     </div>
    );
  }
}

export default App;
