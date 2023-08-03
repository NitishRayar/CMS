import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./service.css";

const AddService = (props) => {
  const [formValue, setFormValue] = useState({
    placeCode: "",
    wardCode: "",
    personId: "",
    categoryCode: "",
    messageTitle: "",
    message: "",
  });
  const [places, setPlaces] = useState([]);
  const [categories, setCategories] = useState([]);
  const [wards, setWards] = useState([]);
  const [people, setPeople] = useState([]);
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchAllPlace = async () => {
      const reqData = await fetch("http://localhost:8082/places");
      const resData = await reqData.json();
      setPlaces(resData);
      console.log(resData);
    };
    fetchAllPlace();
    const fetchAllCategory = async () => {
      const reqData = await fetch("http://localhost:8082/categories");
      const resData = await reqData.json();
      setCategories(resData);
      console.log(resData);
    };
    fetchAllCategory();
  }, []);

  const onPlaceSelect = (e) => {
    handleInput(e);
    const { value } = e.target;
    const wardsData = places.filter((place) => {
      return place.placeCode === value;
    });
    setWards(wardsData[0].wards);
  };
  const onWardSelect = (e) => {
    handleInput(e);
    const { value } = e.target;
    const people = wards.filter((ward) => {
      return ward.wardCode === value;
    });
    setPeople(people[0].personList);
    
  };
  const renderPlaces = places.map((place) => {
    return (
      <option key={place.placeCode} value={place.placeCode}>
        {place.placeNameK}
      </option>
    );
  });
  const renderWards =
    wards &&
    wards.map((ward) => {
      return (
        <option key={ward.wardCode} value={ward.wardCode}>
          {ward.wardNameK}
        </option>
      );
    });
  const renderPeople =
    people &&
    people.map((person) => {
      return (
        <option key={person.personId} value={person.personId}>
          {person.personNameK}
        </option>
      );
    });
  const renderCategories = categories.map((category) => {
    return (
      <option key={category.categoryCode} value={category.categoryCode}>
        {category.categoryNameK}
      </option>
    );
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const allInputvalue = {
      placeCode: formValue.placeCode,
      wardCode: formValue.wardCode,
      personId: formValue.personId,
      categoryCode: formValue.categoryCode,
      messageTitle: formValue.messageTitle,
      message: formValue.message
    };

    console.log(allInputvalue);
    let res = await fetch("http://localhost:8082/service", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(allInputvalue),
    });

    let resjson = await res.json();
    console.log(resjson);
    if (res.status === 200) {
      setMessage(resjson.success);
      setTimeout(() => {
        navigate("/service");
      }, 2000);
    } else {
      setMessage("Some Error Occured");
    }
    props.onClose();

    // console.log(allInputvalue);
  };

  const closeForm = () => {
    props.onClose();
  };
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
                    <label className="form-lable">Place</label>
                    <select id="place" name="placeCode" value={formValue.placeCode} className="form-control"  onChange={onPlaceSelect}>
                      <option value="default">Select Place</option>
                      {renderPlaces}
                    </select>
                    {/* <input
                      type="text"
                      name="categoryName"
                      className="form-control"
                      value={formValue.categoryName}
                      onChange={handleInput}
                    /> */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-lable">Ward</label>
                    <select id="ward" name="wardCode" value={formValue.wardCode} className="form-control"  onChange={onWardSelect}>
                      <option value="default">Select Ward</option>
                      {renderWards}
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-lable">Person</label>
                    <select id="person" name="personId"  value={formValue.personId} className="form-control"  onChange={handleInput} >
                      <option value="default">Select Person</option>
                      {renderPeople}
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-lable">Category</label>
                    <select id="category" name="categoryCode" value={formValue.categoryCode} className="form-control" onChange={handleInput}>
                      <option value="default">Select Category</option>
                      {renderCategories}
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-lable">Message Title</label>
                    <input
                      type="text"
                      name="messageTitle"
                      className="form-control"
                      value={formValue.messageTitle}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-lable">Message</label>
                    <input
                      type="text"
                      name="message"
                      className="form-control"
                      value={formValue.message}
                      onChange={handleInput}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <button
                        type="button"
                        onClick={closeForm}
                        className="btn btn-danger btn-lg button-style"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="btn btn-success btn-lg button-style"
                      >
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

export default AddService;
