import React from "react";
import "./topbar.css";
import  {Route, BrowserRouter as Router, Switch,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../../pages/home/Home';
import Dashboard from '../../Dashboard';
import FirstTimeRegister from '../../pages/Register/FirstTimeRegister';
import LeaseHolderForm from '../../pages/Register/LeaseHolder';
import Occupants from '../../pages/Register/Occupants';
import Login from '../../pages/login/Login';
import About from '../../pages/about/About';


export default function Topbar() {
  return (
    <div >
      <div >
      <Router>
      <Switch>
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bglight">
      <Link to="/" class="nav-link"> Find your Rommates </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
            <Link to="/home" class="nav-link"> Home </Link>
            </li>
            <li class="nav-item active">
            <Link to="/about" class="nav-link"> About </Link>
            </li>
            <li class="nav-item">
            <Link to="/register" class="nav-link"> Register </Link>
            </li>
            <li class="nav-item">
            <Link to="/login" class="nav-link"> Login </Link>
            </li>
          </ul>
        </div>
      </nav>
    
    <Route path = "/" exact component={Home} > <Home/>  </Route>
    <Route path = "/home" component={Home} > <Home/>  </Route>
    <Route path = "/dashboard" component={Dashboard}  > <Dashboard/> </Route>
    <Route path = "/register"  > <FirstTimeRegister/> </Route>
    <Route path = "/leaseholder"  > <LeaseHolderForm/> </Route>
    <Route path = "/occupant"  > <Occupants/> </Route>
    <Route path = "/login"  > <Login/> </Route>
    <Route path = "/about"  > <About/> </Route>
    
    </div>
      </Switch>
    </Router>
    </div>
    </div>
  );
}








