import { combineReducers  } from "redux";
import UserReducers from "../Reducer/UserReducer";
// import PaidUser from "./FreeUser";
import FreeUser from "./FreeUser";
import PaidUser from "./PaidUser";
import UserList from "./UserList";
import { ExtraPageapi, UpdateUserManagment } from "./ExtraPageapi";
import {EditCompanyList}  from "./EditCompanyList";
import { addUserUserManagment } from "../Action/UserAction";
 
const RootReducer = combineReducers ({
  
    data : UserReducers,
    freeuserdata : FreeUser,
    paiduserdata : PaidUser,
    userlistdata : UserList,
    extrapageapi : ExtraPageapi,
    editcompanylistdata : EditCompanyList,
    updateusermanagmentdata : UpdateUserManagment,
    adduserbtndata:  addUserUserManagment,
})

export default RootReducer;