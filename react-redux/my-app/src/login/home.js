import React from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import AuthLogin from './Auth'
import GunShow from "../gun/Gun";
import {connect} from "react-redux";
import {login, logout} from "./Auth.reducer";

function NotFound() {
    return(
        <h1>路径错误❌</h1>
    )
}

function Erying() {
    return(
        <h1>二营</h1>
    )
}

function Sanying() {
    return(
        <h1>三营</h1>
    )
}



class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.match.url);
        const url = this.props.match.url;
        const app = (
            <div>
                <ul>
                    <li>
                        <Link to={`${url}/`}>一营</Link>
                    </li>
                    <li>
                        <Link to={`${url}/erying`}>二营</Link>
                    </li>
                    <li>
                        <Link to={`${url}/sanying`}>三营</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path='/login' component={AuthLogin}/>
                    <Route path={`${url}/`} exact component={GunShow}/>
                    <Route path={`${url}/erying`}  component={Erying}/>
                    <Route path={`${url}/sanying`}  component={Sanying}/>
                </Switch>
                <button onClick={this.props.logout}>注销</button>
            </div>
        )
        const redirect = <Redirect to='/login'/>
        return this.props.isAuth ? app : redirect
    }
}
const mapStateToProps = (state) =>{
    return {
        isAuth:state.auth.isAuth,
        user:state.auth.user
    }
}
export default connect(mapStateToProps, {login,logout})(Home)
