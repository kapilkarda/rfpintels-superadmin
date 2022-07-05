import * as types from  "../Constant/UserConstant";
// import GET_SUBSCRIPTION from "../Constant/UserConstant";
import axios from "axios";

const UserAction = (users) => ({
    type :  types.GET_USERS ,
    payload : users,
});
const FreeSubscription = (freeuser) => ({
    type : types.GET_SUBSCRIPTION ,
    payload : freeuser,
}) ;
const PaidSubscription = (paiduser) => ({
    type : types.GET_PAID_SUBSCRIPTION,
    payload : paiduser,
});
const UserListData = (userlist) => ({
    type : types.GET_USER_LIST,
    payload : userlist,
});
// const ExtraPagekiapi = (extrapagekadata) => ({
//     type : types.GET_EXTRAPAGE_PENDING,
// })

export const loadUsers = () => {
    return function (dispatch){
        const tokens = localStorage.getItem('token')
        console.log(tokens);
        axios.get('http://rfpintels-services.eastus.cloudapp.azure.com/userservices/api/super/getListOfCompany',  {
            headers:{
              'Authorization':`Bearer ${tokens}`
          }}).then((resp)  => {
            console.log("resp.........",resp)
            dispatch(UserAction(resp.data));
    }).catch(error => console.log(error));
        
    };
};

export const freeUserdata = () => {
    return function (dispatch){
        const tokens = localStorage.getItem('token')
        console.log(tokens);
        axios.get('http://rfpintels-services.eastus.cloudapp.azure.com/userservices/subscriptionPlans/trialList?subscriptionType=FREE', {
            headers: {
                'Authorization':`Bearer ${tokens}`
            }
        }).then((resp) => {
            console.log("resp.........",resp)
            dispatch(FreeSubscription(resp.data));
        }).catch(error => console.log(error));
    }
};

export const paidUserdata = () => {
    return function (dispatch){
        const tokens = localStorage.getItem('token')
        console.log(tokens);
        axios.get('http://rfpintels-services.eastus.cloudapp.azure.com/userservices/subscriptionPlans/trialList?subscriptionType=PAID', {
            // axios.get('http://rfpintels-services.eastus.cloudapp.azure.com/userservices/subscriptionPlans/trialList?subscriptionType=FREE', {

            headers: {
                'Authorization':`Bearer ${tokens}`
            }
        }).then((resp) => {
            console.log("resp.........",resp)
            dispatch(PaidSubscription(resp.data));
        }).catch(error => console.log(error));
    }
};

export const userListData = () => {
    return function (dispatch){
        const tokens = localStorage.getItem('token')
        console.log(tokens);
        axios.get('http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/getAllUser', {
            headers: {
                'Authorization':`Bearer ${tokens}`
            }
        }).then((resp) => {
            console.log('resp..........', resp)
            dispatch(UserListData(resp.data));
        }).catch(error => console.log(error));
    }
};

// export const userListData = ()=> async(dispatch)=> {
//     try{
//         dispatch({type: types.GET_USER_LIST_PENDING});
//         const res = 
//     }
// }

export const updateConpanyList = ()=> async (dispatch)=> {
    try{
        dispatch({type: types.PUT_COMPANYLIST_PENDING});
        const res = await axios.put(
            "http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/editCompanyProfile"
        );
        console.log(res.data, "res-data");
        dispatch({type: types.PUT_COMPANYLIST_SUCCESS, payload: res.data});
    }
    catch(error){
        dispatch({
            type: types.PUT_COMPANYLIST_FAIL,
            payload: error.data && error.response.data.message?
            error.response.data.message: error.message,
        })
    }
};

// export function addUserUserManagment(data) async{
//     console.log(data, "data123fsdfasdfasdf");
   
    
//     try{
//         dispatch({type: types.PUT_ADDUSERBTN_PENDING});
//         const res = await axios.put(
//             "http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/updateAddUser"
//         );
//         console.log(res.data, "res-data-adduserbtn-usermana");
//         dispatch({type: types.PUT_ADDUSERBTN_SUCCESS, payload: res.data});
//     }
//     catch(error){
//         dispatch({
//             type: types.PUT_ADDUSERBTN_FAIL,
//             payload: error.data && error.response.data.message ?
//             error.response.data.message: error.message,
//         })
//     }
// }
    // const requestOptions = {
    //   method: "post",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(data),
    // };
    // console.log(requestOptions, "abc")
    // return (dispatch) => {
    //   dispatch(usersignUpPending());
    //   fetch(`http://demo.engineermaster.in/api/register`, requestOptions)
    //     .then((res) => res.json())
    //     .then((res) => {
    //       if (res) {
    //         const Response = res;
    //         console.log(Response, "response123sdf");
    //         dispatch(usersignUpSuccess(Response));
    //       }
    //     })
    //     .catch((error) => {
    //       dispatch(usersignUpError(error));
    //     });
    // };
  

export const addUserUserManagment = (data)=> async (dispatch)=> {
    console.log(data, "addUserbtndataslfkdjsldfsdfsdf234")  ;
    const tokens = localStorage.getItem('token')
      const newUserData = {
        // headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
        headers: {
            'Authorization':`Bearer ${tokens}`
        }
        // "email": "hemant@gmail.com",
        // "firstName": "hemant ghodeswar",
        // "lastName": "ghodeswar",
        // "title": "emngineer master",
        // "officeNumber": "287349273489713",
        // "cellNumber": "sjflsjdflkasjdflkjasdl",
      }
      console.log(newUserData, "newUserData,newUserData")
      
      console.log(tokens, "lksdjfiwaelajsdf080989");
    try{
        dispatch({type: types.PUT_ADDUSERBTN_PENDING});
       
        const res = await axios.put(
            "http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/updateAddUser",
             newUserData
        );
        console.log(res, "res-data-adduserbtn-usermana");
        dispatch({type: types.PUT_ADDUSERBTN_SUCCESS, payload: res.data});
    }
    catch(error){
        dispatch({
            type: types.PUT_ADDUSERBTN_FAIL,
            payload: error.data && error.response.data.message ?
            error.response.data.message: error.message,
        })
    }
}

export const updateUserManagment = ()=> async (dispatch)=> {

    try{
        dispatch({type: types.PUT_USERMANAGMENT_PENDING});
        const res = await axios.put(
            "http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/updateAddUser"
        );
        console.log(res.data, "res-data-usermanagement");
        dispatch({type: types.PUT_USERMANAGMENT_SUCCESS, payload: res.data});
    }
    catch(error){
        dispatch({
            type: types.PUT_USERMANAGMENT_FAIL,
            payload: error.data && error.response.data.message ?
            error.response.data.message: error.message,
        })
    }
}

export const extraPagedata = ()=> async (dispatch)=> {
    try{
        dispatch({type: types.GET_EXTRAPAGE_PENDING});
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        console.log(res.data, "res inside")
       dispatch({type: types.GET_EXTRAPAGE_SUCCESS, payload:res.data });
    }
    catch(error){
        dispatch({
            type: types.GET_EXTRAPAGE_FAIL,
            payload: error.data && error.response.data.message?
            error.response.data.message: error.message,
        })
    }
}


