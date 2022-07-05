import { PUT_COMPANYLIST_FAIL, PUT_COMPANYLIST_SUCCESS, PUT_COMPANYLIST_PENDING } from "../Constant/UserConstant";

const initialstate = {
    editcompanydata : [],
}

export const EditCompanyList = (state= initialstate, action)=> {
      switch(action.type){
        case PUT_COMPANYLIST_PENDING:
            return{
                loading: true,
                editcompanydata : [],
            }
            case PUT_COMPANYLIST_SUCCESS: 
            return{
                loading: false,
                editcompanydata: action.payload,
            }
            case PUT_COMPANYLIST_FAIL:
                return{
                    loading: false,
                    errer: action.payload,
                }
                default:
                    return state;
      }
}
