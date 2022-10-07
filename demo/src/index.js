import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { LoginForm  } from './components/LoginForm';
// import { Form } from "./components/Form"
// import { ErrorBoundary  } from './components/ErrorBoundry';
// import { Parent } from './components/Parent';
// import { InstaMain } from "./components/InstaMain"
// import { InstUI } from './components/InstUI';
// import { Aapp } from './Aapp';
// import { Parent } from './components/Parent';
// import { IncDes } from './components/IncDes';
// import { Greeting } from './components/Greeting';
// import { Names } from './components/Names';
import reportWebVitals from './reportWebVitals';
// import { Lifecycle } from './components/Lifecycle';
import { InstUI } from './components/InstUI';
// import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Aapp  name="Harry potter - self closed tag" />
    <Aapp name="Harry potter - normal tag">
      <h2>head inside tag app</h2>
    </Aapp> */}
    {/* <Parent /> */}
    {/* < IncDes /> */}
    {/* <Greeting /> */}
    {/* <Names /> */}
    <InstUI />
    {/* <Lifecycle /> */}
    {/* <Parent name={"Prabhat"} /> */}
    {/* < InstaMain /> */}
{/* <LoginForm /> */}
{/* <Form /> */}
{/* <ErrorBoundary /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
