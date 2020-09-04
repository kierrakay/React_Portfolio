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
                {/* Project #1 */}
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
               
                {/* Project #2 */}
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

                 {/* Project #3 */}
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
                <div className="projects-grid">
                {/* Project #1 */}
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}> Javascript Project #1</CardTitle>
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
               
                {/* Project #2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}> Javascript Project #2</CardTitle>
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

                 {/* Project #3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}> Javascript Project #3</CardTitle>
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