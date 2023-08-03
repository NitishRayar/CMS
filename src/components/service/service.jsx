import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddService from "./addService";
// import AddCategory from "../components/addCategory";

const Service =()=>{
    const [services, setServices]= useState([]); 
    const [showAddService, setAddService] = useState(false);
    useEffect( ()=>{
        const fetchAllService= async()=>{
            // const reqData= await fetch("https://cms-project-73d0b-default-rtdb.asia-southeast1.firebasedatabase.app/category.json");
            const reqData= await fetch("http://localhost:8082/service");
            const resData= await reqData.json();
            setServices(resData);
           console.log(resData);
        }
        fetchAllService();
    },[]);
    const openAddServiceForm = () =>{
        setAddService(true);
    }
    const closeAddServiceForm = () =>{
        setAddService(false);
    }
 
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    {!showAddService &&(<h5 className="mt-2">Services</h5>)}
                       <div className="d-grid d-md-flex justify-content-md-end mb-3">
                        {!showAddService &&( <div className="btn btn-warning" onClick={openAddServiceForm}>Add New Service</div>)}
                        {showAddService && (<AddService onClose={closeAddServiceForm}/>)}
                       </div>
                       <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                        <th>Sr. No</th>
                        <th>Service</th>
                        <th>title</th>
                        <th>Place </th>
                        <th>Ward</th>
                        <th>Person</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                         { services.map( (service, index)=>(                           
                        <tr key={index}>
                        <td>{index+1} </td>
                        <td>{ service.message } </td>
                        <td>{ service.messageTitle } </td>
                        <td>{ service.placeNamek } </td>
                        <td>{ service.wardNamek } </td>
                        <td>{ service.personNamek } </td>
                        <td>{ service.categoryNamek } </td>
                        <td>{ service.serviceType } </td>
                        <td>
                         <div className="btn btn-success mx-2" onClick={openAddServiceForm}>Edit</div>
                         <Link to="/deleteUser" className="btn btn-danger">Delete</Link>
                        </td>
                        </tr>
                        )) 
                        }                        
                        </tbody>
                        </table>                            
                    </div>
                </div>
            </div>
            
        </>
    );
}



export default Service;