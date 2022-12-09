import { Home } from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import { LoginForm } from "./components/LoginForm";
import { useSelector } from "react-redux";

import "./App.css";



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
    </>
  )
}

export default App;