import * as types from "../Constant/UserConstant";

const initialstate = {
    users : [],
    loading:false

}

const UserDetailadd = (state=[],action) => {
    switch(action.type) {
        case types.GET_USERS_ADD_PENDING :
            return{
                ...state,
                users:action.payload,
                loading :true,
            };

        case types.GET_ADD_USERS :
            return{
                ...state,
                users:action.payload,
                loading :false,
            };

        case types.GET_USERS_ADD_FAIL :
            return{
                ...state,
                users:action.payload,
                loading :true,
            };
            default:
                return state;
        }
    };

export default  UserDetailadd;
