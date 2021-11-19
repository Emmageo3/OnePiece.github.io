import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../Header'
import Landing from '../Landing';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Login from '../Login';
import Signup from '../Signup';
import ErrorPage from '../ErrorPage'
import '../../App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />


          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={ErrorPage} />
          </Switch>

          <Footer />
        </Router>
    </div>
  );
}

export default App;
