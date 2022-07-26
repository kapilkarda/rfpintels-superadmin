import React, { useState, useEffect } from "react";
import "./Company.css";
import { Oval } from "react-loader-spinner";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { paidUserdata } from "../Redux/Action/UserAction";
import { useDispatch, useSelector } from "react-redux";
import FreeSubscription from "./FreeSubscription";
import { Switch } from "antd";
const SubscriberManagment = () => {
const [plans, setPlans] = useState(false);
const handleTable = (e) => {
setPlans(!plans);
};

let dispatch = useDispatch();
const paiduserdata = useSelector((state) => state.paiduserdata);
console.log(paidUserdata , "anillodha")
console.log(paiduserdata, "lsjdflkjsdlfkpaiduserdata")
console.log(paiduserdata.paiduser, "paid subscription data hello 45825");
useEffect(() => {
dispatch(paidUserdata());
}, [dispatch]);
const onChangeplan = (checked) => {
console.log(`switch to ${checked}`);
setPlans(!plans);
};
const isLoading = useSelector(state => state.paiduserdata && state.paiduserdata.loading);
console.log('isLoading',isLoading)
return (
<div>
   <div className="d-flex">
      <div className="mr-auto p-2 page-header">
         <h3 className="page-title page-title-heading">
            List of Subscription
         </h3>
      </div>
      <span
      className={
      plans
      ? "unselected-paid-subscription mr-5"
      : "selected-paid-subscription mr-5"
      }
      >
      Paid Subscription
      </span>
      <Switch defaultChecked onChange={onChangeplan} className="switch-btn" />
      <span className={plans ? "unselected-trial-subscription": "selected-trial-subscription"}>Trial Subscription</span>
      <div className="p-2">
         <div>
            <div>
               <div className="search-field d-none d-md-block">
                  <form className="d-flex align-items-center h-100" action="#">
                     <div className="input-group">
                        <input
                           type="text"
                           className="form-control bg-transparent border-0"
                           placeholder="Search"
                           />
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
   {plans ? (
   <div className="comp-table-div">
      <div className="comp-table">
         <table className="table table-striped company-table">
            <thead className="thead-table">
               <tr className="table-first-row text-center ">
                  <th scope="col" className="comp-name-th">
                     Company Name
                  </th>
                  <th scope="col ">Email</th>
                  <th scope="col">Plan Type</th>
                  <th scope="col">Start Date</th>
                  <th scope="col" className="text-left">
                     Action
                  </th>
               </tr>
            </thead>
            <tbody>
               {paiduserdata && !isLoading ?
               paiduserdata.paiduser.map((item) => (
               <tr key={item.id}>
                  <td className="comp-name-th">{}</td>
                  <td>{item.email}</td>
                  <td>{item.planName}</td>
                  <td>{item.startDate}</td>
                  <td className="text-center">
                     <button
                        type="button"
                        className="btn btn-secondary comp-edit-btn"
                        
                        >
                     Edit
                     </button>
                  </td>
               </tr>
               ))
               : <div style={{ marginLeft: 500 }}>
               <Oval color="black" height={80} width={80} />
      </div>
      }
      </tbody>
      </table>
   </div>
   <nav aria-label="Page navigation example">
      <div class="d-flex justify-content-between">
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
) : (
<div>
   <FreeSubscription />
</div>
)}
</div>
);
};
export default SubscriberManagment;