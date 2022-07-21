import * as types from "../Constant/UserConstant";

const initialstate = {
  
    freeuser : [],
    loading:false

}

const FreeUser = (state = initialstate, action ) => {
    switch(action.type) {
        case types.GET_SUBSCRIPTION_PENDING :
            return{
                ...state,
                freeuser: action.payload,
                loading: true,
            };

        case types.GET_SUBSCRIPTION :
            return{
                ...state,
                freeuser: action.payload,
                loading: false,
            };

        case types.GET_SUBSCRIPTION_FAIL :
            return{
                ...state,
                freeuser: action.payload,
                loading:true,
            };



            default:
                return state;
    }
};

export default FreeUser;