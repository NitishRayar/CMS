import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddCategory from "../components/addCategory";

const Category =()=>{
    const [categories, setCategories]= useState([]); 
    const [showAddCategory, setAddCategory] = useState(false);
    useEffect( ()=>{
        const getcategories= async()=>{
            const reqData= await fetch("https://cms-project-73d0b-default-rtdb.asia-southeast1.firebasedatabase.app/category.json");
            const resData= await reqData.json();
            setCategories(resData.categories);
           console.log(resData);
        }
        getcategories();
    },[]);
    const openAddCategoryForm = () =>{
        setAddCategory(true);
    }
    const closeAddCategoryForm = () =>{
        setAddCategory(false);
    }
 
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    {!showAddCategory &&(<h5 className="mt-2">Categories</h5>)}
                       <div className="d-grid d-md-flex justify-content-md-end mb-3">
                        {!showAddCategory &&( <div className="btn btn-warning" onClick={openAddCategoryForm}>Add New Category</div>)}
                        {showAddCategory && (<AddCategory onClose={closeAddCategoryForm}/>)}
                       </div>
                       <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                        <th>Sr. No</th>
                        <th>Name</th>
                        <th>Name Kannada</th>
                        <th>Code</th>
                        <th>Created Date</th>
                        <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                         { categories.map( (category, index)=>(                           
                        <tr key={index}>
                        <td>{index+1} </td>
                        <td>{ category.name } </td>
                        <td>{ category.name_k } </td>
                        <td>{ category.code } </td>
                        <td>{ category.created_date } </td>
                        <td>
                         <div className="btn btn-success mx-2" onClick={openAddCategoryForm}>Edit</div>
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



export default Category;