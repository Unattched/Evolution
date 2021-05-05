import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import LoginPage from "./LoginPage";
import OrderPage from "./public/OrderPage";
const App: React.FC = () => {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/" component={LoginPage}/>

                <Route exact path="/orderPage" component={OrderPage}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
