import React from 'react';
import './App.css';

import Home from '../Home'
import Header from '../Header'
import Footer from '../Footer'
import SearchPage from '../SearchPage';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

export default function App() {
  return (

    //BEM
    <span>

      <Router>

        <Header />

        <Switch>

          <Route path="/search">
            <SearchPage />
          </Route>
          

          <Route path="/">
            <Home />
          </Route>
          
        </Switch>

        <Footer />

      </Router>
       
     {/* SearchPage */} 

    </span>
  )
}

// export default App;
