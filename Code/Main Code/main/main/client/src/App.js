import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact" component={ContactForm} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;
