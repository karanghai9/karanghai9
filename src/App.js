import React, { Component,Suspense } from 'react';
import './App.css';
import Loader from './component/Loader/Loader.js';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Contact = React.lazy(() => import('./container/Contact'));
const About = React.lazy(() => import('./container/About'));
const Projects = React.lazy(() => import('./container/Projects/Projects'));
const Home = React.lazy(() => import('./container/Home'));

class App extends Component{
  constructor() {
    super();
    this.state = { width: 0, height: 0, desktop: false };   
  } 

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    const deviceWidth = window.innerWidth;
    const deviceHeight = window.innerHeight;
    this.setState({ width: deviceWidth, height: deviceHeight });
    if(deviceWidth>768 && deviceHeight<800){
      this.setState({ desktop: true });
    }
  };

  render() { 
    return (
      <div>
          {this.state.desktop ?
            <div className="AppStyling">
            <Router basename={process.env.PUBLIC_URL}>
              <Navbar className="navb" collapseOnSelect expand="lg">
                <Navbar.Brand className="navbar-brand"><Link to="/">Portfolio</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="route">
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
      
              <Suspense fallback={<div><Loader /></div>}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                </Switch>
                <footer className="page-footer">
                  <div className="footer-copyright text-center py-3">Karan's Portfolio | 
                  <span> © 2021</span>
                  </div>
                </footer>
              </Suspense>
            </Router>
          </div>
            : <div className="deviceError"><b>Not available on mobile devices yet!</b></div>}
      </div>
    );
  }
}

export default App;