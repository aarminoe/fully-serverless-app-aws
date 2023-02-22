import './App.css';
import Home from './Home';
import Profile from './Profile';
import Header from './Header';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CognitoUserPool } from "amazon-cognito-identity-js"


function App() {

  const [emil, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const poolData = {
    UserPoolId: 'us-east-1_lxiAnHS7a',
    ClientId: '18u1sgrmds02k5tdc36fgipehp'
  }

  const UserPool = new CognitoUserPool(poolData)

  const attributeList = [];

  function onSubmit(e) {
    e.preventDefault()
    UserPool.signUp(emil, pass, attributeList, null, (err, data) => {
        if (err) console.error(err)
        console.log(data)
    })
  }
  console.log(emil)

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div>
        <form onSubmit={onSubmit}>
          <input value={emil} onChange={e => setEmail(e.target.value)}/>
          <input value={pass} onChange={e => setPass(e.target.value)}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='profile' element={ <Profile/> }/>
      </Routes>
    </div>
  );
}

export default App;
