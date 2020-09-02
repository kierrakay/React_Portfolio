import React from 'react'
import About from './About'



 class HomePage extends React.Component {
  render() {
    return (
        <div>
            <h1>Landing Page</h1>
            {/* <Grid className="landing-grid">
                <Cell col={12}></Cell>
            </Grid>
    */}
            <div>
            <About />
            </div>
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