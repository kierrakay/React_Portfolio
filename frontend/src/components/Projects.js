import React from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton } from 'react-mdl'

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 0
        }
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                {/*  Project #1 */}
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuPkINMIBQQoHcffA4q-xzKaJZJHeytn8j8w&usqp=CAU) center / cover'}}> Ruby Project #1</CardTitle>
                   <CardText>
                   That's mint, well done please submit the sop and uat files by next monday, critical mass, and going forward, so going forward. Strategic high-level 30,000 ft view pass the mayo, appeal to the client, sue the vice president and can you put it on my calendar?.
                   </CardText>
                   <CardActions border>
                       <Button colored>Github</Button>
                       <Button colored>CodePen</Button>
                       <Button colored>LiveDemo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                   </CardMenu>
               </Card>
               
                {/*  Project #2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuPkINMIBQQoHcffA4q-xzKaJZJHeytn8j8w&usqp=CAU) center / cover'}}> Ruby Project #2</CardTitle>
                <CardText>
                That's mint, well done please submit the sop and uat files by next monday, critical mass, and going forward, so going forward. Strategic high-level 30,000 ft view pass the mayo, appeal to the client, sue the vice president and can you put it on my calendar?.
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>

                {/*  Project #3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuPkINMIBQQoHcffA4q-xzKaJZJHeytn8j8w&usqp=CAU) center / cover'}}> Ruby Project #3</CardTitle>
                <CardText>
                That's mint, well done please submit the sop and uat files by next monday, critical mass, and going forward, so going forward. Strategic high-level 30,000 ft view pass the mayo, appeal to the client, sue the vice president and can you put it on my calendar?.
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div>
                    <h1>This is Javascript</h1>
                </div>
            ) 
        } else if(this.state.activeTab === 2){
            return(
                <div>
                    <h1>This is React</h1>
                </div>
            ) 
        } else  if(this.state.activeTab === 3){
            return(
                <div>
                    <h1>This is Sinatra</h1>
                </div>
            ) 
        }
    }
   
    render() {
        return (
            <div className="category-tabs">
                {/* React-mdl considers every Tab you create starts with idx 0 */}
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Ruby</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>React</Tab>
                    <Tab>Sinatra</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    

            </div>
        )
        }
    }

export default Projects