import * as types from "../Constant/UserConstant";

const initialstate = {
    removeuser : [],
    loading:false
}

const UserRemoveData = (state = initialstate , action) => {
    switch(action.type){
        case types.GET_USER_DATA_REMOVE_PENDING:
            return {
                ...state,
                removeuser:action.payload,
                loading :true,

            }
        
        case types.GET_USER_DATA_REMOVE_SUCCESS:
            return {
                ...state,
                removeuser :action.payload,
                loading:false,
            }
        case types.GET_USER_DATA_REMOVE_FAILED:
            return {
                ...state,
                removeuser:action.payload,
                loading : false,
            };
        default:
            return state;
            
            

    }

}

export default  UserRemoveData;
