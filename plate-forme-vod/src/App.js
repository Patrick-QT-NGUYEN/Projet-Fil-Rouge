import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import HomeScreen from './Components/HomeScreenComponent/HomeScreen';
import LoginScreen from './Components/LoginScreenComponent/LoginScreen';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <LoginScreen/>
        </BrowserRouter>
    </div>
  );
}

export default App;
