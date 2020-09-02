import React from 'react';
// import { Route } from 'react-router-dom';
import './App.css';
import { Layout, Drawer, Navigation, Content} from 'react-mdl'
import NavBar from './components/Main'
import { Link } from 'react-router-dom'

// import BlogsContainer from './containers/BlogsContainer'
// import Contact from './components/Contact'
// import NavBar from './components/Main'
// import Projects from './components/Projects'
// import Resume from './components/Resume'
// import HomePage from './components/HomePage'
// import Intro from './components/Intro'
// import About from './components/About'
// import Timeline from './components/Timeline';

function App() {
  return (
      <div style={{height: '800px', position: 'relative'}}>
    <Layout fixedDrawer>
        <Drawer title="Kierra Merriman">
          <div className="drawer-title-email">K.merriman32@hotmail.com</div>
            <Navigation>
                <Link  to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
        </Drawer>
        <Content>
          <NavBar />
          </Content>
    </Layout>
</div>
  );
}

export default App;

/* <div>
<NavBar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/blogs" component={BlogsContainer} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/resume" component={Resume} />
    </div>  */