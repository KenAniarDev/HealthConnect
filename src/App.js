import './normalize.css';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Layout from './layout/Layout'
import Home from './pages/Home'
import Facility from './pages/Facility'
import Doctors from './pages/Doctors'
import Blog from './pages/Blog'
import Book from './pages/Book'
import Hospital from './pages/Hospital'
import Login from './pages/Login'
import Register from './pages/Register'
import Map from './pages/Map'

function App() {
  return (
    <div>
       <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Layout>
            <Route path="/facility" component={Facility} />
            <Route path="/doctors" component={Doctors} />
            <Route path="/blog" component={Blog} />
            <Route path="/book" component={Book} />
            <Route path="/map" component={Map} />
            <Route path="/hospital" component={Hospital} />
            <Route exact path="/" component={Home} />
          </Layout>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
