import * as types from  "../Constant/UserConstant";

const initial = {
    users : [] ,
    loading : false
}

 const UserForgetReducer = (state = initial , action) => {
    console.log(action, "action data in forget")
    switch(action.type) {
        case types.GET_USER_FORGET_REQUEST:
            return {
                ...state,
                users : action.payload,
                loading: true
            }

        case types.GET_USER_FORGET_SUCCESS:
            return {
                ...state,
                users : action.payload,
                loading:false
            }

        case types.GET_USER_FORGET_FAIL:
            return {
                ...state ,
                users :action.payload,
                loading:false
            }
        
        
            default:
                return state;
    }


}

export default UserForgetReducer;
