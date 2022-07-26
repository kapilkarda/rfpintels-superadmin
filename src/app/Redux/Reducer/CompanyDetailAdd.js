import * as types from "../Constant/UserConstant";

const initialstate = {
  
    companylist : [],
    loading:false

}

const UserReducers = (state = initialstate, action ) => {
    switch(action.type) {
        case types.GET_USERS_PENDING :
            return{
                ...state,
                companylist: action.payload,
                loading: true,
            };

        case types.GET_USERS :
            return{
                ...state,
                companylist: action.payload,
                loading: false,
            };

        case types.GET_USERS_FAIL :
            return{
                ...state,
                companylist: action.payload,
                loading:true,
            };



            default:
                return state;
    }
};

export default UserReducers;
