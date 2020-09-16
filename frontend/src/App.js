import React from 'react';
import { Layout, Drawer, Navigation, Content} from 'react-mdl'
import NavBar from './components/Main'
import { Link } from 'react-router-dom'
import SocialLinks from './components/SocialLinks'

// import { fetchBlogPosts} from './actions/fetchBlogs'
// import {connect} from 'react-redux'

class App extends React.Component {
  // class App extends React.Component {

// componentDidMount() {
//   this.props.fetchBlogPosts()
//   console.log(this.props)
// }

  render() {
  return (
      <div style={{height: '800px', position: 'relative'}}>
    <Layout fixedDrawer>
        <Drawer title="Maddison">
          <div className="drawer-title-email">maddison@email.com</div>
            <Navigation>
                <Link  to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/blogs/new">Create A New Blog</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
                <a href ="https://docs.google.com/document/d/1Qpqf8Y59bvjgFXIg_aIVLGfBCjuQiQydcOusV7BP4NA/edit?usp=sharing">Resume</a>
            </Navigation>
           <SocialLinks />
        </Drawer>
        <Content className="navigation-color">
        <NavBar />
          {/* <NavBar blogPosts={this.props.blogPosts}/> */}
          </Content>
    </Layout>
</div>
  );
}
}
// const mapStateToProps = state => {      
//   return {
//       blogPosts: state.blogPosts
//   }
// }












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
// export default connect(mapStateToProps,{fetchBlogPosts})(App)
