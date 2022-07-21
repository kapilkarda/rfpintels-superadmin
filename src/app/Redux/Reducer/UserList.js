import * as types from "../Constant/UserConstant";

const initialstate = {
  
    userlist : [],
    loading:false

}

const UserList = (state = initialstate, action ) => {
    console.log(action.payload, "actishuf")
    switch(action.type) {
        case types.GET_USER_LIST_PENDING :
            return{
                ...state,
                userlist: action.payload,
                loading: true,
            };
        
        case types.GET_USER_LIST :
            return{
                ...state,
                userlist: action.payload,
                loading: false,
            };

        case types.GET_USER_LIST_FAIL :
            return{
                ...state,
                userlist: action.payload,
                loading: true,
            };




            default:
                return state;
    }
};

export default UserList;