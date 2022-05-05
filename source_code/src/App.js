import React from 'react';
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./components/Login";
import Header from "./components/Header"
import Test from "./components/test"
import CreateAccount from './components/CreateAccount';
import Home from './components/Home';
import Detail from './components/Details';
import Recommended from './api/Recommanded';

import {store} from "./store/UserSlice";
import {Provider} from "react-redux"
import TrailerApi from './api/TrailerApi';

import Upcoming from './api/Upcoming';
import ApiMovieDetail from "./api/ApiMovieDetails"
import Watch from './api/Watch';
import Search from './api/Search';
import MovieSearch from './api/MovieSearch';

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
            <Route path="/trending" element={<TrailerApi />} />
            <Route path="/recommended" element={<Recommended />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/movie/:data" element={<ApiMovieDetail />} />
            <Route path="/watch/:id" element={<Watch />} />
            <Route path="/search/" element={<Search />} />
            <Route path="/moviesearch/:id" element={<MovieSearch />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
