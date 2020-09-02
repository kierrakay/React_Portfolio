import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="/">Kierra Merriman</a>
          <div className="#" id="navbarDefault" >
            <ul className="navbar-nav">
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to="/blogs"
                  exact
                  activeStyle={{
                    color: '#'
                  }}
                >Blogs</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to="/contact"
                  exact
                  activeStyle={{
                    color: '#'
                  }}
                >Contact</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to="/projects"
                  exact
                  activeStyle={{
                    color: '#'
                  }}
                >Projects</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to="/resume"
                  exact
                  activeStyle={{
                    color: '#'
                  }}
                >Resume</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
  export default NavBar;




  // import { Switch, Route } from 'react-router-dom'

// import Intro from './Intro'
// import Resume from './Resume'
// import Contact from './Contact'
// import BlogsPage from './blogs/BlogsPage'
// import BlogsPage from '../components/blogs/BlogsPage'

// const Main = () => (
//     <Switch>
//         <Route exact path="/" component={Intro} />
//         <Route  path="/resume" component={Resume} />
//         <Route  path="/contact" component={Contact} />
//         <Route  path="/Blogs" component={BlogsPage} />
//     </Switch>
// )

// export default Main