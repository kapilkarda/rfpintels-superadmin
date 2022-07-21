import * as types from "../Constant/UserConstant";
const initialstate = {  
    getuserdata : [],
    loading:false
}

const GetAllUserData = (state = initialstate, action ) => {
    console.log(action, "actishuf1564")
    switch(action.type) {
        case types.GET_ALL_USER_DATA_PENDING :
            return{
                ...state,
                getuserdata:[],
                loading: true,
            };
        
        case types.GET_ALL_USER_DATA_SUCCESS :
            return{
                ...state,
                getuserdata: action.resp,
                loading: false,
            };

        case types.GET_ALL_USER_DATA_FAILED :
            return{
                ...state,
                getuserdata: action.payload,
                loading: true,
            };
            default:
                return state;
    }
};

export default GetAllUserData;