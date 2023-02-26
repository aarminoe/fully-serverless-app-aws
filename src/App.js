import './App.css';
import Home from './Home';
import Header from './Header';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import { Account } from './Accounts';
import Status from './Status';
import Pool from './UserPool';
import { Button } from '@mui/material';
import BlogFeed from './BlogFeed';
import LoginScreen from './LoginScreen';

function App() {
  

  const [loggedIn, setLoggedIn] = useState(false)
  const [blogPosts, setBlogPosts] = useState(null)

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

  useEffect(() => {
    fetch('https://t6nszj6p4f.execute-api.us-east-1.amazonaws.com/dev/items')
    .then(resp => resp.json())
    .then(d => setBlogPosts(d.reverse()))
  }, [])

  function onHandleNewPostState(newPost, newBlog, setNewBlog) {
    const newPostList = [...blogPosts.reverse(), {blog:newBlog}]
    setBlogPosts(newPostList.reverse())
    setNewBlog('')
  }



  return (
    <div>
    {loggedIn ?
    <div>
    <header>
    <Header />
    <Button className='logout-btn' onClick={logOut}>log out</Button>
  </header>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='blogs' element={ <BlogFeed blogPosts={blogPosts} onHandleNewPostState={onHandleNewPostState}/>}/>
      </Routes> </div> :
      <Account>
        <LoginScreen handleLoginState={handleLoginState} handleSessionCheck={handleSessionCheck}/>
      </Account>
    }
    </div>
  );
}

export default App;
