import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function UserList() {
  const [blogs, setBlogs] = useState(null)
  let rowData;
  useEffect(() => {
    axios.get('http://34.127.76.90:8080/getAllLeaseHolders')
    .then(response=> {
      
      rowData = response.data.data.leaseHolderList
      //userRows = rowData
      console.log(rowData,'response from API')
      setBlogs(rowData)
      console.log(setBlogs,'blogs')
      
    })
    .catch(error =>{
      console.log(error,'api error')
    })
  //   fetch('http://34.127.76.90:8080/getAllLeaseHolders')
  //     .then(res => {
  //       console.log(res,'response')
  //       return res.json();
  //     })
  //     .then(data => {
  //       setBlogs(data);
  //     })
 }, [])
  //const getData=()=> {
    // let rowData
    // let userRows
    // axios.get('http://34.127.76.90:8080/getAllLeaseHolders')
    // .then(response=> {
      
    //   rowData = response.data.data.leaseHolderList
    //   userRows = rowData
    //   console.log(rowData,'response from API',userRows,'User Rows')
      
    // })
    // .catch(error =>{
    //   console.log(error,'api error')
    // })
  //}


  //userRows = data.occupantList
  //const [data, setData] = useState(userRows);
  //console.log(data,'data', setData, 'dataset')
  
  
  const columns = [
    {field: "userId",headerName: "Id",width: 100},
    {field: "firstName",headerName: "First Name",width: 180},
    { field: "emailId", headerName: "Email", width: 180 },
    {field: "name",headerName: "Apt Name",width: 180},
    {field: "rentPerOccupant",headerName: "Rent",width: 180},
    {field: "bathroomCount",headerName: "Bath Count",width: 180},
    {field: "bedroomCount",headerName: "Bed Count",width: 180},
    {field: "furnishingStatus",headerName: "Furnished",width: 180},
    {field: "moveInDate",headerName: "Move In Date",width: 180},
  ];

  return (
    <div className="userList">
      {blogs && <DataGrid
        rows={blogs}
        getRowId={(r) => r.userId}
        columns={columns}
        pageSize={8}
        checkboxSelection
      />}
    </div>
  );
}
