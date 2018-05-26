import React from 'react';
import {connect} from 'react-redux'
import {login,logout} from "./Auth.reducer";
import {Redirect} from 'react-router-dom'




class Auth extends React.Component{

    render(){
        return(
            <div>
                {this.props.isAuth ? <Redirect to='/home' /> : null}
                <h1>你当前没有登录</h1>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}
//将state的所有属性都映射成props
const mapStateToProps = (state) =>{
    return {
        isAuth:state.auth.isAuth,
        user:state.auth.user
    }
}

//将Auth、Home重新包装成包含props的组件
export default connect(mapStateToProps, {login,logout})(Auth)
