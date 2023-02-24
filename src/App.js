import './App.css';
import Home from './Home';
import Profile from './Profile';
import Header from './Header';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import { Account } from './Accounts';
import Status from './Status';
import Pool from './UserPool';
import { Button } from 'react-bootstrap';


function App() {
  

  const [loggedIn, setLoggedIn] = useState(false)

  const user = Pool.getCurrentUser()
  
  function handleSessionCheck(check) {
    setLoggedIn(check)
  }

  function logOut() {
    const user = Pool.getCurrentUser()
    if (user) {
        setLoggedIn(false)
        user.signOut()
    }
  }

  function handleLoginState(state) {
    setLoggedIn(state)
    console.log('am i here')
  }

  // function testAPI() {
  //   fetch('https://t6nszj6p4f.execute-api.us-east-1.amazonaws.com/dev/items', {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       id: '123',
  //       price: 12345,
  //       name: 'newitem'
  //     })
  //   })
  //   .then(resp => resp.json())
  //   .then(d => console.log(d))
  // }

  function testAPI() {
    fetch('https://t6nszj6p4f.execute-api.us-east-1.amazonaws.com/dev/items')
    .then(resp => resp.json())
    .then(d => console.log(d))
  }

  return (
    <div>
    {loggedIn ?
    <div>
    <header>
    <Header />
    <button onClick={logOut}>log out</button>
    <button onClick={testAPI}>api test</button>
  </header>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='profile' element={ <Profile/> }/>
      </Routes> </div> :
      <Account>
        <Status handleSessionCheck={handleSessionCheck}/>
        <Login handleLoginState={handleLoginState}/>
        <SignUp handleLoginState={handleLoginState}/>
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
