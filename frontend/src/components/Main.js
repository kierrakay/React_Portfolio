import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BlogsContainer from '../containers/BlogsContainer'
import Contact from './Contact'
import {HomePage} from './HomePage'
import Projects from './Projects'
import BlogInput from '../components/blogs/BlogInput'
import {connect} from 'react-redux'




// const NavBar = () => (

//     <Switch>
//         <Route  exact path="/" component={HomePage} />
//         <Route  path="/blogs" component={BlogsContainer} />
//         <Route  path='/blogs/new' component={BlogInput} />
//         <Route  path="/contact" component={Contact} />
//         <Route  path="/projects" component={Projects} />
//     </Switch>
// )

class NavBar extends React.PureComponent {
    componentDidMount(){
        // console.log(this.props)
    }
    
    render(){
        return (    
        <div>   
        <Switch>
            <Route  exact path="/" component={HomePage} />
            <Route  path="/blogs" component={BlogsContainer} />
            <Route  path='/blogs/new' component={BlogInput} />
            <Route  path="/contact" component={Contact} />
            <Route  path="/projects" component={Projects} />
        </Switch>
        </div>
        )
    }

}

const mapStateToProps = state => {      
    return {
        blogPosts: state.blogPosts
    }
}




// export default NavBar
export default connect(mapStateToProps)(NavBar)
















// import { NavLink } from 'react-router-dom'

// const NavBar = () => {
//     return (
//       <nav className="body">
//         <div className="container">
//           <a className="navbar-brand" href="/">Kierra Merriman</a>
//           <br/>
//           <a className="navbar-brand-email" href="/">K.merriman32@hotmail.com</a>
//           <div className="#" id="navbarDefault" >
//             <ul className="navbar-nav">
//               <li className='nav-item'>
//                 <NavLink
//                   className='nav-link'
//                   to="/blogs"
//                   exact
//                   activeStyle={{
//                     color: '#'
//                   }}
//                 >Blogs</NavLink>
//               </li>
//               <li className='nav-item'>
//                 <NavLink
//                   className='nav-link'
//                   to="/contact"
//                   exact
//                   activeStyle={{
//                     color: '#'
//                   }}
//                 >Contact</NavLink>
//               </li>
//               <li className='nav-item'>
//                 <NavLink
//                   className='nav-link'
//                   to="/projects"
//                   exact
//                   activeStyle={{
//                     color: '#'
//                   }}
//                 >Projects</NavLink>
//               </li>
//               <li className='nav-item'>
//                 <NavLink
//                   className='nav-link'
//                   to="/resume"
//                   exact
//                   activeStyle={{
//                     color: '#'
//                   }}
//                 >Resume</NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     )
//   }
  
//   export default NavBar;




