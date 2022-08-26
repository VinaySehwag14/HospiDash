// import * as React from "react";
// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "Patient", headerName: "Patient name", width: 130 },
//   { field: "consultation", headerName: "Consultation", width: 130 },
//   { field: "Team", headerName: "Team", width: 130 },
//   { field: "Doctor", headerName: "Doctor", width: 130 },
//   { field: "Slot", headerName: "Slot", width: 130 },
//   { field: "Status", headerName: "Status", width: 130 },
//   { field: "Invoice", headerName: "Invoice", width: 130 },
//   { field: "*", headerName: "Action", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//   },
// ];

// const rows = [
//   {
//     id: 1024,
//     Patient: "Risha Mahin",
//     consultation: "video call",
//     Team: "Medical Camp",
//     Doctor: "Anil Kumar",
//     Slot: "Jul 3,2021 8:53 AM",
//     Time: "8:53 AM",
//     Status: "Cancelled",
//     Invoice: "Paid",
//     age: 35,
//     Sex: "M",
//   },
//   {
//     id: 2453,
//     Patient: "Cersei Lannister",
//     Team: "Medical Camp",
//     Doctor: "Sushil",
//     Slot: "Jul 3,2021",
//     Time: "8:53 AM",
//     Status: "Cancelled",
//     Invoice: "Paid",

//     consultation: "video call",
//     age: 42,
//     Sex: "M",
//   },
//   {
//     id: 3546,
//     Patient: "Jaime",
//     consultation: "Anytime Consult",
//     Team: "Medical Camp",
//     Doctor: "Sunil Chetri",
//     Slot: "Jul 3,2021",
//     Time: "8:53 AM",
//     Status: "Cancelled",
//     Invoice: "Paid",
//     age: 45,
//     Sex: "M",
//   },
//   {
//     id: 4456,
//     Patient: "Arya Stark",
//     consultation: "video call",
//     Doctor: "Tony Kumar",
//     Slot: "Jul 3,2021",
//     Time: "8:53 AM",
//     Status: "Booked",
//     Invoice: "Paid",
//     age: 16,
//     Sex: "M",
//   },
//   {
//     id: 5456,
//     Patient: "Daenerys Targaryen",
//     consultation: "Video",
//     Doctor: "Shyam Rama",
//     Slot: "Jul 3,2021",
//     Time: "8:53 AM",
//     Status: "Completed ",
//     Invoice: "Paid",
//     age: 24,
//     Sex: "M",
//   },
//   {
//     id: 6345,
//     Patient: "Nikita Gandhi",
//     consultation: "In person",
//     Doctor: "Pankaj Kumar",
//     Slot: "Jul 3,2021",
//     Time: "8:53 AM",
//     Status: "No show",
//     Invoice: "Paid",
//     age: 150,
//     Sex: "M",
//   },
// ];

// export default function DataTable() {
//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       <DataGrid rows={rows} columns={columns} pageSize={6} />
//     </div>
//   );
// }
