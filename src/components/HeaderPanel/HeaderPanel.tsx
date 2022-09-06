import { Box, Typography } from "@mui/material";
// Assets
import smiles from "../../assets/svg/smiles.svg";

function HeaderPanel() {
  return (
    <>
      <Box
        display={"flex"}
        width={"100%"}
        alignItems={"center"}
        flexDirection={"column"}
        sx={{ py: 1 }}>
        <img src={smiles} alt="bequest logo" />
      </Box>
      <Box>
        <Typography
          variant="h1"
          fontFamily={'"HCo Gotham SSm",sans-serif'}
          fontWeight={800}
          lineHeight={1.2}
          fontSize={"3.75rem"}
          align="center"
          margin={"0 0 15px 0"}
        >
          Search for your address in the book.
        </Typography>
        <Typography
          variant="h3"
          margin={"0 0 15px 0"}
          fontFamily={'"Amithen",sans-serif'}
          fontSize={"2.875rem"}
          align="center"
          fontWeight={800}
        >
          It’s not rocket science.
        </Typography>
      </Box>
    </>
  );
}

export default HeaderPanel;

