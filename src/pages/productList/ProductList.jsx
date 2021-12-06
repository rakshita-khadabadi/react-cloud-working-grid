import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList(props) {
  

  return (
    <div className="productList">
      <div className="title">
      Welcome, {props.firstName} {props.lastName}
      </div>
   </div>
);
}
