import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import AuthLogin from './Auth'
import Home from './home'


export default class Index extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/login' component={AuthLogin}/>
                        <Route path='/home'  component={Home}/>
                        <Redirect to='/home'/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}