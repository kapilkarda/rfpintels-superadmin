import * as types from "../Constant/UserConstant";



const initialstate = {
    users : [],
    // paiduser : [],
    loading:false

}


const UserReducers = (state = initialstate , action) => {
    switch(action.type) {
        case types.GET_USERS :
            return{
                ...state,
                users:action.payload,
                loading :false,
            };
            default:
                return state;
        }
    };

    // const paidReducers = (state = initialstate, action ) => {
    //     switch(action.type) {
    //         case types.GET_SUBSCRIPTION :
    //             return{
    //                 ...state,
    //                 paiduser: action.payload,
    //                 loading: false,
    //             };
    //             default:
    //                 return state;
    //     }
    // };

export default  UserReducers;

