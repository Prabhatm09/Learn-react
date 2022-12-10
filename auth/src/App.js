import { Home } from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import { LoginForm } from "./components/LoginForm";
import { useSelector } from "react-redux";

import Counter from './components/Counter';

import "./App.css";


// steps - 
// list of registered users - 
// login form - email, pass
// once logged in, redirect him to the dashboard
// if not logged in, redirect him to the home page


// requirements-
// logged in user information should be saved in redux

function App() {

  const LoggedInUser = useSelector((state) => {
    return state.LoggedInUsers
  })

  return (
    <>
      {
        LoggedInUser ?
          <Dashboard /> :
          <>
            <Home />
            <LoginForm />
          </>
      }
      <p>
        ----------------------------------------------------------
      </p>
      <Counter />
    </>
  )
}

export default App;