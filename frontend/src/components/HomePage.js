import React from 'react'
import About from './About'
import { Grid, Cell } from 'react-mdl'
 


 class HomePage extends React.Component {
  render() {
    return (
            <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
            <Cell col={12}>
            <div className="banner-text">
              {/* <h1>Software Engineer</h1> */}

              <hr/>
              <About />
            </div>
            <div>
            <h1>HomePage Component</h1>
         
            </div>
            </Cell>
          </Grid>
        </div>
    )
  }
}

export default HomePage


        //  {/* <div className="sidebar">
        //         <h1>Kierra Merriman</h1>
        //             <span className="email">k.merriman32@hotmail.com</span>
        //             <li><a href="/resume">Resume</a></li>
        //             <li><a href="/contact">Contact</a></li>
        //             <li><a href="/blogs">Blogs</a></li> */}
        //     {/* </div> */}