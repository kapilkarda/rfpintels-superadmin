import React, { useEffect } from "react";
import "./Company.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";



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

  console.log();

  

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
                <a className="page-link text-left previous-keyword" href="/#">
                  <span>
                    <AiOutlineLeft />
                  </span>
                  Previous
                </a>
              </li>
            </ul>
            <ul className="pagination justify-content-center mt-2">
              <li className="page-item">
                <a className="page-link next-keyword" href="/#">
                  1 of 5
                </a>
              </li>
            </ul>
            <ul className="pagination justify-content-center mt-2">
              <li className="page-item">
                <a className="page-link next-keyword" href="/#">
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
