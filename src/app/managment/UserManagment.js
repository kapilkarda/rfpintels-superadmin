import React, { useState, useEffect } from "react";
import * as types from "../Redux/Constant/UserConstant";
import "./Company.css";
import "./Styles.css";
import Modal from "react-modal";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserUserManagment,
  EditNewData,
  getAllUserData,
  UserDataRemove,
} from "../Redux/Action/UserAction";
import { Oval } from "react-loader-spinner";
import "antd/dist/antd.css";
import { Button } from "antd";
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



const UserManagment = () => {
  const dispatch = useDispatch();
  const userManagmenttabData = "hello";
  // console.log(userManagmenttabData, "userManagmenttabData123");
  const updataeddata = useSelector((state) => state.updateusermanagmentdata);
  const adduserbtndata = useSelector((state) => state.adduserbtndata);
  const deletedRes = useSelector((state) => state.getAllDataRemove.removeuser);
  console.log("deletedRes", deletedRes);
  const [isOpen, setIsOpen] = useState(false);
  const [isPageOpen, setisPageOpen] = useState(false);

  const [updateUserdata, setUpdateUserdata] = useState({});
  const [userModalInput, setUserModalInput] = useState("");
  const [index, setIndex] = useState(0);
  const [indexed, setIndexed] = useState(0);

  const [addUserbtndata, setAddUserbtndata] = useState({});
  const [eidtData, setEditData] = useState({});
  console.log("eidtData ===>>>",eidtData)

  const toggleModal = (index) => {
    setIsOpen(!isOpen);
    setIndex(index);
  };

  const toggleModaled = (indexed) => {
    setisPageOpen(!isPageOpen);
    setIndexed(indexed);
  };

  const handlelclicked = (item) => {
    dispatch(UserDataRemove(item));
  };

  
const[email,Setmail] =  useState([])
const[fname,Setfname] =  useState("");
const[lname,Setlname] = useState("");
const[title,Settitle] = useState("");
const[officeNumber,SetofficeNumber] = useState("");
const[cellNumber, setCellNumber] =useState("");
const [licenceType, setLicenceType] = useState("");










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
  // function handlebutton () {
  //   alert("hello")
  // }
  const handleUserManaModalInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value, "name && value");
    setUserModalInput({ ...userModalInput, [name]: value });
  };
  const editUserManagement = (index) => {
    console.log(index, "updateUserdata-index");
    setUpdateUserdata(userManagmenttabData[index]);
  };
  // useEffect(() => {
  //   editUserManagement(index);
  // }, [isOpen1]);

  const handleAddInput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setAddUserbtndata({ ...addUserbtndata, [name]: value });
  };
  const addUserSubmit = (e) => {
    e.preventDefault();
    if (addUserbtndata) {
      const hello = 5;
      console.log(hello, "hellolkjlkj");
      dispatch(addUserUserManagment(addUserbtndata));
    } else {
      const hello = 10;
      console.log(hello, "hellolkjlkj");
    }
  };
  const isLoading = useSelector((state) => state.getAllUserDatas.loading);
  console.log("isLoading.....", isLoading);
  const [getAllUserDatas, setGetallUserdata] = useState();
  const userss = useSelector((state) => state.getAllUserDatas);
  console.log(userss, "userss");

  useEffect(() => {
    if (userss && userss.getuserdata && userss.getuserdata.data) {
      setGetallUserdata(userss.getuserdata.data);
    }
  }, [userss]);
  console.log(getAllUserDatas, "paisujhkjhkkhjkdsfefgdg");
  useEffect(() => {
    dispatch(getAllUserData());
  }, [dispatch]);

  useEffect(() => {
    if (deletedRes && deletedRes.status === 200) {
      dispatch(getAllUserData());
      dispatch({ type: types.GET_USER_DATA_REMOVE_SUCCESS, payload: "" });
    }
  }, [deletedRes]);



  const [ data, setData ] = useState(""); 

  const handleInput = (e) => {
    e.preventDefault();
   const name = e.target.name;
   const value = e.target.value;
 setData({...data, [name]: value});    
}


  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(EditNewData(data));

  };



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
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            style={customStyles}
            contentLabel="My dialog"
          >
            <form onSubmit={addUserSubmit}>
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
                    Email Address
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
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn border-0 modal-save-btn"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-info">
                  Add User
                </button>
              </div>
              {/* <button >Close modal</button> */}
            </form>
          </Modal>
        </div>
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

      <div className="comp-table-div1">
        <div className="comp-table1"></div>
      </div>
      <div>
        <div className="comp-table-div">
          <div className="comp-table">
            <table className="table table-striped company-table">
              <thead className="thead-table">
                <tr className="table-first-row text-center">
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
                          {/* <Button
                            type="button"
                            className="btn btn-secondary comp-edit-btn m-1"
                            onClick={showModal}
                          >
                            Edit
                          </Button> */}

                          <button
                            className="btn btn-secondary comp-edit-btn m-1"
                            onClick={toggleModaled}
                          >
                            Edit
                          </button>

                          <Modal
                            isOpen={isPageOpen}
                            onRequestClose={toggleModaled}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <form onSubmit={e => handleEditSubmit(e)}>
                              <div>Edit User</div>
                              <hr></hr>
                              <div className="container">
                                <div className="row">
                                  <div className="col-sm-2">
                                    <label
                                      for="exampleFormControlInput1"
                                      class="form-label mt-2"
                                    >
                                      Email Address
                                    </label>
                                  </div>
                                  <div className="col-sm-1 mt-2">:</div>
                                  <div className="col-sm-9">
                                    <input
                                      type="text"
                                      // value={email}
                                     
                                      class="form-control"
                                      id="exampleFormControlInput1"
                                      placeholder="enter your email address"
                                      onChange={handleInput}
                                      defaultValue={getAllUserDatas[0].email}
                                      // onChange={e => onInputChange(e)}
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
                                      // onChange={handleinputFirstName}
                                    >
                                      First Name
                                    </label>
                                  </div>
                                  <div className="col-sm-1 mt-2">:</div>
                                  <div className="col-sm-9">
                                    <input
                                      type="text"
                                      // value={firstName}
                                     
                                     
                                      className="form-control"
                                      id="exampleFormControlInput1"
                                      placeholder="first name"
                                      defaultValue={getAllUserDatas[0].firstName}
                                      onChange={handleInput}
                                      // onChange={e => onInputChange(e)}
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
                                      Last Name
                                    </label>
                                  </div>
                                  <div className="col-sm-1 mt-2">:</div>
                                  <div className="col-sm-9">
                                    <input
                                      type="text"
                                      // value={lastName}
                                     
                                  

                                      className="form-control"
                                      id="exampleFormControlInput1"
                                      placeholder="Last Name"
                                      defaultValue={getAllUserDatas[0].lastName} 
                                      onChange={handleInput}
                                      // onChange={e => onInputChange(e)}
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
                                      Title
                                    </label>
                                  </div>
                                  <div className="col-sm-1 mt-1">:</div>
                                  <div className="col-sm-9">
                                    <input
                                      type="text"
                                      // value={title}
                                      
                                      className="form-control"
                                      id="exampleFormControlInput1"
                                      placeholder="enter your title"
                                     
                                      onChange={handleInput}
                                   
                                      defaultValue={getAllUserDatas[0].title}
                                      // onChange={e => onInputChange(e)}
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
                                      Office Number
                                    </label>
                                  </div>
                                  <div className="col-sm-1 mt-2">:</div>
                                  <div className="col-sm-9">
                                    <input
                                      type="text"
                                      // value={officeNumber}
                                    
                                      className="form-control"
                                      id="exampleFormControlInput1"
                                      placeholder="Enter your Mobile Number"
                                      
                                      defaultValue={
                                        getAllUserDatas[0].officeNumber
                                      }
                                      // onChange={e => onInputChange(e)}
                                    
                                      onChange={handleInput}
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
                                      Cell number
                                    </label>
                                  </div>
                                  <div className="col-sm-1 mt-2">:</div>
                                  <div className="col-sm-9">
                                    <input
                                      type="text"
                                      // value={cellNumber}
                                     
                                      className="form-control"
                                      id="exampleFormControlInput1"
                                      placeholder="Enter your cell Number"
                                    
                                      // onChange={e => onInputChange(e)}
                                      onChange={handleInput}
                                      defaultValue={getAllUserDatas[0].cellNumber}
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
                                      License Type
                                    </label>
                                  </div>
                                  <div className="col-sm-1 mt-2">:</div>
                                  <div className="col-sm-9">
                                    <input
                                      type="text"
                                      // value={licenceType}
                                     
                                      className="form-control"
                                      id="exampleFormControlInput1"
                                      placeholder="Enter your cell Number"
                                      onChange={handleInput}
                                      // onChange={e => onInputChange(e)}
                                      defaultValue={getAllUserDatas[0].cellNumber}
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
                                  // onClick={() => handleEditSubmit(item.id)}
                                >
                                  Save
                                </button>
                              </div>
                            </form>
                          </Modal>

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
          </div>
        </div>
      </div>
      <div>
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
export default UserManagment;
