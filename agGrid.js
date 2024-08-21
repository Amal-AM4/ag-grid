let filterParams = {
    comparator: (filterLocalDateAtMidnight, cellValue) => {
      var dateAsString = cellValue;
      if (dateAsString == null) return -1;
      var dateParts = dateAsString.split("/");
      var cellDate = new Date(
        Number(dateParts[2]),
        Number(dateParts[1]) - 1,
        Number(dateParts[0]),
      );
  
      if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
        return 0;
      }
  
      if (cellDate < filterLocalDateAtMidnight) {
        return -1;
      }
  
      if (cellDate > filterLocalDateAtMidnight) {
        return 1;
      }
      return 0;
    },
    minValidYear: 2000,
    maxValidYear: 2024,
    inRangeFloatingFilterDateFormat: "Do MMM YYYY",
};


// define the column definitions
let columnDefs = [
    { headerName: "Employee ID", field: "id" },
    { headerName: "Name", field: "name" },
    { headerName: "Age", field: "age" },
    { headerName: "Position", field: "dept" },
    { headerName: "City", field: "city" },
    { headerName: "DOB", field: "date", filter: "agDateColumnFilter",filterParams: filterParams },
];

// sample row data for Indian employees
let rowData = [
    { id: 1, name: "Amit Sharma", age: 29, dept: "Software Engineer", city: "Bengaluru", date: "21/01/2000" },
    { id: 2, name: "Priya Kumar", age: 32, dept: "Product Manager", city: "Mumbai", date: "03/07/2010" },
    { id: 3, name: "Rajesh Gupta", age: 41, dept: "Team Lead", city: "Delhi", date: "01/10/2000" },
    { id: 4, name: "Sunita Joshi", age: 35, dept: "HR Manager", city: "Pune", date: "16/06/2005" },
    { id: 5, name: "Kiran Desai", age: 28, dept: "UX Designer", city: "Hyderabad", date: "21/01/2000" },

];

// Grid options
const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    defaultColDef: {
        flex: 1,
        minWidth: 100,
        filter: true,
        floatingFilter: true
    },
    rowSelection: "multiple",
    pagination: true,
    paginationPageSize: 10,
    paginationPageSizeSelector: [10, 20],
};

// Initialize the grid
// Use the new createGrid method
const eGridDiv = document.querySelector('#myGrid');
const gridApi = agGrid.createGrid(eGridDiv, gridOptions);