import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { useState, useEffect } from "react";
import axios from "axios";

export default function UserList(props) {
  const [blogs, setBlogs] = useState(null)
  const[columns,setColumns] = useState(null)
  let rowData;
  useEffect(() => {
    console.log(props.roleName,'rolename')
    if(props.roleName === 'Lease Holder'){
    axios.get('http://34.127.76.90:8080/getAllLeaseHolders')
    .then(response=> {
      setColumns(columnsforLeaseHolder)
      rowData = response.data.data.leaseHolderList
      //userRows = rowData
      console.log(rowData,'response from API')
      setBlogs(rowData)
      console.log(setBlogs,'blogs')

      
    })
    .catch(error =>{
      console.log(error,'api error')
    })
  }
  else{
    console.log('Occupants')
    setColumns(columnsforOccupants)
    axios.get('http://34.127.76.90:8080/getAllOccupants')
    .then(response=> {
      
      rowData = response.data.data.occupantList
      //userRows = rowData
      console.log(rowData,'response from API')
      setBlogs(rowData)
      console.log(setBlogs,'blogs')
      
    })
    .catch(error =>{
      console.log(error,'api error')
    })
  }

 }, [])
 
  
  
  const columnsforLeaseHolder = [
    {field: "userId",headerName: "Id",width: 100},
    {field: "firstName",headerName: "First Name",width: 180},
    {field: "lastName",headerName: "Last Name",width: 180},
    {field: "emailId", headerName: "Email", width: 180 },
    {field: "name",headerName: "Apt Name",width: 180},
    {field: "address",headerName: "Apt Address",width: 180},
    {field: "rentPerOccupant",headerName: "Rent",width: 180},
    {field: "bathroomCount",headerName: "Bath Count",width: 180},
    {field: "bedroomCount",headerName: "Bed Count",width: 180},
    {field: "furnishingStatus",headerName: "Furnished",width: 180},
    {field: "distanceFromCampus",headerName: "Distance From Campus",width: 180},
    {field: "vacancyCount",headerName: "Vacancy Count",width: 180},
    {field: "leaseStartDate",headerName: "Lease Start Date",width: 180},
    {field: "leaseEndDate",headerName: "Lease End Date",width: 180},
    {field: "moveInDate",headerName: "Move In Date",width: 180},
  
    
  ];
  const columnsforOccupants = [
    {field: "userId",headerName: "Id",width: 100},
    {field: "firstName",headerName: "First Name",width: 180},
    {field: "lastName",headerName: "Last Name",width: 180},
    { field: "emailId", headerName: "Email", width: 180 },
    {field: "rentMinimum",headerName: "rentMinimum",width: 180},
    {field: "rentMaximum",headerName: "rentMaximum",width: 180},
    {field: "leaseStartDate",headerName: "Lease Start Date",width: 180},
    {field: "state",headerName: "State",width: 180},
    {field: "country",headerName: "Country",width: 180},
    {field: "gender",headerName: "gender",width: 180},
    {field: "foodPreference",headerName: "foodPreference",width: 180},
    {field: "degreeLevel",headerName: "degreeLevel",width: 180},

   
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
