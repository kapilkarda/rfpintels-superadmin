import { combineReducers  } from "redux";
import UserReducers from "../Reducer/UserReducer";

import FreeUser from "./FreeUser";
import PaidUser from "./PaidUser";
import UserList from "./UserList";
import { ExtraPageapi, UpdateUserManagment } from "./ExtraPageapi";
import {EditCompanyList}  from "./EditCompanyList";
import { addUserUserManagment, CompanyDetailsAdded } from "../Action/UserAction";
import { userApproved } from "../Action/UserAction";
import UserDeny from "./UserDeny";

import GetAllUserData from "./GetAllUserData";
import UserRemoveData from "./UserRemoveData";
import EditManagementUser from "./EditManagementUser";


 
const RootReducer = combineReducers ({

  
    data : UserReducers,
    freeuserdata : FreeUser,
    paiduserdata : PaidUser,
   
    extrapageapi : ExtraPageapi,
    editcompanylistdata : EditCompanyList,
    updateusermanagmentdata : UpdateUserManagment, 
    adduserbtndata:  addUserUserManagment,
    userApproveded : userApproved,
    userDenys : UserDeny, 
    // usernamecompany: CompanyDetailsAdded,
    getAllUserDatas: GetAllUserData,
    getAllDataRemove: UserRemoveData,
    Editmanagementuser: EditManagementUser,


 
    



   

    // userApproved


})

export default RootReducer;
