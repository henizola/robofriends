import {robots} from '../robots'
const INITIAL_STATE={
    allRobots:robots,
    filterdRobot:[]
};

export const robotReducer=(state=INITIAL_STATE,action)=>{

    switch(action.type){
        case 'SET_FILTERD_ROBOT':
            return{
                ...state,
                   filterdRobot:action.payload
            }
        default :
        return state;
    }

}