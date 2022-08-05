
import * as types from "../Constant/UserConstant";

const initial = {
    users : [],
    loading : false
}
const UserChangePasswordReducer = (state= initial,action) => {
    switch(action.type) {
        case types.GET_CHANGEPASSWORD_REQUEST :
            return{
                ...state,
                users:action.payload,
                loading :true,
            };

        case types.GET_CHANGEPASSWORD_SUCCESS :
            return{
                ...state,
                users:action.payload,
                loading :false,
            };

        case types.GET_CHANGEPASSWORD_FAILED :
            return{
                ...state,
                users:action.payload,
                loading :true,
            };
            default:
                return state;
        }
    };

export default  UserChangePasswordReducer;
