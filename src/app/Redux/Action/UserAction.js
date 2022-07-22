import * as types from "../Constant/UserConstant";

import axios from "axios";
import { manageState } from "react-select/dist/stateManager-55f1941f.cjs.prod";

const FreeSubscription = (freeuser) => ({
  type: types.GET_SUBSCRIPTION,
  payload: freeuser,
});
const PaidSubscription = (paiduser) => ({
  type: types.GET_PAID_SUBSCRIPTION,
  payload: paiduser,
});

const UserListData = (userlist) => ({
  type: types.GET_USER_LIST,
  payload: userlist,
});

const UserListDatafailed = (error) => ({
  type: types.GET_USER_LIST_FAIL,
  payload: error,
});





export const showModel = (UserDetailAdd) => ({
  type: "GET_ADD_USERS",
  payload: UserDetailAdd,
});

export const UserDataSave = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_USERS_ADD_PENDING });
    const res = await axios.put(
      "http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/editCompanyProfile"
    );
    console.log(res.data, "res-data");
    dispatch({ type: types.GET_ADD_USERS, payload: res.data });
  } catch (error) {
    dispatch({
      type: types.GET_USERS_ADD_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const freeUserdata = () => {
  return function (dispatch) {
    const tokens = localStorage.getItem("token");
    console.log(tokens);
    axios
      .get(
        "http://rfpintels-services.eastus.cloudapp.azure.com/userservices/subscriptionPlans/trialList?subscriptionType=FREE",
        {
          headers: {
            Authorization: `Bearer ${tokens}`,
          },
        }
      )
      .then((resp) => {
        console.log("resp.........", resp);
        dispatch(FreeSubscription(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const paidUserdata = () => {
  return function (dispatch) {
    const tokens = localStorage.getItem("token");
    axios
      .get(
        "http://rfpintels-services.eastus.cloudapp.azure.com/userservices/subscriptionPlans/trialList?subscriptionType=PAID",
        {
          headers: {
            Authorization: `Bearer ${tokens}`,
          },
        }
      )
      .then((resp) => {
        console.log("resp.........", resp);
        dispatch(PaidSubscription(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const userListData = () => {
  return function (dispatch) {
    const tokens =  localStorage.getItem("token");
    axios
      .get(
        "http://rfpintels-services.eastus.cloudapp.azure.com/userservices/api/super/getListOfCompany",
        {
          headers: {
            Authorization: `Bearer ${tokens}`,
          },
        }
      )
      .then((resp) => {
        if (resp.status === 200) {
          dispatch(UserListData(resp.data));
        } else {
          dispatch(UserListDatafailed(resp));
        }
      })
      .catch((error) => {
        dispatch(UserListDatafailed(error));
        console.log(error);
      });
  };
};

export const getAllUserData = () => {

  return function (dispatch) {
    const tokens =  localStorage.getItem("token");
    console.log(tokens, "tokenskflsjdfksadfsdfsf")
    // axios
    //   .get(
    //     "http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/getAllUser",
    //     {
    //       headers: {
    //         Authorization: `Bearer ${tokens}`,
    //       },
    //     }
    //   )
    //   .then((resp) => {
    //     if (resp.status === 200) {
    //       dispatch(types.GET_ALL_USER_DATA_SUCCESS(resp.data));
    //     } else {
    //       dispatch((resp));
    //     }
    //   })
    //   .catch((error) => {
    //     dispatch(types.GET_ALL_USER_DATA_FAILED(error));
    //     console.log(error);
    //   });
    try {
      dispatch({type: types.GET_ALL_USER_DATA_PENDING});
      const resp = axios.get(
        "http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/getAllUser",
        {
                 headers: {
                   Authorization: `Bearer ${tokens}`,
                 },
              }
      ).then((resp)=>{
        console.log(resp.status, "slkdjfksdjfljsdflj")
        if(resp.status === 200) {
          dispatch({type: types.GET_ALL_USER_DATA_SUCCESS,resp});
          console.log(resp.data, "resp.datasflkdjsjdfl")
        }else{
          dispatch({type: types.GET_ALL_USER_DATA_FAILED('hkkjll')});
        }
      })
    }
    catch(error){
      dispatch({
        type: types.GET_ALL_USER_DATA_FAILED, payload:error.data && error.response.data.message
        ? error.response.data.message
        : error.message,

      })
    }
  };
};


export const updateConpanyList = () => async (dispatch) => {
  try {
    dispatch({ type: types.PUT_COMPANYLIST_PENDING });
    const res = await axios.put(
      "http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/editCompanyProfile"
    );
    console.log(res.data, "res-data");
    dispatch({ type: types.PUT_COMPANYLIST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: types.PUT_COMPANYLIST_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addUserUserManagment = (data) => async (dispatch) => {
  console.log(data, "addUserbtndataslfkdjsldfsdfsdf234");
  const tokens = localStorage.getItem("token");

  try {
    dispatch({ type: types.PUT_ADDUSERBTN_PENDING });

    const res = await axios.put(
      `http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/updateAddUser`,
      data,
      {
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
      }
    );
    console.log(res, "res-data-adduserbtn-usermana");
    dispatch({ type: types.PUT_ADDUSERBTN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: types.PUT_ADDUSERBTN_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUserManagment = () => async (dispatch) => {
  try {
    dispatch({ type: types.PUT_USERMANAGMENT_PENDING });
    const res = await axios.put(
      "http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/updateAddUser"
    );
    console.log(res.data, "res-data-usermanagement");
    dispatch({ type: types.PUT_USERMANAGMENT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: types.PUT_USERMANAGMENT_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

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

export const userApproved = (email) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_USERS_APPROVE_PENDING });
    const tokens = localStorage.getItem("token");
    const res = await axios.get(
      `http://rfpintels-services.eastus.cloudapp.azure.com/userservices/api/super/approve?email=${email}`,
      {
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
      }
    );
    console.log(res.data, "snil lofhs");
    dispatch({ type: types.GET_APPROVE_USERS, payload: res.data });
  } catch (error) {
    dispatch({
      type: types.GET_USERS_APPROVE_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UserDenyed = (email) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_USERS_DENY_PENDING });
    const tokens = localStorage.getItem("token");
    const res = await axios.get(
      `http://rfpintels-services.eastus.cloudapp.azure.com/userservices/api/super/deny?email=${email}`,
      {
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
      }
    );
    console.log(res.data, "snil lofhs");
    dispatch({ type: types.GET_DENY_USERS, payload: res.data });
  } catch (error) {
    dispatch({
      type: types.GET_USERS_DENY_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const CompanyDetailsAdded = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_COMPANY_DETAIL_ADD_PENDING });
    const res = await axios.put(
      "http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/editCompanyProfile"
    );
    console.log(res.data, "res-data");
    dispatch({ type: types.GET_COMPANY_DETAIL_ADD, payload: res.data });
  } catch (error) {
    dispatch({
      type: types.GET_COMPANY_DETAIL_ADD_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UserDataRemove = (id) => async (dispatch) => {
  console.log("iddddd", id);
  const tokens = localStorage.getItem("token");
  try {
    dispatch({ type: types.GET_USER_DATA_REMOVE_PENDING });
    const res = await axios.delete(
      `http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/deleteUser/${id}`,
      {
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
      }
    );
    console.log(res, "res-data");
    dispatch({ type: types.GET_USER_DATA_REMOVE_SUCCESS, payload: res });
  } catch (error) {
    console.log("error",error)
    dispatch({
      type: types.GET_USER_DATA_REMOVE_FAILED,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};



export const EditNewData = (id) => async (dispatch) => {
  console.log(id, "anillodha")
 
  const tokens = localStorage.getItem("token");
  try {
    dispatch({ type: types.GET_USER_DATA_EDIT_PENDING });
    const res = await axios.put(
      `http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/updateAddUser/${id}`,
      {
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
      }
    );
    console.log(res , "anillodhdjjsuf")
   
    dispatch({ type: types.GET_USER_DATA_EDIT_SUCCESS, payload: res });
  } catch (error) {
    console.log("error",error)
    dispatch({
      type: types.GET_USER_DATA_EDIT_FAILED,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

