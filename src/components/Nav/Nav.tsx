import { Container } from "@mui/system";
import { Box, Link } from "@mui/material";
// Components
import { PrimaryButton } from "../Buttons/Buttons";

import React, { useContext } from "react";

import  {
  AddressBookContext,
} from "../../context/AddressBookContext";

// Assets
import logo from "../../assets/svg/logo.svg";

function Nav() {
  const { setShowModal } = useContext(AddressBookContext);

  return (

    <Box component="nav" bgcolor={"white"} sx={{ py: 3 }}>
      <Container maxWidth="lg">
        <Box display={"flex"} width={"100%"} justifyContent={"space-between"}>
          <Link href="#">
            <img src={logo} alt="bequest logo" />
          </Link>
          <PrimaryButton onClick={()=> setShowModal(true)} text="Add new Address" />
        </Box>
      </Container>
    </Box>
  );
}

export default Nav;
