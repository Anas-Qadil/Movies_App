import React from 'react';
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./components/Login";
import Header from "./components/Header"
import Test from "./components/test"
import CreateAccount from './components/CreateAccount';


function App() {
  console.log(Test);
  return (

    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/NewAccount" element={<CreateAccount />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
