import React, { useState, useEffect } from "react";
import "../../../src/assets/styles/Styles.css";
import * as types from "../Redux/Constant/UserConstant";
import Modal from "react-modal";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import {
  addUserUserManagment,
  EditNewData,
  getAllUserData,
  UserDataRemove,
} from "../Redux/Action/UserAction";
import { Oval } from "react-loader-spinner";
import "antd/dist/antd.css";


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
    height: "70vh",
  },
};
Modal.setAppElement("#root");
const UserManagment = () => {
  const dispatch = useDispatch();

  const deletedRes = useSelector((state) => state.getAllDataRemove.removeuser);
  const [isOpen, setIsOpen] = useState(false);
  const [isPageOpen, setisPageOpen] = useState(false);

  const [setIndex] = useState(0);

  const [addUserbtndata, setAddUserbtndata] = useState({});



  const toggleModal = (index) => {
    setIsOpen(!isOpen);
    setIndex(index);
  };

  const handlelclicked = (item) => {
    dispatch(UserDataRemove(item));
  };
  const [email, setEmail] = useState("");
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [title, setTitle] = useState("");
  const [officeNumber, setOfficeNumber] = useState("");
  const [cellNumber, setCellNumber] = useState("");
  const [licenceType, setLicenceType] = useState("");
  const [userId, setUserId] = useState(null);
  const toggleModaled = (item) => {
    setisPageOpen(!isPageOpen);
    setEmail(item.email);
    setLname(item.lastName);
    setFname(item.firstName);
    setTitle(item.title);
    setOfficeNumber(item.officeNumber);
    setCellNumber(item.cellNumber);
    setLicenceType(item.licenceType);
    setUserId(item.id);
  };
  

  const handleAddInput = (e) => {
    e.preventDefault(handleAddInput, "anilloodajfjbfsj");
    const name = e.target.name;
    const value = e.target.value;
    setAddUserbtndata({ ...addUserbtndata, [name]: value });
  };
 
  const addUserSubmit = (addUserbtndata) => {
    if (addUserbtndata) {
      dispatch(addUserUserManagment(addUserbtndata));
    }
  };
  function handlesubmits() {
    const editdata = {
      userId: userId,
      email: email,
      firstName: firstName,
      lastName: lastName,
      title: title,
      officeNumber: officeNumber,
      cellNumber: cellNumber,
      licenceType: licenceType,
    };
    console.log("aaa", editdata);
    dispatch(EditNewData(editdata));
  }
  const isLoading = useSelector((state) => state.getAllUserDatas.loading);
  console.log("isLoading.....", isLoading);
  const [getAllUserDatas, setGetallUserdata] = useState();
  const userss = useSelector((state) => state.getAllUserDatas);

  useEffect(() => {
    if (userss && userss.getuserdata && userss.getuserdata.data) {
      setGetallUserdata(userss.getuserdata.data);
    }
  }, [userss]);

  useEffect(() => {
    dispatch(getAllUserData());
  }, [dispatch]);
  useEffect(() => {
    if (deletedRes && deletedRes.status === 200) {
      dispatch(getAllUserData());
      dispatch({ type: types.GET_USER_DATA_REMOVE_SUCCESS, payload: "" });
    }
  }, [deletedRes,dispatch]);
  return (
    <>
      <div className="d-flex">
        <div className="mr-auto p-2 page-header">
          {" "}
          <h3 className="page-title page-title-heading">List of Users</h3>
        </div>
        <div className="p-2">
          <button className="adduser-btn border-0" onClick={toggleModal}>
            Add User
          </button>
          <Modal isOpen={isOpen} style={customStyles} contentLabel="My dialog">
            <div>
              <div className="d-flex flex-row modal-firstdiv">
                <div className="p-2 modal-heading">
                  <h1 className="modal-heading-fontfamily">Add User</h1>
                </div>
              </div>
              <div className="modal-form-div">
                <div className="form-group modal-input-data-div row mt-4">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-2 col-form-label ml-4"
                  >
                    Email Address....
                  </label>
                  <div className="col-sm-1 col modal-colan">:</div>
                  <div className="col-sm-8">
                    <input
                      type="email"
                      className="form-control modal-firstinput"
                      name="email"
                      onChange={handleAddInput}
                      id="inputPassword"
                    />
                  </div>
                </div>
                <div className="form-group modal-input-data-div row mt-4">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-2 col-form-label ml-4"
                  >
                    First Name
                  </label>
                  <div className="col-sm-1 col modal-colan">:</div>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control modal-firstinput"
                      id="inputPassword"
                      name="firstName"
                      onChange={handleAddInput}
                    />
                  </div>
                </div>
                <div className="form-group modal-input-data-div row mt-4">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-2 col-form-label ml-4"
                  >
                    Last Name
                  </label>
                  <div className="col-sm-1 col modal-colan">:</div>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control modal-firstinput"
                      id="inputPassword"
                      name="lastName"
                      onChange={handleAddInput}
                    />
                  </div>
                </div>
                <div className="form-group modal-input-data-div row mt-4">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-2 col-form-label ml-4 corporate-certification-div"
                  >
                    Title
                  </label>
                  <div className="col-sm-1 col modal-colan">:</div>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control modal-firstinput"
                      id="inputPassword"
                      name="title"
                      onChange={handleAddInput}
                    />
                  </div>
                </div>
                <div className="form-group modal-input-data-div row mt-4">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-2 col-form-label ml-4"
                  >
                    Office Number
                  </label>
                  <div className="col-sm-1 col modal-colan">:</div>
                  <div className="col-sm-8">
                    <input
                      type="number"
                      className="form-control modal-firstinput"
                      id="inputPassword"
                      name="officeNumber"
                      onChange={handleAddInput}
                    />
                  </div>
                </div>
                <div className="form-group modal-input-data-div row mt-4">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-2 col-form-label ml-4"
                  >
                    Cell number
                  </label>
                  <div className="col-sm-1 col modal-colan">:</div>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control modal-firstinput"
                      id="inputPassword"
                      name="cellNumber"
                      onChange={handleAddInput}
                    />
                  </div>
                </div>
                <div className="form-group modal-input-data-div row mt-4">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-2 col-form-label ml-4"
                  >
                    License Type
                  </label>
                  <div className="col-sm-1 col modal-colan">:</div>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control modal-firstinput"
                      id="inputPassword"
                      name="licenceType"
                      onChange={handleAddInput}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn border-0 modal-save-btn"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={() => addUserSubmit(addUserbtndata)}
                  className="btn btn-info"
                >
                  Add User
                </button>
              </div>
            </div>
          </Modal>
        </div>
        <div className="p-2">
          <div>
            <div>
              <div className="search-field d-none d-md-block">
                <form className="d-flex align-items-center h-100" action="/#">
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
      <div className="comp-table-div1">
        <div className="comp-table1"></div>
      </div>
      <div>
        <div className="comp-table-div">
          <div className="comp-table">
            <table className="table table-striped company-table">
              <thead className="thead-table">
                <tr className="table-first-row ">
                  <th scope="col" className="comp-name-th">
                    Name
                  </th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Company Name</th>
                  <th scope="col" className="text-left">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {getAllUserDatas && !isLoading ? (
                  getAllUserDatas.map((item, index) => (
                    <tr key={item.id}>
                      <td className="comp-name-th">{item.firstName}</td>
                      <td>{item.email}</td>
                      <td>{item.cellNumber}</td>
                      <td>{item.companyName}</td>
                      <td>
                        <div className="d-flex justify-content-center ">
                          <button
                            className="btn btn-secondary comp-edit-btn m-1"
                            onClick={() => toggleModaled(item)}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn usermana-dele-btn m-1"
                            onClick={() => handlelclicked(item.id)}
                          >
                            Delete
                          </button>
                        </div>
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
              isOpen={isPageOpen}
              onRequestClose={toggleModaled}
              contentLabel="My dialog"
              style={customStyles}
              closeTimeoutMS={500}
            >
              <div>
                <div modal-heading-fontfamily>Edit User</div>
                <hr></hr>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-2">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label mt-2"
                      >
                        Email Address
                      </label>
                    </div>
                    <div className="col-sm-1 mt-2">:</div>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        value={email}
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="enter your email address"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="container mt-3">
                  <div className="row">
                    <div className="col-sm-2">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label mt-2"
                      >
                        First Name
                      </label>
                    </div>
                    <div className="col-sm-1 mt-2">:</div>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        value={firstName}
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="first name"
                        onChange={(e) => setFname(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="container mt-3">
                  <div className="row">
                    <div className="col-sm-2">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label mt-2"
                      >
                        Last Name
                      </label>
                    </div>
                    <div className="col-sm-1 mt-2">:</div>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        value={lastName}
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Last Name"
                        onChange={(e) => setLname(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="container mt-3">
                  <div className="row">
                    <div className="col-sm-2">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label mt-2"
                      >
                        Title
                      </label>
                    </div>
                    <div className="col-sm-1 mt-1">:</div>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        value={title}
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="enter your title"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="container mt-3">
                  <div className="row">
                    <div className="col-sm-2">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label mt-2"
                      >
                        Office Number
                      </label>
                    </div>
                    <div className="col-sm-1 mt-2">:</div>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        value={officeNumber}
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter your Mobile Number"
                        onChange={(e) => setOfficeNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="container mt-3">
                  <div className="row">
                    <div className="col-sm-2">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label mt-2"
                      >
                        Cell number
                      </label>
                    </div>
                    <div className="col-sm-1 mt-2">:</div>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        value={cellNumber}
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter your cell Number"
                        onChange={(e) => setCellNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="container mt-3">
                  <div className="row">
                    <div className="col-sm-2">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label mt-2"
                      >
                        License Type
                      </label>
                    </div>
                    <div className="col-sm-1 mt-2">:</div>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        value={licenceType}
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter your cell Number"
                        onChange={(e) => setLicenceType(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-right mt-2">
                  <button type="submit" className="btn">
                    cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-info"
                   
                    onClick={handlesubmits}
                  >
                    Save
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
      <div>
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
export default UserManagment;


