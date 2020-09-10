import React from 'react'
import About from './About'
import { Grid, Cell } from 'react-mdl'
 
const HomePage = () =>{

      return (
              // <div style={{width: '100%', margin: 'auto'}}>
          <div>
            <Grid className="landing-grid">
              <Cell col={12}>
              <div className="banner-text">
                {/* <h1>Software Engineer</h1> */}
  
                {/* <hr/> */}
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

//  class HomePage extends React.Component {
//   render() {
//     return (
//             // <div style={{width: '100%', margin: 'auto'}}>
//         <div>
//           <Grid className="landing-grid">
//             <Cell col={12}>
//             <div className="banner-text">
//               {/* <h1>Software Engineer</h1> */}

//               {/* <hr/> */}
//               <About />
//             </div>
//             <div>
//             <h1>HomePage Component</h1>
         
//             </div>
//             </Cell>
//           </Grid>
//         </div>
//     )
//   }
// }

export default HomePage


