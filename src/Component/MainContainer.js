import React from "react";
import "../App.css";
import { useNavigate } from "react-router";
function MainContainer() {
  const navigate = useNavigate()
  return (
    <div style={{gap:"20px"}} className="w-100 d-flex ">

      <div onClick={()=>navigate("/create")} style={{cursor:"pointer"}}
       className="p-100 box-shadow w-48 align-items-center justify-content-center text-align-center d-flex">
        
        <h1>  Create Transactions </h1>
  
      </div>

      <div onClick={()=>navigate("/view")} style={{cursor:"pointer"}}
       className="p-100 box-shadow w-48 align-items-center justify-content-center text-align-cente d-flex">
        
       <h1>  View Transactions  </h1>
   
      </div>
    </div>
  );
}                 

export default MainContainer;
