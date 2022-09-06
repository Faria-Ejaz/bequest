import { useContext } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
// Context
import { AddressBookContext } from "../../context/AddressBookContext";

function AddressBook() {
  const { address } = useContext(AddressBookContext);

  const columns: GridColDef[] = [
    {
      field: "line_1",
      headerName: "Address1",
      width: 200,
    },
    {
      field: "line_2",
      headerName: "Address2",
      width: 200,
    },
    {
      field: "line_3",
      headerName: "Address3",
      width: 200,
    },
    {
      field: "town",
      headerName: "Town",
      width: 170,
    },
    {
      field: "postcode",
      headerName: "Postcode",
      width: 180,
    },
    {
      field: "country",
      headerName: "Country",
      width: 180,
    },
  ];

  return (
    <Box sx={{ height: 350, width: "100%" }}>
      <DataGrid
      sx={{
        fontFamily: "HCo Gotham SSm, sans-serif",
        color: "#343a40",
      }}
        rows={address}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Box>
  );
}

export default AddressBook;
