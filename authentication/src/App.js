import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import Counter from './components/Counter';
import { useSelector } from 'react-redux';

function App() {
  const  loggedInUser  = useSelector((state)=> {
    return state.auth.loggedInUser
  })
  return (
    <>
    {
      loggedInUser ?  <Dashboard/> : <><Home/>
      <LoginForm/></>
    }
    <Counter />
      
    </>
  );
}

export default App;
