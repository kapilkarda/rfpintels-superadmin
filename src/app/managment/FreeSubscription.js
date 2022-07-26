import React, { useEffect } from "react";
import "./Company.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";
import { styled } from "@mui/material/styles";


import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  freeUserdata,
  userApproved,
  UserDenyed,
} from "../Redux/Action/UserAction";

const FreeSubscription = () => {
  const dispatch = useDispatch();
  
  const handleOnclick = (value) => {
    dispatch(userApproved(value));
  };

  const handleOnclicked = (value) => {
    dispatch(UserDenyed(value));
  };






  const userApproveApiData = useSelector((state) => state.userApproveded); //RootReducer
  console.log();

  // TABLE Data
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
 
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];


  // TABLE DATA

  const freeuserdata = useSelector((state) => state.freeuserdata);
  console.log(freeuserdata, "paid subscription data hello 123");
  console.log(freeuserdata.freeuser, "freeuserdata123-1235+123");

  useEffect(() => {
    dispatch(freeUserdata());
  }, [dispatch]);

  return (
    <>
      <div className="comp-table-div">
        <div className="comp-table">
          <table className="table table-striped company-table">
            <thead className="thead-table">
              <tr className="table-first-row text-center">
                <th scope="col" className="comp-name-th">
                  Company Name
                </th>
                <th scope="col">Email</th>
                <th scope="col">Plan Type</th>
                <th scope="col" className="text-center">
                  Start Date
                </th>
                <th scope="col" className="text-center">
                  Status
                </th>
                <th scope="col" className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {freeuserdata.freeuser &&
                freeuserdata.freeuser.map((item) => (
                  <tr key={item.id} className="free-sub-table-data">
                    <td className="comp-name-th">{}</td>
                    <td>{item.email}</td>
                    <td className="text-center">{item.planName}</td>
                    <td className="text-center">{item.startDate}</td>
                    <td className="text-center">{item.status}</td>
                    <td>
                      <div className="d-flex justify-content-center ">
                        <button
                          type="button"
                          className="btn btn-secondary free-sub-appro-btn m-1"
                          onClick={() => handleOnclick(item.email)}
                        >
                          Approve
                        </button>

                        <button
                          type="button"
                          className="btn free-sub-deny-btn m-1"
                          onClick={() => handleOnclicked(item.email)}
                        >
                          Deny
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <nav aria-label="Page navigation example">
          <div className="d-flex justify-content-between">
            <ul className="pagination justify-content-center mt-2">
              <li className="page-item">
                <a className="page-link text-left previous-keyword" href="#">
                  <span>
                    <AiOutlineLeft />
                  </span>
                  Previous
                </a>
              </li>
            </ul>
            <ul className="pagination justify-content-center mt-2">
              <li className="page-item">
                <a className="page-link next-keyword" href="#">
                  1 of 5
                </a>
              </li>
            </ul>
            <ul className="pagination justify-content-center mt-2">
              <li className="page-item">
                <a className="page-link next-keyword" href="#">
                  Next
                  <span>
                    <AiOutlineRight />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default FreeSubscription;
