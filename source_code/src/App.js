import React from 'react';
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./components/Login";
import Header from "./components/Header"
import Test from "./components/test"
import CreateAccount from './components/CreateAccount';
import Home from './components/Home';
import Detail from './components/Details';

import {store} from "./store/UserSlice";
import {Provider} from "react-redux"

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/test" element={<Test />} />
            <Route path="/login" element={<CreateAccount />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
