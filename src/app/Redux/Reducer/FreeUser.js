import * as types from "../Constant/UserConstant";

const initialstate = {
  
    freeuser : [],
    loading:false

}

const FreeUser = (state = initialstate, action ) => {
    switch(action.type) {
        case types.GET_SUBSCRIPTION :
            return{
                ...state,
                freeuser: action.payload,
                loading: false,
            };
            default:
                return state;
    }
};

export default FreeUser;