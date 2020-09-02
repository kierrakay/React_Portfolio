import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import BlogsContainer from './containers/BlogsContainer'
import Contact from './components/Contact'
import NavBar from './components/Main'
import Projects from './components/Projects'
import Resume from './components/Resume'
// import Intro from './components/Intro'
// import About from './components/About'
// import Timeline from './components/Timeline';

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/blogs" component={BlogsContainer} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/resume" component={Resume} />
    </div>
  );
}

export default App;
