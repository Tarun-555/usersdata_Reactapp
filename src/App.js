import React from "react";
import "./App.css";
import {Switch,Route} from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import UserData from "./components/UserData/UserData";

function App() {
  return (
    <div className="App">
       <Switch>
         <Route path="/userdata" component={UserData} />
         <Route path="/" component={Homepage} />
       </Switch>
    </div>
  );
}

export default App;
