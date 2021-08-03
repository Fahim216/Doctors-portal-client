import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from "./components/AllPatients/AllPatients/AllPatients";


export const UserContext =createContext();


function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
   <Router>
     <Switch>
     <Route exact path="/home">
      <Home/>
      
       </Route>
       <Route path="/doctor/appointment">
         <Appointment></Appointment>
       </Route>
       <Route path="/dashboard/appointment">
         <Dashboard/>
       </Route>
       <Route path="/login">
         <Login></Login>
       </Route>
    <Route path="/doctor/patients">
      <AllPatients></AllPatients>
    </Route>
     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
