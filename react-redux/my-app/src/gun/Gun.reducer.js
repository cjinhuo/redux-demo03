const ADD_GUN = '加机关枪'
const REMOVE_GUN = '减机关枪'

export default function counter(state={num:10}, action){
    switch(action.type){
        case ADD_GUN:
            return {num:state.num+1}
        case REMOVE_GUN:
            return {num:state.num-1}
        default:
            return {...state};
    }
}

//action creator
        export function addGUN(){
            return {type:ADD_GUN}
        }
        export function removeGUN(){
            return {type:REMOVE_GUN}
        }
        export function addGunAsync(){
            return dispatch=>{
                setTimeout(() => {
            dispatch(addGUN())
        }, 2000);
    }
}