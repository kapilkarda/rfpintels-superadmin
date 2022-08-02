import * as types from "../Constant/UserConstant";

const initialstate = {
    users : [],
    loading:false

}


const UserDeny = (state = initialstate, action) => {
    switch(action.type) {
        case types.GET_USERS_DENY_PENDING :
            return{
                ...state,
                users:action.payload,
                loading :true,
            };

        case types.GET_DENY_USERS :
            return{
                ...state,
                users:action.payload,
                loading :false,
            };

        case types.GET_USERS_DENY_FAIL :
            return{
                ...state,
                users:action.payload,
                loading :true,
            };
            default:
                return state;
        }
    };

export default  UserDeny;