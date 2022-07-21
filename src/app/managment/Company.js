import React, {useEffect,useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Modal } from "antd";
import EditCompanyList from "./EditCompanyList";


import { useDispatch,useSelector } from "react-redux";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Oval } from "react-loader-spinner";
import { styled } from "@mui/material/styles";
import { userListData } from "../Redux/Action/UserAction";
const Company = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const isLoading = useSelector((state) => state.data && state.data.loading);




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

 
  // const userListData  = useSelector((state) => state.userListData);

  // const userlistdata = useSelector((state) => state.userlistdata);
  // console.log(userlistdata.userlist, "userlistdatahello")

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(userListData());
  //   console.log(userListData ,"userListDataxsaaaaaaaaaafdffdgdgd")
  // }, [dispatch]);
 


// const [userlistdata,setuserListData] = useState();

// const user = useSelector((state) => state.userlistdata);
// useEffect(()=>{
// if(user && user.editcompanydata && user.editcompanydata.data){
//   setuserListData(user.editcompanydata.data)
// }
// },[user])

// useEffect(() => {
// dispatch(userListData());
// }, [dispatch]);



const dispatch =  useDispatch()


const [ userlistdata ,setUserListData] = useState();
const users = useSelector((state) => state. userlistdata);
useEffect(()=>{
if(users && users.userlist && users.userlist.data){
  setUserListData(users.userlist.data)
}
},[users])

useEffect(() => {
dispatch(userListData());
}, [dispatch]);





  return (
    <>
      <div className="page-header">
        <h3 className="page-title page-title-heading">List of Company</h3>
        <Modal visible={isModalVisible}>
          <EditCompanyList />
        </Modal>
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
            <thead className="thead-table ">
              <tr className="table-first-row ">
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
              { userlistdata && !isLoading ? (
                 userlistdata.map((item, index) => (
                  <tr key={item.id}>
                    <td className="comp-name-th">{item.companyName}</td>
                    <td>{item.duns}</td>
                    <td>{item.pocEmail}</td>
                    <td className="complete-keyword">{item.address}</td>
                    <td className="text-center">
                      <button
                        type="button"
                        className="btn btn-secondary comp-edit-btn align-center"
                        onClick={showModal}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
               
              ) : (
                <div style={{ marginLeft: 450 }}>
                  <Oval color="black" height={80} width={80} />
                </div>
              )}
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



