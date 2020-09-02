import React, { Component } from 'react'


export default class Intro extends Component {
  render() {
    return (
      <div>
      <div>
          <div className="sidebar">
            <h1>Kierra Merriman</h1>
            <span className="email">k.merriman32@hotmail.com</span>
          </div>
          <nav id="#portfolio-main-content"  className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li><a href="/" >Introduction</a></li>
                <li><a href="/" >About</a></li>
                <li><a href="/" >Projects</a></li>
                <li><a href="/" >Blog</a></li>
                <li><a href="/" >Work Experience</a></li>
              </ul>
            </div>
          </nav>
          <nav id="social-media-main-menu">
            <ul>
              <li><a href="https://www.linkedin.com/in/kierra-merriman-0633971a9/" >linkedin</a></li>
              <li><a href="https://github.com/kierrakay" >github</a></li>
              <li><a href="https://medium.com/@kierramerriman" >medium</a></li>
            </ul>
          </nav>
          <div className="portfolio-footer">
            <p>footer</p>
          </div>
      </div>
    </div>

    )
  }
}