import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Grammar from './Grammar/Grammar'
import Vocabulary from './Vocabulary/Vocabulary'
import Home from './Structure/Home'
export default function Routes() {
    return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/Grammar' component={Grammar} />
                <Route exact path='/Vocabulary' component={Vocabulary} />
            </Switch>
    )
}
