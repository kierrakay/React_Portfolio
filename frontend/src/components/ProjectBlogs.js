

import React from 'react'
import {Card, CardTitle, CardActions, Button, CardMenu, CardText} from 'react-mdl'


const ProjectBlogs = () => {
    
  return (
                <div className="blogs-grid">
                      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '176px', background: 'url(https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}}>  </CardTitle>
                   <CardText>
                   "React/Redux problems I faced." <br/>
                   I’m going to explain a few issues I ran into in my project and how you too can overcome them.
                   </CardText>
                   <CardActions border>
                       <Button colored ripple a href="https://medium.com/@kierramerriman/react-redux-problems-i-faced-78785edb3ef">Medium</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                    {/* <IconButton name="share" /> */}
                   </CardMenu>
               </Card>

               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '176px', background: 'url(https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}}>  </CardTitle>
                   <CardText>
                   "Bind, Call, Apply…huh?" <br/>
                   Ok, so I’m going to explain these methods and how they’re used. 
                   I’ll first start off by saying I wanted to avoid these concepts
                    completely 
                   </CardText>
                   <CardActions border>
                       <Button colored ripple a href="https://medium.com/@kierramerriman/bind-call-apply-huh-c265fdeb6ca8">Medium</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                    {/* <IconButton name="share" /> */}
                   </CardMenu>
               </Card>

               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '176px', background: 'url(https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}}>  </CardTitle>
                   <CardText>
                   "Creating a Rails API with Javascript." <br/>
                   I will be giving a step by step guide on how I created a Rails API with a Javascript frontend. It will be a book tracker web app.
                   </CardText>
                   <CardActions border>
                       <Button colored ripple a href="https://medium.com/@kierramerriman/creating-a-rails-api-with-javascript-58ed58ad0366">Medium</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                    {/* <IconButton name="share" /> */}
                   </CardMenu>
               </Card>

               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '176px', background: 'url(https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}}>  </CardTitle>
                   <CardText>
                   "Movie Review App." <br/>
                   Welcome back! Today I’m going to teach you all how to build a movie review app using Ruby On Rails! Let’s do this!
                   </CardText>
                   <CardActions border>
                       <Button colored ripple a href="https://medium.com/@kierramerriman/movie-review-app-using-ruby-on-rails-82c1e0ddd85e">Medium</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                    {/* <IconButton name="share" /> */}
                   </CardMenu>
               </Card>

                  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '176px', background: 'url(https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}}>  </CardTitle>
                   <CardText>
                   "How to build a CRUD, MVC app using Sinatra." <br/>
                    This blog is going to teach you how to create a custom CRUD, MVC app using Sinatra.
                   </CardText>
                   <CardActions border>
                       <Button colored ripple a href="https://medium.com/@kierramerriman/how-to-build-a-crud-mvc-app-using-sinatra-d39f79e519e7">Medium</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                    {/* <IconButton name="share" /> */}
                   </CardMenu>
               </Card>
               
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '176px', background: 'url(https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}}>  </CardTitle>
                   <CardText>
                   "Project Portfolio: CLI Data Gem." <br/>
                   Hello! endangered_animals is my first portfolio project for the Flatiron School: Full Stack Web Development program.
                   </CardText>
                   <CardActions border>
                       <Button colored ripple a href="https://medium.com/@kierramerriman/project-portfolio-cli-data-gem-4bfd768628e4">Medium</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                    {/* <IconButton name="share" /> */}
                   </CardMenu>
               </Card>

              </div>
            ) 
        }

   

export default ProjectBlogs