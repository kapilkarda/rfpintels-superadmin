import * as types from "../Constant/UserConstant";
import axios from "axios";
// import { actions } from "react-table";
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
        dispatch(PaidSubscription(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
export const userListData = () => {
  return function (dispatch) {
    const tokens = localStorage.getItem("token");
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
      });
  };
};
export const getAllUserData = () => {
  return function (dispatch) {
    const tokens = localStorage.getItem("token");

    try {
      dispatch({ type: types.GET_ALL_USER_DATA_PENDING });
      axios
        .get(
          `http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/getAllUser `,
          {
            headers: {
              Authorization: `Bearer ${tokens}`,
            },
          }
        )
        .then((res) => {
          console.log("res.....", res);
          if (res.status === 200) {
            dispatch({ type: types.GET_ALL_USER_DATA_SUCCESS, res });
          } else {
            dispatch({ type: types.GET_ALL_USER_DATA_FAILED, res });
          }
        });
    } catch (error) {
      dispatch({
        type: types.GET_ALL_USER_DATA_FAILED,
        payload:
          error.data && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const updateConpanyList = () => async (dispatch) => {
  try {
    dispatch({ type: types.PUT_COMPANYLIST_PENDING });
    const res = await axios.put(
      "http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/editCompanyProfile"
    );

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

export const extraPagedata = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_EXTRAPAGE_PENDING });
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    dispatch({ type: types.GET_EXTRAPAGE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: types.GET_EXTRAPAGE_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

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

export const CompanyDetailsAdded = (data) => async (dispatch) => {
  const tokens = localStorage.getItem("token");
  try {
    dispatch({ type: types.GET_USER_DATA_EDIT_PENDING });

    const res = await axios.put(
      `http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/editCompanyProfile`,
      data,
      {
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
      }
    );

    dispatch({ type: types.GET_USER_DATA_EDIT_SUCCESS, payload: res });
  } catch (error) {
    dispatch({
      type: types.GET_USER_DATA_EDIT_FAILED,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UserDataRemove = (id) => async (dispatch) => {
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

    dispatch({ type: types.GET_USER_DATA_REMOVE_SUCCESS, payload: res });
  } catch (error) {
    dispatch({
      type: types.GET_USER_DATA_REMOVE_FAILED,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const EditNewData = (data) => async (dispatch) => {
  const tokens = localStorage.getItem("token");
  try {
    dispatch({ type: types.GET_USER_DATA_EDIT_PENDING });
    const res = await axios.put(
      `http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/updateAddUser`,
      data,
      {
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
      }
    );
    dispatch({ type: types.GET_USER_DATA_EDIT_SUCCESS, payload: res });
  } catch (error) {
    dispatch({
      type: types.GET_USER_DATA_EDIT_FAILED,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const CompanyUserList = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_USERS_PENDING });
    const tokens = localStorage.getItem("token");
    const res = await axios.get(
      `http://rfpintels-services.eastus.cloudapp.azure.com/userservices/api/super/getListOfCompany`,
      {
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
      }
    );
    dispatch({ type: types.GET_USERS, payload: res.data });
  } catch (error) {
    dispatch({
      type: types.GET_USERS_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UserLoginAction = (data) => async (dispatch) => {
  if (data) {
    try {
      dispatch({ type: types.GET_USER_LOGIN_REQUEST });

      const res = await axios
        .post(
          `http://rfpintels-services.eastus.cloudapp.azure.com/userservices/api/auth/login`,
          data,
          {
            headers: { "content-type": "application/json" },
          }
        )
        .then((res) => res.data);

      const token = res.accessToken;

      localStorage.setItem("token", token);

      dispatch({ type: types.GET_USER_LOGIN_SUCCESS, payload: res });
    } 
    catch (error) {
      console.log(error, "error in action file");
      dispatch({
        type: types.GET_USER_LOGIN_FAIL,
        payload:
          error.data && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  }
};

export const UserForgetAction  = (data) =>  async(dispatch) => {
  console.log(data, "data in action file")

    try {
      dispatch({type : types.GET_USER_FORGET_REQUEST})
  
      const res =  await axios.post(`http://rfpintels-services.eastus.cloudapp.azure.com/userservices/api/auth/sendForgotPasswordLink?emailId=${data}`,
      // data,
      // {
      //   headers: { "content-type": "application/json" },
      // }
      ).then((res) => res.data);
      console.log(res, "res data forget data")
     dispatch({ type: types.GET_USER_FORGET_SUCCESS, payload: res });
     }    
    catch (error) { 
       dispatch({
        type: types.GET_USER_FORGET_FAIL,
        payload:
          error.data && error.response.data.message
            ? error.response.data.message
            : error.message,
      });  
    }
  
}

// export const ResetPasswordAction = (data)=> async(dispatch) =>{
//   console.log(data, "data from reset password");
//   try{
//     dispatch({type : types.GET_RESETPASSWORD_REQUEST})
//     const res = await axios.put(`http://rfpintels-services.eastus.cloudapp.azure.com/userservices/api/auth/resetPassword?token=b8434ea3-6547-437e-ad4e-1bb68c432b47&userId=62a6e768e4a2265ff5e21784&emailId=vikalp.soni@manvish.com`,
//     data,
//     {
//       headers: 
//       { "content-type": "application/json" }
//     }

//     ).then(res=>res)
//     console.log(res, "res data in action file");
//     dispatch({type : types.GET_RESETPASSWORD_SUCCESS, payload: res})

    
//   }

//   catch(error){

//   }
      
// }



