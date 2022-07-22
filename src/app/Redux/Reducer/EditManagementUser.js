
import * as types from "../Constant/UserConstant";

const initialstate = {
  
    freeuser : [],
    loading:false

}

const EditManagementUser = (state = initialstate, action ) => {
    switch(action.type) {
        case types.GET_USER_DATA_EDIT_PENDING :
            return{
                ...state,
                useredit: action.payload,
                loading: true,
            };

        case types.GET_USER_DATA_EDIT_SUCCESS :
            return{
                ...state,
                useredit: action.payload,
                loading: false,
            };

        case types.GET_USER_DATA_EDIT_FAILED :
            return{
                ...state,
                useredit: action.payload,
                loading:true,
            };



            default:
                return state;
    }
};

export default EditManagementUser;