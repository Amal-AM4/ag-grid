// define the column definitions
let columnDefs = [
    { headerName: "Employee ID", field: "id" },
    { headerName: "Name", field: "name" },
    { headerName: "Age", field: "age" },
    { headerName: "Position", field: "position" },
    { headerName: "City", field: "city" }
];

// sample row data for Indian employees
let rowData = [
    { id: 1, name: "Amit Sharma", age: 29, position: "Software Engineer", city: "Bengaluru" },
    { id: 2, name: "Priya Kumar", age: 32, position: "Product Manager", city: "Mumbai" },
    { id: 3, name: "Rajesh Gupta", age: 41, position: "Team Lead", city: "Delhi" },
    { id: 4, name: "Sunita Joshi", age: 35, position: "HR Manager", city: "Pune" },
    { id: 5, name: "Kiran Desai", age: 28, position: "UX Designer", city: "Hyderabad" }
];

// Grid options
const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData
};

// Initialize the grid
// Use the new createGrid method
const eGridDiv = document.querySelector('#myGrid');
const gridApi = agGrid.createGrid(eGridDiv, gridOptions);