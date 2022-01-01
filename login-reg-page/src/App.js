import React,{useState} from 'react';  
import logo from './logo.svg';  
import './App.css';  
import {NaviBar} from './NaviBar';
import {Login} from './Login';  
import {Reg} from './Reg';  
import {Dashboard} from './Dashboard'; 
import {FieldOper} from './FieldOper';  
import {SME} from './SME'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';   
import ProtectedRoute from './ProtectedRoutes';
function App() {
  return (  
    <Router>       
        <Routes>
          <Route path='/' element={<NaviBar/>} exact/>
        </Routes> 
        <Routes>
          <Route path='/Login' element={<Login/>} />    
          <Route path='/Reg' element={<Reg/>} /> 
        </Routes> 
        <Routes>
            <Route exact path='/FieldOper' element={<FieldOper/>} />     
            <Route path='/SME' element={<SME/>} />  
        </Routes>
    </Router> 
    
      
  );  
}  
 
export default App;

