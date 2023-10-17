export const COLUMNS=[
    {
        Header: 'Sr. No',
        accessor: (_row, i ) => i + 1 
    },
    {
        Header: 'Category Name',
        accessor: 'categoryName'
    },
    {
        Header: 'Category Name(Kannada)',
        accessor: 'categoryNameK'
    },
    {
        Header: 'Code',
        accessor: 'categoryCode'
    },
    {
        Header: 'Created Date',
        accessor: 'createdDate'
    },
    {
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
          console.log(props.row.original.categoryCode)
          return (
            <div>
              <span onClick={() => console.log('clicked on edit button')}>
                <i className="far fa-edit action mr-2"></i>
              </span>
    
              <span onClick={() => console.log('clicked on delete button')}>
                <i className="fas fa-trash action"></i>
              </span>
            </div>
          );
        }
    }
];