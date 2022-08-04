import React, { useState } from "react";
import "./Company.css";
import "../../../src/assets/styles/Company.css";
import Modal from "react-modal";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useEffect } from "react";


import { useDispatch, useSelector } from "react-redux";
import {
  CompanyDetailsAdded,
  CompanyUserList,
} from "../Redux/Action/UserAction";
import { Oval } from "react-loader-spinner";
Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "60%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ffffff",
    padding: 0,
    width: "70%",
    height: "62vh",
  },
};
const Company = ({ data }) => {
  let dispatch = useDispatch();
  const [isPageOpens, setIsOpens] = useState(false);
  const [indexs] = useState(0);
  const [address, setAddress] = useState("");
  const [duns, setDuns] = useState("");
  const [cage, setCage] = useState("");
  const [corporateCertification, setCorporateCertification] = useState("");
  const [keyWords, setKeyWords] = useState("");
  const [capabilityBriefing, setCapabilityBriefing] = useState("");
  const [websites, setWebsites] = useState("");
  const [userIds, setUserIds] = useState("");
  const toggleModals = (item) => {
    setIsOpens(!isPageOpens);

    setAddress(item.address);
    setDuns(item.duns);
    setCage(item.cage);
    setCorporateCertification(item.corporateCertification);
    setKeyWords(item.keyWords);
    setCapabilityBriefing(item.capabilityBriefing);
    setWebsites(item.websites);
    setUserIds(item.id);
  };
  function handleEditSubmited() {
    const editdatas = {
      userIds: userIds,
      address: address,
      duns: duns,
      cage: cage,
      corporateCertification: corporateCertification,
      keyWords: keyWords,
      capabilityBriefing: capabilityBriefing,
      websites: websites,
    };




    console.log("aaa", editdatas);
    dispatch(CompanyDetailsAdded(editdatas));
    setIsOpens(!isPageOpens);
  }

  const { users } = useSelector((state) => state.data); //RootReducer
  const isLoading = useSelector((state) => state.data.loading);
  const EditCompanyRes = useSelector((state) => state.data.users);
  useEffect(() => {
    if (EditCompanyRes && EditCompanyRes.status === 200) {
      dispatch(data());
      setIsOpens(!isPageOpens);
    }
    // eslint-disable-next-line
  }, [EditCompanyRes, isPageOpens, dispatch]);

  useEffect(() => {
    dispatch(CompanyUserList());
  }, [dispatch]);

  return (
    <>
      <div className="page-header">
        <h3 className="page-title page-title-heading">List of Company</h3>
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
      <div className="comp-table-div1">
        <div className="comp-table1"></div>
      </div>
      <div className="comp-table-div">
        <div className="comp-table">
          <table className="table table-striped">
            <thead className="thead-table">
              <tr className="table-first-row">
                <th scope="col" className="comp-name-th">
                  Company Name
                </th>
                <th scope="col">Duns Number</th>
                <th scope="col">POC Email</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users && !isLoading ? (
                users.map((item, index) => (
                  <tr key={item.id}>
                    <td className="comp-name-th">{item.companyName}</td>
                    <td>{item.duns}</td>
                    <td>{item.pocEmail}</td>
                    <td className="complete-keyword">{item.address}</td>
                    <td className="text-center">
                      <button
                        type="button"
                        className="btn btn-secondary comp-edit-btn align-center "
                        onClick={() => toggleModals(item)}
                       
                      >
                        Edit
                      </button>

                    </td>
                  </tr>
                ))
              ) : (
                <div style={{ marginLeft: 500 }}>
                  <Oval color="black" height={80} width={80} />
                </div>
              )}
            </tbody>
          </table>
          <Modal
            isOpen={isPageOpens}
            onRequestClose={toggleModals}
            contentLabel="My dialog"
            style={customStyles}
            closeTimeoutMS={500}
          >
            <div>
              <div
                className="mt-2 mx-3 font-weight-bold font-weight-normal"
                style={{ color: "#334D6E" }}
              >
                The Walt Disney Company
              </div>
              <hr></hr>
              <div className="container">
                <div className="row">
                  <div className="col-sm-2">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label mt-2"
                    >
                      Address
                    </label>
                  </div>
                  <div className="col-sm-1 mt-2">:</div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      value={address}
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="enter your email address"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="container mt-3">
                <div className="row">
                  <div className="col-sm-2">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label mt-2"
                    >
                      DUNS
                    </label>
                  </div>
                  <div className="col-sm-1 mt-2">:</div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      value={duns}
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="first name"
                      onChange={(e) => setDuns(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="container mt-3">
                <div className="row">
                  <div className="col-sm-2">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label mt-2"
                    >
                      CAGE
                    </label>
                  </div>
                  <div className="col-sm-1 mt-2">:</div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      value={cage}
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Last Name"
                      onChange={(e) => setCage(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="container mt-3">
                <div className="row">
                  <div className="col-sm-2">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label mt-2"
                    >
                      POC Email
                    </label>
                  </div>
                  <div className="col-sm-1 mt-2">:</div>
                  <div className="col-sm-9">
                    <select
                      class="form-select"
                      style={{ width: "100%", height: "100%" }}
                      aria-label="Default select example"
                    >
                      <option selected>XYZ@company.com</option>
                      <option value={indexs.pocEmail}>One</option>
                      <option value={indexs.pocEmail}>Two</option>
                      <option value={indexs.pocEmail}>Three</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="container mt-3">
                <div className="row">
                  <div className="col-sm-2">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label mt-2"
                    >
                      Set-Aside
                    </label>
                  </div>
                  <div className="col-sm-1 mt-2">:</div>
                  <div className="col-sm-9">
                    <select
                      class="form-select"
                      style={{ width: "100%", height: "100%" }}
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value={indexs.setAside}>One</option>
                      <option value={indexs.setAside}>Two</option>
                      <option value={indexs.setAside}>Three</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="container mt-3">
                <div className="row">
                  <div className="col-sm-2">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label mt-2"
                    >
                      Corporate Certifications
                    </label>
                  </div>
                  <div className="col-sm-1 mt-2">:</div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      value={corporateCertification}
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter your Mobile Number"
                      onChange={(e) =>
                        setCorporateCertification(e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="container mt-3">
                <div className="row">
                  <div className="col-sm-2">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label mt-2"
                    >
                      NAICS Codes
                    </label>
                  </div>
                  <div className="col-sm-1 mt-2">:</div>
                  <div className="col-sm-9">
                    <select
                      class="form-select"
                      style={{ width: "100%", height: "100%" }}
                      aria-label="Default select example"
                    >
                      <option selected> 541512, 541511, 541611, 541300</option>
                      <option value={indexs.naicsCodes}>One</option>
                      <option value={indexs.naicsCodes}>Two</option>
                      <option value={indexs.naicsCodes}>Three</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="container mt-3">
                <div className="row">
                  <div className="col-sm-2">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label mt-2"
                    >
                      Keywords
                    </label>
                  </div>
                  <div className="col-sm-1 mt-1">:</div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      value={keyWords}
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="enter your title"
                      onChange={(e) => setKeyWords(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="container mt-3">
                <div className="row">
                  <div className="col-sm-2">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label mt-2"
                    >
                      Capability Briefing
                    </label>
                  </div>
                  <div className="col-sm-1 mt-2">:</div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      value={capabilityBriefing}
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter your Mobile Number"
                      onChange={(e) => setCapabilityBriefing(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="container mt-3">
                <div className="row">
                  <div className="col-sm-2">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label mt-2"
                    >
                      Website
                    </label>
                  </div>
                  <div className="col-sm-1 mt-2">:</div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      value={websites}
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter your cell Number"
                      onChange={(e) => setWebsites(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="text-right mt-2">
                <button type="submit" className="btn" 
                  onClick={handleEditSubmited}
                >
                  cancel
                </button>
                
                <button
                  type="submit"
                  className="btn btn-info"
                  onClick={handleEditSubmited}
                >
                  Save
                </button>
              </div>
            </div>
          </Modal>
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
                <li className="page-item">
                  <a className="page-link" href="/#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/#">
                    3
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
      </div>
    </>
  );
};
export default Company;
