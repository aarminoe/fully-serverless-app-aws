import './App.css';
import Home from './Home';
import Profile from './Profile';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='profile' element={ <Profile/> }/>
      </Routes>
    </div>
  );
}

export default App;
