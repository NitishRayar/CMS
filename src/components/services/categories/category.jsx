// import { COLUMNS } from "./columns";
import AddCategory from "./addCategory";
import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { DynamicTable } from "../../table/dynamicTable";
import { categoriesData } from "../../../data/Categories";

export const Category = () => {
  const [categories, setCategories] = useState([]);
  const [showAddCategory, setAddCategory] = useState(false);
  const openAddCategoryForm = () => {
    setAddCategory(true);
  };
  const closeAddCategoryForm = () => {
    setAddCategory(false);
  };
  useEffect(() => {
    const getcategories = async () => {
      // const reqData = await fetch("http://localhost:8082/categories");
      // const resData = await reqData.json();
      // console.log(resData);
      // TODO remove categoriesData and uncomment above call
      setCategories(categoriesData);
    };
    getcategories();
  }, [categoriesData]);

  const COLUMNS = [
    {
      Header: "Sr. No",
      accessor: (_row, i) => i + 1
    },
    {
      Header: "Category Name",
      accessor: "categoryName"
    },
    {
      Header: "Category Name(Kannada)",
      accessor: "categoryNameK"
    },
    {
      Header: "Code",
      accessor: "categoryCode"
    },
    {
      Header: "Created Date",
      accessor: "createdDate"
    },
    {
      Header: "Actions",
      accessor: "actions",
      Cell: props => {
        console.log(props.row.original.categoryCode);
        return (
          <div>
            <span onClick={openAddCategoryForm}>
              <i className="far fa-edit action mr-2"></i>
            </span>

            <span onClick={() => console.log("clicked on delete button")}>
              <i className="fas fa-trash action"></i>
            </span>
          </div>
        );
      }
    }
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {!showAddCategory && <h5 className="mt-2">Categories</h5>}
          <div className="d-grid d-md-flex justify-content-md-end mb-3">
            {!showAddCategory && (
              <div className="btn btn-warning" onClick={openAddCategoryForm}>
                Add New Category
              </div>
            )}
            {showAddCategory && <AddCategory onClose={closeAddCategoryForm} />}
          </div>
          <DynamicTable columns={COLUMNS} rows={categories} />
        </div>
      </div>
    </div>
  );
};
