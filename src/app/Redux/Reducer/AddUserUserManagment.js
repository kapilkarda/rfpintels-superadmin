import { PUT_ADDUSERBTN_FAIL, PUT_ADDUSERBTN_PENDING, PUT_ADDUSERBTN_SUCCESS } from "../Constant/UserConstant";

const initialstate = {
    adduserndata : [],
}

export const EditCompanyList = (state= initialstate, action)=> {
      switch(action.type){
        case PUT_ADDUSERBTN_PENDING:
            return{
                loading: true,
                adduserndata : [],
            }
            case PUT_ADDUSERBTN_SUCCESS: 
            return{
                loading: false,
                adduserndata : action.payload,
            }
            case PUT_ADDUSERBTN_FAIL:
                return{
                    loading: false,
                    errer: action.payload,
                }
                default:
                    return state;
      }
}