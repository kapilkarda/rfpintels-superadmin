import * as types from "../Constant/UserConstant";


const initialstate = {
    user : [],
    loading:"false"

}

const UserLoginReducer = (state = initialstate , action) => {
    console.log(action, "action in reducer")
    switch(action.type) {
        case types.GET_USER_LOGIN_REQUEST :
            return{
                ...state,
                user:action.payload,
                loading :true,
            };

        case types.GET_USER_LOGIN_SUCCESS :
            return{
                ...state,
                user:action.payload,
                loading :false,
            };

        case types.GET_USER_LOGIN_FAIL :
            return{
                ...state,
                user:action.payload,
                loading :true,
            };
            default:
                return state;
        }
    };

export default  UserLoginReducer;