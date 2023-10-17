import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './category.css'

const AddCategory = (props) => {
  const [formValue, setFormValue] = useState({
    categoryName: "",
    categoryNameK: "",
    categoryCode: ""
  });
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const allInputvalue = {
      categoryName: formValue.categoryName,
      categoryNameK: formValue.categoryNameK,
      categoryCode: formValue.categoryCode
    };

      let res= await fetch("http://localhost:8082/category",{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(allInputvalue)
      });
      
      let resjson= await res.json();
      console.log(resjson)
      if(res.status===200)
      {
        setMessage(resjson.success);
        setTimeout(()=>{
            navigate('/category');
        }, 2000);

      } else{
        setMessage("Some Error Occured");
      }
    props.onClose();

    // console.log(allInputvalue);
  };

  const closeForm = () =>{
    props.onClose();
  }
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5 className="mt-2">Add Category</h5>
            <p className="text-success"> {message} </p>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-lable">Category Name</label>
                    <input
                      type="text"
                      name="categoryName"
                      className="form-control"
                      value={formValue.categoryName}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-lable">
                      Category Name (kannada)
                    </label>
                    <input
                      type="text"
                      name="categoryNameK"
                      className="form-control"
                      value={formValue.categoryNameK}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-lable">Category Code</label>
                    <input
                      type="text"
                      name="categoryCode"
                      className="form-control"
                      value={formValue.categoryCode}
                      onChange={handleInput}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <button type="button" onClick={closeForm} className="btn btn-danger btn-lg button-style">
                        Close
                      </button>
                      <button type="submit" className="btn btn-success btn-lg button-style">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddCategory;
