import { combineReducers } from "redux";
import UserReducers from "../Reducer/UserReducer";

import FreeUser from "./FreeUser";
import PaidUser from "./PaidUser";

import { ExtraPageapi, UpdateUserManagment } from "./ExtraPageapi";
import { EditCompanyList } from "./EditCompanyList";
import {
  addUserUserManagment,
  
} from "../Action/UserAction";
import { userApproved } from "../Action/UserAction";
import UserDeny from "./UserDeny";

import GetAllUserData from "./GetAllUserData";
import UserRemoveData from "./UserRemoveData";
import EditManagementUser from "./EditManagementUser";
import UserLoginReducer from "./UserLoginReducer";
import UserForgetReducer from "./UserLoginForget";




const RootReducer = combineReducers({
  data: UserReducers,
  freeuserdata: FreeUser,
  paiduserdata: PaidUser,

  extrapageapi: ExtraPageapi,
  editcompanylistdata: EditCompanyList,
  updateusermanagmentdata: UpdateUserManagment,
  adduserbtndata: addUserUserManagment,
  userApproveded: userApproved,
  userDenys: UserDeny,
  
  getAllUserDatas: GetAllUserData,
  getAllDataRemove: UserRemoveData,
  Editmanagementuser: EditManagementUser,

  userloginreducer: UserLoginReducer,
  userforgetreducer: UserForgetReducer,








  // userApproved
});

export default RootReducer;
