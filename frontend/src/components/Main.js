import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Intro from './Intro'
import Resume from './Resume'

const Main = () => (
    <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/resume" component={Resume} />
    </Switch>
)

export default Main