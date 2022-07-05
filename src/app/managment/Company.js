import React, { useState } from "react";
import "./Company.css";
import Modal from "react-modal";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, updateConpanyList } from "../Redux/Action/UserAction";
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
const Company = ({ data }) => {
  let dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState({});
 
  const[onloadeddata,setoldData]=useState()
//   const [address, setAddress] = useState();
  const [index, setIndex] = useState(0);
  const { users } = useSelector((state) => state.data); //RootReducer
  const {editcompanylistdata} = useSelector((state) => state.data);
  console.log(editcompanylistdata, "editcompanylistdata");
  const [modalInput, setModalInput] = useState({
    address: ""
  });
  const{address}= modalInput

  const toggleModal = (index) => {
    setIndex(index);
    setIsOpen(!isOpen);
    // if(!isOpen) {
    //    editHandler(index);
    // }
  };

  useEffect(() => {
    editHandler(index);
  }, [isOpen]);

  const updateModalData = (e) => {
   e.preventDefault();
      if(modalInput){
         dispatch(updateConpanyList(modalInput));
      }
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

  const editHandler = async(index) => {
    console.log(index, "indes of companylist")
    await setEditData(users[index]);
    await setModalInput({address:editData.address})
  };
  console.log(editData, "editDataeditDataeditDataeditData");
  console.log(editData, "editDataeditDataeditDataeditData");

  const handleModalInput = (e) => {
  //  const name = e.target.name;
  //  const value = e.target.value;
  //  console.log(name, value, "name && value");
   setModalInput({...modalInput,[e.target.name]: e.target.value })
  };

  useEffect(() => {
    console.log("Edit Update");
  }, [editData]);

  useEffect(() => {
    // setCompanyData(users);
    dispatch(loadUsers());
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
              {users &&
                users.map((item, index) => (
                  <tr key={item.id}>
                    <td className="comp-name-th">{item.companyName}</td>
                    <td>{item.duns}</td>
                    <td>{item.pocEmail}</td>
                    <td className="complete-keyword">{item.address}</td>
                    <td className="text-center">
                      <button
                        type="button"
                        className="btn btn-secondary comp-edit-btn align-center"
                        // onClick={toggleModal}
                        onClick={() => {
                          toggleModal(index);
                        }}
                      >
                        Edit
                      </button>
                      <Modal
                        isOpen={isOpen}
                        onRequestClose={toggleModal}
                        style={customStyles}
                        contentLabel="My dialog"
                      >
                        {editData && (
                          <div key={editData.id}>
                            <div className="d-flex flex-row modal-firstdiv">
                              <div className="p-2 modal-heading">
                                <h1 className="modal-heading-fontfamily">
                                  {editData.companyName}
                                </h1>
                              </div>
                            </div>
                            <div className="modal-form-div">
                              <form onSubmit={updateModalData}>
                                <div className="form-group modal-input-data-div row mt-4">
                                  <label className="col-sm-2 col-form-label ml-4">
                                    Address
                                  </label>
                                  <div className="col-sm-1 col modal-colan">
                                    :
                                  </div>
                                  <div className="col-sm-8">
                                    <input
                                      type="text"
                                      className="form-control modal-firstinput"
                                      id="inputPassword"
                                      name="address"
                                      onChange={handleModalInput}
                                      value={modalInput.address}
                                    />
                                  </div>
                                </div>
                                <div className="form-group modal-input-data-div row mt-4">
                                  <label
                                    htmlFor="staticEmail"
                                    className="col-sm-2 col-form-label ml-4"
                                  >
                                    DUNS
                                  </label>
                                  <div className="col-sm-1 col modal-colan">
                                    :
                                  </div>
                                  <div className="col-sm-8">
                                    <input
                                      type="text"
                                      className="form-control modal-firstinput"
                                      id="inputPassword"
                                      name="duns"
                                      onChange={handleModalInput}
                                      //  placeholder="123456789"
                                      value={editData.duns}
                                    />
                                  </div>
                                </div>
                                <div className="form-group modal-input-data-div row mt-4">
                                  <label
                                   htmlFor="staticEmail"
                                    className="col-sm-2 col-form-label ml-4"
                                  >
                                    CAGE
                                  </label>
                                  <div className="col-sm-1 col modal-colan">
                                    :
                                  </div>
                                  <div className="col-sm-8">
                                    <input
                                      type="text"
                                      className="form-control modal-firstinput"
                                      id="inputPassword"
                                      name="cage"
                                      onChange={handleModalInput}
                                      //  placeholder="ABCDEF"
                                      value={editData.cage}
                                    />
                                  </div>
                                </div>
                                <div className="form-group modal-input-data-div row mt-4">
                                  <label
                                   htmlFor="staticEmail"
                                    className="col-sm-2 col-form-label ml-4"
                                  >
                                    POC Email
                                  </label>
                                  <div className="col-sm-1 col modal-colan">
                                    :
                                  </div>
                                  <div className="col-sm-8">
                                    <select
                                      className="form-control modal-firstinput"
                                      id="exampleFormControlSelect1"
                                      //  value={item.pocEmail}
                                    >
                                      <option defaultValue={editData.pocEmail}>
                                        {editData.pocEmail}
                                      </option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="form-group modal-input-data-div row mt-4">
                                  <label
                                    htmlFor="staticEmail"
                                    className="col-sm-2 col-form-label ml-4"
                                  >
                                    Set-Aside
                                  </label>
                                  <div className="col-sm-1 col modal-colan">
                                    :
                                  </div>
                                  <div className="col-sm-8">
                                    <select
                                      className="form-control modal-firstinput"
                                      id="exampleFormControlSelect1"
                                    >
                                      <option>{editData.setAside}</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="form-group modal-input-data-div row mt-4">
                                  <label
                                    htmlFor="staticEmail"
                                    className="col-sm-2 col-form-label ml-4 corporate-certification-div"
                                  >
                                    Corporate Certifications
                                  </label>
                                  <div className="col-sm-1 col modal-colan">
                                    :
                                  </div>
                                  <div className="col-sm-8">
                                    <input
                                      type="text"
                                      className="form-control modal-firstinput"
                                      id="inputPassword"
                                      name="corporatecertifications"
                                      onChange={handleModalInput}
                                      //  placeholder="ISO 9001:27000 CMMILvi 3"
                                      value={editData.corporateCertification}
                                    />
                                  </div>
                                </div>
                                <div className="form-group modal-input-data-div row mt-4">
                                  <label
                                   htmlFor="staticEmail"
                                    className="col-sm-2 col-form-label ml-4"
                                  >
                                    NAICS Codes
                                  </label>
                                  <div className="col-sm-1 col modal-colan">
                                    :
                                  </div>
                                  <div className="col-sm-8">
                                    <select
                                      className="form-control modal-firstinput"
                                      id="exampleFormControlSelect1"
                                    >
                                      <option>{editData.naicsCodes}</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="form-group modal-input-data-div row mt-4">
                                  <label
                                    htmlFor="staticEmail"
                                    className="col-sm-2 col-form-label ml-4"
                                  >
                                    Keywords
                                  </label>
                                  <div className="col-sm-1 col modal-colan">
                                    :
                                  </div>
                                  <div className="col-sm-8">
                                    <input
                                      type="text"
                                      className="form-control modal-firstinput"
                                      id="inputPassword"
                                      name="keywords"
                                      onChange={handleModalInput}
                                      value={editData.keyWords}
                                      //  placeholder="Helpdesk, Cloud Engineering, Tier I/II Helpdesk, Construction Management"
                                    />
                                  </div>
                                </div>
                                <div className="form-group modal-input-data-div row mt-4">
                                  <label
                                    htmlFor="staticEmail"
                                    className="col-sm-2 col-form-label ml-4"
                                  >
                                    Capability Briefing
                                  </label>
                                  <div className="col-sm-1 col modal-colan">
                                    :
                                  </div>
                                  <div className="col-sm-8">
                                    <input
                                      type="text"
                                      className="form-control modal-firstinput"
                                      id="inputPassword"
                                      name="capabilitybriefing"
                                      onChange={handleModalInput}
                                      value={editData.capabilityBriefing}
                                      //  placeholder="Uploaded/Not Available"
                                    />
                                  </div>
                                </div>
                                <div className="form-group modal-input-data-div row mt-4">
                                  <label
                                   htmlFor="staticEmail"
                                    className="col-sm-2 col-form-label ml-4"
                                  >
                                    Website
                                  </label>
                                  <div className="col-sm-1 col modal-colan">
                                    :
                                  </div>
                                  <div className="col-sm-8">
                                    <input
                                      type="text"
                                      className="form-control modal-firstinput"
                                      id="inputPassword"
                                      name="website"
                                      onChange={handleModalInput}
                                      value={editData.websites}
                                      //  placeholder="www.rfpintels.com"
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="d-flex justify-content-end">
                              <button
                                type="submit"
                                className="btn border-0 modal-save-btn"
                                //  onClick={updateModalData}
                              >
                                Save
                              </button>
                              <button
                                type="button"
                                className="btn modal-cancel-btn"
                                onClick={toggleModal}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        )}

                        {/* <button >Close modal</button> */}
                      </Modal>
                    </td>
                  </tr>
                ))}

           
            </tbody>
          </table>
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
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
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
      </div>
    </>
  );
};
export default Company;
