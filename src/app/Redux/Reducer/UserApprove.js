import * as types from "../Constant/UserConstant";

const initialstate = {
    users : [],
    loading:false

}


const UserApprove = (state=[],action) => {
    switch(action.type) {
        case types.GET_USERS_APPROVE_PENDING :
            return{
                ...state,
                users:action.payload,
                loading :true,
            };

        case types.GET_APPROVE_USERS :
            return{
                ...state,
                users:action.payload,
                loading :false,
            };

        case types.GET_USERS_APPROVE_FAIL :
            return{
                ...state,
                users:action.payload,
                loading :true,
            };
            default:
                return state;
        }
    };

export default  UserApprove;