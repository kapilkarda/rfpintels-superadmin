import React, { useState, useEffect } from "react";
import "./Company.css";
import Modal from "react-modal";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import axios from "axios";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { userListData, updateUserManagment, addUserUserManagment } from "../Redux/Action/UserAction";

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
  let dispatch = useDispatch();
  const apiData = useSelector((state) => state.userlistdata); //RootReducer
  console.log(apiData.userlist, "state apiData");
  const userManagmenttabData = apiData.userlist;
  console.log(userManagmenttabData, "userManagmenttabData123");
  const updataeddata = useSelector((state) => state. updateusermanagmentdata);
  console.log(updataeddata, "updated  updateusermanagmentdata");
  const adduserbtndata = useSelector((state) => state.adduserbtndata);
  console.log(adduserbtndata, "adduserbtndata,adduserbtndata")

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [updateUserdata, setUpdateUserdata] = useState({});
  const [userModalInput, setUserModalInput] = useState("");
  const [index, setIndex] = useState(0);
  const [addUserbtndata, setAddUserbtndata] = useState({});
  function toggleModal() {
    // e.preventDefault()
    setIsOpen(!isOpen);
  }
  const toggleModalUser = (index, ) => {
    // e.preventDefault()
    setIsOpen1(!isOpen1);
    setIndex(index);
  };
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
    // hide last border
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
  // const classes = useStyles();
 
  // console.log(userlistdata, "users-management data");

  useEffect(() => {
    dispatch(userListData());
  }, [dispatch]);
  const handleUserManaModalInput = (e)=> {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value, "name && value");
    setUserModalInput({...userModalInput, [name]: value })
  }

  const editUserManagement = (index) => {
    console.log(index, "updateUserdata-index");
    setUpdateUserdata(userManagmenttabData[index]);
  };
  useEffect(() => {
    editUserManagement(index);
  }, [isOpen1]);
  const handleAddInput = (e)=> {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value, "name && value handleAddInput");
    setAddUserbtndata({...addUserbtndata, [name]: value}); 
    console.log(addUserbtndata, "addUserbtndatahjlkjaddUserbtndata")
  }
  const addUserSubmit = (e)=> { 
    e.preventDefault();
    if(addUserbtndata){
      const hello= 5;
      console.log(hello, "hellolkjlkj");
      dispatch(addUserUserManagment(addUserbtndata)); 
      console.log(addUserbtndata, "fsjflskdjfkaddUserbtndata")
    }else{
      const hello= 10;
      console.log(hello, "hellolkjlkj");
    }
    
      
  }

  console.log(updateUserdata, "updateUserdata updateUserdata");
  return (
    <>
      <div className="d-flex">
        <div className="mr-auto p-2 page-header">
          {" "}
          <h3 className="page-title page-title-heading">List of Users</h3>
        </div>
        <div className="p-2">
          <button className="adduser-btn border-0" onClick={toggleModal}>
            Add User button
          </button>
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            style={customStyles}
            contentLabel="My dialog"
          >
            <form
               onSubmit={addUserSubmit}
               >
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
                      type="text"
                      className="form-control modal-firstinput"
                      name="email"
                      onChange={handleAddInput}
                      id="inputPassword"
                      // placeholder="nevaeh.simmons@example.com"
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
                {/* <div className="form-group modal-input-data-div row mt-4">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-2 col-form-label ml-4"
                  >
                    License Type
                  </label>
                  <div className="col-sm-1 col modal-colan">:</div>
                  <div className="col-sm-8">
                    <select
                      className="form-control modal-firstinput"
                      id="exampleFormControlSelect1"
                      onChange={handleAddInput}
                    >
                      <option>123</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div> */}
                
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn border-0 modal-save-btn"
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button type="submit" className="btn modal-cancel-btn">
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
                <tr className="table-first-row">
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
                {apiData.userlist &&
                  apiData.userlist.map((item) => (
                    <tr key={item.id}>
                      <td className="comp-name-th">{item.firstName}</td>
                      <td>{item.email}</td>
                      <td>{item.cellNumber}</td>
                      <td>{item.companyName}</td>
                      <td>
                        <div className="d-flex justify-content-center ">
                          <button
                            type="button"
                            className="btn btn-secondary comp-edit-btn m-1"
                            onClick={() => {
                              toggleModalUser(index);
                            }}
                          >
                            Edit
                          </button>
                          <Modal
                            isOpen={isOpen1}
                            onRequestClose={toggleModalUser}
                            style={customStyles}
                            contentLabel="My dialog"
                           >
                            {updateUserdata && (
                              <div key={updateUserdata.id}>
                                <div className="d-flex flex-row modal-firstdiv">
                                  <div className="p-2 modal-heading">
                                    <h1 className="modal-heading-fontfamily">
                                      Add User
                                    </h1>
                                  </div>
                                </div>
                                <div className="modal-form-div">
                                  <form>
                                    <div className="form-group modal-input-data-div row mt-4">
                                      <label
                                        htmlFor="staticEmail"
                                        className="col-sm-2 col-form-label ml-4"
                                      >
                                        Email Address
                                      </label>
                                      <div className="col-sm-1 col modal-colan">
                                        :
                                      </div>
                                      <div className="col-sm-8">
                                        <input
                                          type="text"
                                          className="form-control modal-firstinput"
                                          id="inputPassword"
                                          // value={updateUserdata.email}
                                          value={updateUserdata.email == null ? '' : updateUserdata.email}
                                          onChange={handleUserManaModalInput}
                                          //  placeholder="nevaeh.simmons@example.com"
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
                                      <div className="col-sm-1 col modal-colan">
                                        :
                                      </div>
                                      <div className="col-sm-8">
                                        <input
                                          type="text"
                                          className="form-control modal-firstinput"
                                          id="inputPassword"
                                          // value={updateUserdata.firstName}
                                          value={updateUserdata.firstName == null ? '' : updateUserdata.firstName}
                                          onChange={handleUserManaModalInput}
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
                                      <div className="col-sm-1 col modal-colan">
                                        :
                                      </div>
                                      <div className="col-sm-8">
                                        <input
                                          type="text"
                                          className="form-control modal-firstinput"
                                          id="inputPassword"
                                          // value={updateUserdata.lastName}
                                          value={updateUserdata.lastName == null ? '' :updateUserdata.lastName}
                                          onChange={handleUserManaModalInput}
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
                                      <div className="col-sm-1 col modal-colan">
                                        :
                                      </div>
                                      <div className="col-sm-8">
                                        <input
                                          type="text"
                                          className="form-control modal-firstinput"
                                          id="inputPassword"
                                          // value={updateUserdata.title}
                                          value={updateUserdata.title == null ? '' :updateUserdata.title}
                                          onChange={handleUserManaModalInput}
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
                                      <div className="col-sm-1 col modal-colan">
                                        :
                                      </div>
                                      <div className="col-sm-8">
                                        <input
                                          type="text"
                                          className="form-control modal-firstinput"
                                          id="inputPassword"
                                          // value={updateUserdata.officeNumber}
                                          value={updateUserdata.officeNumber == null ? '' :updateUserdata.officeNumber}
                                          onChange={handleUserManaModalInput}
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
                                      <div className="col-sm-1 col modal-colan">
                                        :
                                      </div>
                                      <div className="col-sm-8">
                                        <input
                                          type="text"
                                          className="form-control modal-firstinput"
                                          id="inputPassword"
                                          // value={updateUserdata.cellNumber}
                                          value={updateUserdata.cellNumber == null ? '' :updateUserdata.cellNumber}
                                          onChange={handleUserManaModalInput}
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
                                      <div className="col-sm-1 col modal-colan">
                                        :
                                      </div>
                                      <div className="col-sm-8">
                                        <select
                                          className="form-control modal-firstinput"
                                          id="exampleFormControlSelect1"
                                        >
                                          <option>{updateUserdata.licenceType}</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                        </select>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                                <div className="d-flex justify-content-end">
                                  <button
                                    type="button"
                                    className="btn border-0 modal-save-btn"
                                    onClick={toggleModalUser}
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="button"
                                    className="btn modal-cancel-btn"
                                  >
                                    Add User
                                  </button>
                                </div>
                              </div>
                            )}
                       
                          </Modal>
                          <button
                            type="button"
                            className="btn usermana-dele-btn m-1"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
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
              {/* <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li> */}
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
