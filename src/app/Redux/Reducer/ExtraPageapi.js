import {
  GET_EXTRAPAGE_PENDING,
  GET_EXTRAPAGE_SUCCESS,
  GET_EXTRAPAGE_FAIL,
  PUT_COMPANYLIST_FAIL,
  PUT_COMPANYLIST_SUCCESS,
  PUT_COMPANYLIST_PENDING,
  PUT_USERMANAGMENT_FAIL,
  PUT_USERMANAGMENT_SUCCESS,
} from "../Constant/UserConstant";

const initialstate = {
  editcompanydata: [],
};
const intialstate = {
  extrauser: [],
};

export const EditCompanyList = (state = initialstate, action) => {
  switch (action.type) {
    case PUT_COMPANYLIST_PENDING:
      return {
        loading: true,
        editcompanydata: [],
      };
    case PUT_COMPANYLIST_SUCCESS:
      return {
        loading: false,
        editcompanydata: action.payload,
      };
    case PUT_COMPANYLIST_FAIL:
      return {
        loading: false,
        errer: action.payload,
      };
    default:
      return state;
  }
};

export const UpdateUserManagment = (
  state = { updateusermanagment: [] },
  action
) => {
  switch (action.type) {
    case PUT_COMPANYLIST_PENDING:
      return {
        loading: true,
        updateusermanagment: [],
      };
    case PUT_USERMANAGMENT_SUCCESS:
      return {
        loading: false,
        updateusermanagment: action.payload,
      };
    case PUT_USERMANAGMENT_FAIL:
      return {
        loading: true,
        errer: action.payload,
      };
    default:
      return state;
  }
};

export const ExtraPageapi = (state = intialstate, action) => {
  switch (action.type) {
    case GET_EXTRAPAGE_PENDING:
      return {
        loading: true,
        extrauser: [],
      };

    case GET_EXTRAPAGE_SUCCESS:
      return {
        loading: false,
        extrauser: action.payload,
      };

    case GET_EXTRAPAGE_FAIL:
      return {
        loading: true,
        errer: action.payload,
      };
    default:
      return state;
  }
};
