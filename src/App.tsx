import { Box } from "@mui/material";
import { ToastContainer } from 'react-toastify';
// Components
import Nav from "./components/Nav/Nav";
import { DialogBox } from "./components/DialogBox/DialogBox";
import HeaderPanel from "./components/HeaderPanel/HeaderPanel";
import AddressBook from "./components/AddressBook/AddressBook";
import SearchPostcode from "./components/SearchPostcode/SearchPostcode";
// Context
import AddressBookContextProvider from "./context/AddressBookContext";

import "./App.css";

function App() {

  return (
    <AddressBookContextProvider>
      <DialogBox />
      <ToastContainer />
      <Nav />
      <HeaderPanel />
      <Box bgcolor={"white"} margin={"0 10%"} sx={{ width: "md" }}>
        <SearchPostcode />
        <AddressBook />
      </Box>
    </AddressBookContextProvider>
  );
}

export default App;
