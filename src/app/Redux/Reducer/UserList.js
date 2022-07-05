import * as types from "../Constant/UserConstant";

const initialstate = {
  
    userlist : [],
    loading:false

}

const UserList = (state = initialstate, action ) => {
    console.log(action.payload, "action.payload")
    switch(action.type) {
        case types.GET_USER_LIST :
            return{
                ...state,
                userlist: action.payload,
                loading: false,
            };
            default:
                return state;
    }
};

export default UserList;