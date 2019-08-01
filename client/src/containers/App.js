import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main';
import Signup from '../components/Signup';
import Login from '../components/Login';

const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Router>
    </div>
  )
}

export default App;