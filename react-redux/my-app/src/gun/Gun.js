import React from 'react';
import {connect} from 'react-redux';
import {addGUN,addGunAsync,removeGUN} from './Gun.reducer'



class Gun extends React.Component{

    componentDidMount(){
        console.log(this.props.num)
    }

    render(){
        const num = this.props.num
        const addGun = this.props.addGUN
        const removeGun = this.props.removeGUN
        const addGunAsync = this.props.addGunAsync
        return(
            <div>
                <h1>当前有机枪{num}把</h1>
                <button onClick={addGun}>ADD</button>
                <button onClick={removeGun}>REMOVE</button>
                <button onClick={addGunAsync}>ADD_ASYNC</button>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {num:state.counter.num}
}
const actionCreators = { addGUN, removeGUN,addGunAsync };
export default connect(mapStateToProps, actionCreators)(Gun)