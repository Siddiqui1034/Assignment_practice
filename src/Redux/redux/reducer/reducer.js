
import { init } from "../init/init"
export const appReducer = (state = init, action) =>{
    // const state = {name:'', loc:''}
    // const action = {type:'', name:"sachin"}

    // const state = {name:'', loc:''}
    // const action = {type:'', loc:"mumbai"}

    // const action = {type:"NAME_UPDATE", name:"sachin"}
    // const action = {type:"LOCATION", loc:"mumbai"}


    // if(action.type == "NAME_UPDATE"){
    //     state = {
    //         ...state,
    //         name: action.name
    //     }
    // }
    // if(action.type == "LOCATION"){
    //     state = {
    //         ...state, 
    //         loc: action.loc
    //     }
    // }
 
    // switch(action.type){
    //     case 'NAME_UPDATE':
    //         state = {
    //             ...state,
    //             name: action.name
    //         }
    //         break;

    //     case 'LOCATION':
    //         state = {
    //             ...state, 
    //             loc: action.loc
    //         }
    //         break;
    // }

    
    switch(action.type){
        case 'NAME_UPDATE':
            return {
                ...state,
                name: action.name
            } 

        case 'LOCATION':
            return {
                ...state, 
                loc: action.loc
            }
            
       default:
        return state; 
    }
// return state; instead of it write default 
}