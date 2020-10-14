import React from 'react';
import { Layout, Drawer, Navigation, Content} from 'react-mdl'
import NavBar from './components/Main'
import { Link } from 'react-router-dom'
import SocialLinks from './components/SocialLinks'

class App extends React.Component {

  render() {
    return (
      <div style={{height: '800px', position: 'relative'}}>
      <Layout fixedDrawer>
          <Drawer title="">
          <img src="face.jpg" alt='Avatar'/>
          {/* <div className="drawer-title-email">maddison@email.com1</div> */}
              <Navigation >
                  <Link  to="/" style={{color: '#fff', fontSize: '25px'}}>Home</Link>
                  {/* <Link to="/blogs" style={{color: '#fff', fontSize: '25px'}}>Blogs</Link>
                  <Link to="/blogs/new" style={{color: '#fff'}}>Create A New Blog</Link> */}
                  {/* <Link to="/contact" style={{color: '#fff'}}>Contact</Link> */}
                  <Link to="/blogs" style={{color: '#fff', fontSize: '25px'}}>Blogs</Link>
                  <Link to="/projects" style={{color: '#fff', fontSize: '25px'}}>Projects</Link>
                  <a href ="https://docs.google.com/document/d/1wmQEW-1EaF3P2pk18j9bPb-ipsfVVdsrvRINd2J66z4/edit?usp=sharing" style={{color: '#fff', fontSize: '25px'}}>Resume</a>
                  <br/>
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

export default App;















// function App () {

  //     return (
  //         <div style={{height: '800px', position: 'relative'}}>
  //           <Layout fixedDrawer>
  //               <Drawer title="Maddison">
  //                 <div className="drawer-title-email">maddison@email.com</div>
  //                   <Navigation>
  //                       <Link  to="/">Home</Link>
  //                       <Link to="/blogs">Blogs</Link>
  //                       <Link to="/blogs/new">Create A New Blog</Link>
  //                       <Link to="/contact">Contact</Link>
  //                       <Link to="/projects">Projects</Link>
  //                       <a href ="https://docs.google.com/document/d/1Qpqf8Y59bvjgFXIg_aIVLGfBCjuQiQydcOusV7BP4NA/edit?usp=sharing">Resume</a>
  //                   </Navigation>
  //                 <SocialLinks />
  //               </Drawer>
  //               <Content className="navigation-color">  
  //               <NavBar />
  //               </Content>
  //           </Layout>
  //         </div>
  //     ); 
  // }




