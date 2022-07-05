import * as types from "../Constant/UserConstant";

const initialstate = {
  
    paiduser : [],
    loading:false

}

const PaidUser = (state = initialstate, action ) => {


    console.log(action.payload, "action.payload")
    switch(action.type) {
        case types.GET_SUBSCRIPTION :
            return{
                ...state,
                paiduser: action.payload,
                loading: false,
            };
            default:
                return state;
    }
};

export default PaidUser;