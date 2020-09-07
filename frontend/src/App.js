import React from 'react';
// import { Route } from 'react-router-dom';
import { Layout, Drawer, Navigation, Content} from 'react-mdl'
import NavBar from './components/Main'
import { Link } from 'react-router-dom'
import SocialLinks from './components/SocialLinks'
// import { render } from 'react-dom';

// import BlogsContainer from './containers/BlogsContainer'
// import Contact from './components/Contact'
// import NavBar from './components/Main'
// import Projects from './components/Projects'
// import Resume from './components/Resume'
// import HomePage from './components/HomePage'
// import Intro from './components/Intro'
// import About from './components/About'
// import Timeline from './components/Timeline';




class App extends React.Component {

  // componentDidMount(){
  //   fetch('http://localhost:3000/api/v1/blog_posts')
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  // }

  render() {
  return (
      <div style={{height: '800px', position: 'relative'}}>
    <Layout fixedDrawer>
        <Drawer title="Kierra Merriman">
          <div className="drawer-title-email">k.merriman32@email.com</div>
            <Navigation>
                <Link  to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
           <SocialLinks />
        </Drawer>
        <Content className="navigation-color">
          <NavBar />
          </Content>
    </Layout>
</div>
  );
}
}










// function App() {
//   return (
//       <div style={{height: '800px', position: 'relative'}}>
//     <Layout fixedDrawer>
//         <Drawer title="Kierra Merriman">
//           <div className="drawer-title-email">k.merriman32@email.com</div>
//             <Navigation>
//                 <Link  to="/">Home</Link>
//                 <Link to="/blogs">Blogs</Link>
//                 <Link to="/contact">Contact</Link>
//                 <Link to="/projects">Projects</Link>
//                 <Link to="/resume">Resume</Link>
//             </Navigation>
//            <SocialLinks />
//         </Drawer>
//         <Content className="navigation-color">
//           <NavBar />
//           </Content>
//     </Layout>
// </div>
//   );
// }

export default App;
