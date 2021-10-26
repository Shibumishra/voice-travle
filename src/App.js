import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import SignUp from './components/auth/Login';
import Review from './pages/Review/Review';

const App = () =>{
  return (
    <React.Fragment>
      <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path="/review" component={Review} />
        </Switch>
      </Router>
    </React.Fragment>
    
  );
}
export default App;
