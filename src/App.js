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

  const [loggedIn, setLoggedIn] = useState(false)

  function handleSessionCheck(check) {
    setLoggedIn(check)
  }

  return (
    <div>
    {loggedIn ?
    <div>
    <header>
    <Header />
  </header>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='profile' element={ <Profile/> }/>
      </Routes> </div> :
      <Account>
        <Status handleSessionCheck={handleSessionCheck}/>
        <Login/>
        <SignUp/>
      </Account>
    }
    <div className="App">
      {/* <header>
        <Header />
      </header>
      <Account>
        <Status handleSessionCheck={handleSessionCheck}/>
        <Login/>
        <SignUp/>
      </Account>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='profile' element={ <Profile/> }/>
      </Routes> */}
    </div>

    </div>
  );
}

export default App;
