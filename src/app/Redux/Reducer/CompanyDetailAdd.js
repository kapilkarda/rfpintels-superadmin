import { GET_COMPANY_DETAIL_ADD_PENDING, GET_COMPANY_DETAIL_ADD, GET_COMPANY_DETAIL_ADD_FAIL } from "../Constant/UserConstant";

const initialstate = {
    editcompanydata : [],
}

export const CompanyDetailAdd = (state= initialstate, action)=> {
      switch(action.type){
        case GET_COMPANY_DETAIL_ADD_PENDING:
            return{
                loading: true,
                editcompanydata : [],
            }
            case GET_COMPANY_DETAIL_ADD: 
            return{
                loading: false,
                editcompanydata: action.payload,
            }
            case GET_COMPANY_DETAIL_ADD_FAIL:
                return{
                    loading: true,
                    errer: action.payload,
                }
                default:
                    return state;
      }
}
