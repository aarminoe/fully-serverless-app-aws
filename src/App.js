import './App.css';
import Home from './Home';
import Profile from './Profile';
import Header from './Header';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import { Account } from './Accounts';
import Status from './Status';


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Account>
        <Status/>
        <Login/>
        <SignUp/>
      </Account>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='profile' element={ <Profile/> }/>
      </Routes>
    </div>
  );
}

export default App;
